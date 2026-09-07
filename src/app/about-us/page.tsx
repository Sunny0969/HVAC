import { Metadata } from 'next';
import Colonnade, { ColonnadeItem } from '../../views/components/Colonnade';

export const metadata: Metadata = {
  title: 'Florida HVAC Business Broker Team',
  description: 'Expert services for florida hvac business broker team.',
};

const storyChapters: ColonnadeItem[] = [
  { id: "c1", label: "Chapter 1", title: "In The Trenches", content: "Before we were brokers, we were operators. We spent decades building, scaling, and ultimately selling our own mechanical contracting firms in Florida.", gradientClass: "bg-gradient-to-tr from-slate-700 to-slate-500" },
  { id: "c2", label: "Chapter 2", title: "The Problem", content: "When we sold our businesses, we realized generalist brokers didn't speak our language. They didn't understand the value of maintenance contracts, fleet management, or technician retention.", gradientClass: "bg-gradient-to-br from-indigo-800 to-blue-600" },
  { id: "c3", label: "Chapter 3", title: "The Solution", content: "We founded HVAC Exit Advisors to be the brokerage we wish we had. A firm dedicated 100% exclusively to the HVAC industry.", gradientClass: "bg-gradient-to-br from-blue-500 to-cyan-400" },
  { id: "c4", label: "Chapter 4", title: "Our Mission", content: "Today, we protect the legacies of Florida's hardest-working entrepreneurs, securing life-changing exits that reward decades of early mornings and late nights.", gradientClass: "bg-gradient-to-r from-orange-500 to-amber-400" }
];

export default function Page() {
  return (
    <div className="w-full bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <h1 className="text-5xl font-black text-[#022B3A] mb-6 tracking-tight">Our Story</h1>
        <h2 className="text-2xl font-semibold text-[#EE5B2C] mb-12">Built by Contractors, for Contractors</h2>
        
        <Colonnade items={storyChapters} />

        {/* Static Fallback for crawlers */}
        <div className="sr-only">
          {storyChapters.map((item) => (
            <article key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
