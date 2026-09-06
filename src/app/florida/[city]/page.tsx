import { Metadata } from 'next';

type Props = {
  params: Promise<{ city: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const param = resolvedParams.city;
  const formattedParam = param.charAt(0).toUpperCase() + param.slice(1).replace(/-/g, ' ');
  return {
    title: `Sell HVAC Business: ${formattedParam}`,
    description: `Expert services for ${formattedParam}.`
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const param = resolvedParams.city;
  const formattedParam = param.charAt(0).toUpperCase() + param.slice(1).replace(/-/g, ' ');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Sell HVAC Business in {formattedParam}
      </h1>
      <h2 className="text-2xl font-semibold text-secondary mb-4">Details for {formattedParam}</h2>
      <div className="prose max-w-none text-black">
        <p>This dynamic page is fully SEO optimized with real DOM content. Animated components can be layered on top.</p>
      </div>
    </div>
  );
}
