export const cityDataMap: Record<string, {
  name: string;
  county: string;
  localServiceAreaExplanation: string;
  tradeCoverage: string;
  ownerConcerns: string;
  averageMultiple: string;
  faqs: {q: string, a: string}[];
}> = {
  'miami': {
    name: 'Miami',
    county: 'Miami-Dade County',
    localServiceAreaExplanation: 'Miami is a dynamic and densely populated market requiring specialized mechanical support. We serve HVAC companies focused on high-rise condominiums, luxury residential estates, and complex commercial cooling systems throughout Miami-Dade County.',
    tradeCoverage: 'The Miami market demands strong capabilities in commercial chillers, cooling towers, refrigeration for the robust hospitality sector, and high-efficiency residential systems designed to combat severe humidity and salt air corrosion.',
    ownerConcerns: 'Miami owners frequently manage complex local permitting, severe technician shortages, multilingual workforce requirements, and the necessity of holding a Florida state contractor license (Class A or B) to handle large commercial contracts.',
    averageMultiple: '3.2x - 4.8x SDE / 5.5x - 7.5x EBITDA',
    faqs: [
      { q: 'What is the average multiple for a Miami HVAC business?', a: 'Miami HVAC businesses typically see multiples of 3.2x to 4.8x SDE, heavily influenced by commercial maintenance contracts and high-rise service capabilities.' },
      { q: 'Do buyers require bilingual technicians in Miami?', a: 'While not strictly required, buyers heavily value a bilingual workforce in Miami-Dade due to the demographic makeup of the customer base.' }
    ]
  },
  'fort-lauderdale': {
    name: 'Fort Lauderdale',
    county: 'Broward County',
    localServiceAreaExplanation: 'Fort Lauderdale bridges the gap between Miami\'s commercial density and Palm Beach\'s residential affluence. We represent HVAC businesses serving both coastal high-rises and sprawling suburban communities across Broward County.',
    tradeCoverage: 'This market blends heavy marine refrigeration, coastal high-efficiency residential cooling, and commercial mechanical services tailored to retail and corporate office spaces.',
    ownerConcerns: 'Broward owners often face intense competition, rising commercial real estate costs for their operational hubs, and the challenge of retaining technicians who are frequently recruited by neighboring Miami or Palm Beach firms.',
    averageMultiple: '3.1x - 4.5x SDE / 5.3x - 7.0x EBITDA',
    faqs: [
      { q: 'How does marine refrigeration affect valuation in Fort Lauderdale?', a: 'Firms with established marine and yacht refrigeration divisions often command a premium due to the specialized skill set and high margins associated with the local boating industry.' },
      { q: 'Are residential maintenance agreements valued highly here?', a: 'Yes. Broward County buyers place immense value on recurring residential maintenance agreements to ensure cash flow during the milder winter months.' }
    ]
  },
  'boca-raton': {
    name: 'Boca Raton',
    county: 'Palm Beach County',
    localServiceAreaExplanation: 'Boca Raton is a premier market characterized by luxury residential properties and high-end commercial spaces. We assist HVAC companies that cater to affluent homeowners, country club communities, and class-A commercial properties.',
    tradeCoverage: 'Coverage in Boca Raton is heavily skewed toward premium residential installations (variable speed heat pumps, advanced IAQ systems) and commercial maintenance for retail and office parks.',
    ownerConcerns: 'Owners in Boca Raton must navigate stringent Homeowners Association (HOA) regulations, high customer service expectations, and the need for immaculate fleet and technician presentation.',
    averageMultiple: '3.2x - 4.6x SDE / 5.4x - 7.2x EBITDA',
    faqs: [
      { q: 'Do HOA restrictions impact business value in Boca Raton?', a: 'Buyers look for companies that have proven processes for navigating strict Boca Raton HOA approvals, as it ensures smoother installations and predictable revenue.' },
      { q: 'What systems are most profitable to service in Boca Raton?', a: 'High-SEER variable capacity systems and whole-home dehumidification/IAQ systems yield the highest margins in this affluent market.' }
    ]
  },
  'west-palm-beach': {
    name: 'West Palm Beach',
    county: 'Palm Beach County',
    localServiceAreaExplanation: 'West Palm Beach is a rapidly expanding market with a mix of historic coastal properties and massive western suburban development. We work with HVAC firms servicing everything from Palm Beach Island estates to Wellington new construction.',
    tradeCoverage: 'The market demands expertise in residential retrofit, new construction installations in western communities, and commercial service for the growing financial and tech sectors moving to the area.',
    ownerConcerns: 'Local owners deal with managing vast service territories stretching from the coast to the Glades, scaling fleets to meet suburban boom demand, and transitioning new construction accounts into long-term service agreements.',
    averageMultiple: '3.0x - 4.4x SDE / 5.1x - 6.8x EBITDA',
    faqs: [
      { q: 'How valuable is a new construction division in West Palm Beach?', a: 'New construction is valuable if the company has a proven track record of converting those installations into recurring residential maintenance agreements post-warranty.' },
      { q: 'What do buyers look for in West Palm Beach service areas?', a: 'Buyers prefer dense, highly routed service areas to minimize non-billable drive time across Palm Beach County\'s wide geographic footprint.' }
    ]
  },
  'naples': {
    name: 'Naples',
    county: 'Collier County',
    localServiceAreaExplanation: 'Naples represents one of Florida\'s most affluent retirement and second-home markets. We advise HVAC companies that provide white-glove residential service and concierge-level maintenance to seasonal residents.',
    tradeCoverage: 'The Naples market is dominated by high-efficiency residential cooling, indoor air quality (IAQ) solutions, and specialized dehumidification systems for unoccupied seasonal homes.',
    ownerConcerns: 'Collier County owners face extreme seasonality, managing cash flow during the summer months when many residents leave, and recruiting technicians in an area with a very high cost of living.',
    averageMultiple: '3.1x - 4.5x SDE / 5.2x - 7.0x EBITDA',
    faqs: [
      { q: 'How does seasonality affect an HVAC sale in Naples?', a: 'Buyers scrutinize how a company manages cash flow during the off-season. Strong recurring maintenance plans for absentee owners significantly boost valuation.' },
      { q: 'Are IAQ services important to Naples buyers?', a: 'Absolutely. Indoor air quality and mold-prevention systems are highly profitable add-ons that buyers actively look for in Collier County acquisitions.' }
    ]
  },
  'fort-myers': {
    name: 'Fort Myers',
    county: 'Lee County',
    localServiceAreaExplanation: 'Fort Myers is a booming coastal community with massive residential growth and ongoing infrastructure development. We serve HVAC companies handling both rapid suburban expansion and critical commercial cooling.',
    tradeCoverage: 'Trade coverage includes high-volume residential replacement, light commercial service, and post-storm rebuilding and system hardening requirements.',
    ownerConcerns: 'Owners navigate rapid population influx, intense competition in the residential replacement sector, and adapting to updated building codes for coastal storm resilience.',
    averageMultiple: '3.0x - 4.2x SDE / 5.0x - 6.5x EBITDA',
    faqs: [
      { q: 'How has recent storm activity impacted Fort Myers HVAC valuations?', a: 'Companies with established processes for handling surge demand and coastal code compliance are highly attractive to regional buyers.' },
      { q: 'Is Lee County a target for private equity?', a: 'Yes. Fort Myers is a prime target for PE roll-ups looking to bridge the gap between Tampa and Naples.' }
    ]
  },
  'tampa': {
    name: 'Tampa',
    county: 'Hillsborough County',
    localServiceAreaExplanation: 'The Tampa Bay area is a powerhouse market with explosive residential growth and a massive commercial logistics footprint. We represent HVAC businesses serving urban centers, sprawling suburbs, and industrial corridors.',
    tradeCoverage: 'The market requires broad capabilities across residential heat pumps, commercial refrigeration for the port and logistics sectors, and institutional mechanical service.',
    ownerConcerns: 'Tampa owners struggle with severe traffic impacting fleet routing efficiency, fierce competition for skilled labor, and managing the logistics of a sprawling service territory across multiple counties.',
    averageMultiple: '3.0x - 4.2x SDE / 5.0x - 6.8x EBITDA',
    faqs: [
      { q: 'What makes a Tampa HVAC business attractive to acquirers?', a: 'A dense, well-routed customer base with a high percentage of residential maintenance agreements is the gold standard for Tampa buyers.' },
      { q: 'Do buyers want commercial or residential in Tampa?', a: 'Both are in high demand. However, pure-play commercial refrigeration and mechanical firms often see aggressive bidding from out-of-state PE firms.' }
    ]
  },
  'orlando': {
    name: 'Orlando',
    county: 'Orange County',
    localServiceAreaExplanation: 'Orlando is the hospitality and entertainment capital of the state. We assist HVAC companies that service the massive tourism infrastructure, as well as the rapidly growing residential communities surrounding the city.',
    tradeCoverage: 'Orlando demands heavy commercial chillers, refrigeration for restaurants and theme parks, and high-volume residential service for the booming local workforce housing market.',
    ownerConcerns: 'Owners face the challenge of 24/7 commercial service demands, intense pricing pressure in the residential sector, and the logistics of servicing high-security or restricted-access hospitality properties.',
    averageMultiple: '3.0x - 4.5x SDE / 5.2x - 7.0x EBITDA',
    faqs: [
      { q: 'Is hospitality HVAC service valued higher in Orlando?', a: 'Yes, commercial contracts with hotels, resorts, and restaurants offer incredibly stable recurring revenue, which drives up the multiple.' },
      { q: 'How do buyers view the Orlando residential market?', a: 'Buyers love the volume but look closely at margins. Companies that compete on quality and service agreements rather than just price are valued much higher.' }
    ]
  },
  'jacksonville': {
    name: 'Jacksonville',
    county: 'Duval County',
    localServiceAreaExplanation: 'Jacksonville is a geographically massive market with a strong industrial, military, and logistics presence. We advise HVAC firms servicing everything from the port industrial sector to sprawling suburban neighborhoods.',
    tradeCoverage: 'Coverage requires industrial mechanical expertise, marine/port refrigeration, and traditional residential heat pump service across a vast geographic footprint.',
    ownerConcerns: 'Duval County owners must manage the lowest technician-to-drive-time ratios in the state due to the city\'s size, making routing software and territorial density critical to profitability.',
    averageMultiple: '2.8x - 4.0x SDE / 4.8x - 6.5x EBITDA',
    faqs: [
      { q: 'How does Jacksonville\'s size impact business valuation?', a: 'Buyers discount businesses with inefficient, scattered routing. A dense, localized customer base in specific Jacksonville quadrants is highly valued.' },
      { q: 'Are industrial mechanical firms in demand here?', a: 'Highly. Companies servicing the port, logistics hubs, and military bases command premium multiples due to high barriers to entry.' }
    ]
  },
  'sarasota': {
    name: 'Sarasota',
    county: 'Sarasota County',
    localServiceAreaExplanation: 'Sarasota is a rapidly growing market known for affluent coastal living and massive master-planned communities. We work with HVAC contractors who provide premium service to high-end residential and light commercial clients.',
    tradeCoverage: 'The market is driven by high-efficiency residential retrofits, IAQ installations, and commercial service for the expanding healthcare and retail sectors.',
    ownerConcerns: 'Owners focus on recruiting top-tier technicians capable of white-glove customer service, managing growth in communities like Lakewood Ranch, and maintaining premium pricing models.',
    averageMultiple: '3.1x - 4.4x SDE / 5.2x - 6.8x EBITDA',
    faqs: [
      { q: 'What is the most valuable asset for a Sarasota HVAC company?', a: 'A loyal, affluent customer base tied to recurring maintenance agreements, especially those incorporating IAQ and dehumidification services.' },
      { q: 'Do buyers pay a premium for Sarasota businesses?', a: 'Yes, Sarasota\'s demographics allow for higher average ticket sizes and better margins, making it a highly desirable market for strategic buyers.' }
    ]
  }
};
