import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'HVAC Business Resources & Exit Planning',
  description: 'Expert resources and insights for HVAC business exit planning.',
};

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F5F0]">
      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] overflow-hidden bg-gray-900 text-white flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3VyY2VzfGVufDB8MHwwfHx8Mg%3D%3D"
            alt="Resources and Planning"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark Overlay for Text Contrast */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left mt-16 md:mt-0">
          <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight tracking-tight drop-shadow-xl">
            HVAC Business <span className="text-[#EE5B2C]">Resources</span> & Planning
          </h1>
          
          <p className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed font-medium drop-shadow-md">
            Everything you need to successfully navigate selling, buying, or valuing your Florida HVAC business.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-12">
        <h2 className="text-3xl font-bold text-[#022B3A] mb-4">Content for HVAC Business Exit Planning</h2>
        <div className="prose max-w-none text-gray-700">
          <p>Explore our insights, guides, and tools specifically designed for Florida HVAC business owners.</p>
        </div>
      </div>
    </main>
  );
}
