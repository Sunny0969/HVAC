/**
 * Resize/compress a cover image in the browser so CMS can store a durable data URL
 * (Render disk is ephemeral — relative /Images/cms-uploads paths often 404).
 */
export async function compressImageForCmsCover(
  file: File,
  options: { maxWidth?: number; quality?: number; maxBytes?: number } = {}
): Promise<{ blob: Blob; dataUrl: string; mimeType: string }> {
  const maxWidth = options.maxWidth ?? 1200;
  const quality = options.quality ?? 0.78;
  const maxBytes = options.maxBytes ?? 280_000;

  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxWidth / Math.max(bitmap.width, 1));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not process image');
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const mimeType = 'image/jpeg';
  let q = quality;
  let blob: Blob | null = null;
  for (let i = 0; i < 6; i += 1) {
    blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob((b) => resolve(b), mimeType, q);
    });
    if (!blob) break;
    if (blob.size <= maxBytes || q <= 0.45) break;
    q -= 0.08;
  }
  if (!blob || !blob.size) throw new Error('Image compression failed');

  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Could not read compressed image'));
    reader.readAsDataURL(blob!);
  });

  return { blob, dataUrl, mimeType };
}
