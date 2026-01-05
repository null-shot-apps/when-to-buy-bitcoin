'use client';

import { useState } from 'react';

// Historical Bitcoin data - top 3 lowest prices per year since creation
const bitcoinBestBuyDates = [
  {
    year: 2009,
    dates: [
      { date: 'Oct 5', price: 0.00076, note: 'First recorded price' },
      { date: 'Oct 12', price: 0.00080, note: 'Early days' },
      { date: 'Oct 19', price: 0.00085, note: 'Genesis era' },
    ]
  },
  {
    year: 2010,
    dates: [
      { date: 'Jul 17', price: 0.05, note: 'Post Mt. Gox launch' },
      { date: 'Aug 15', price: 0.06, note: 'Early trading' },
      { date: 'Sep 1', price: 0.06, note: 'Building momentum' },
    ]
  },
  {
    year: 2011,
    dates: [
      { date: 'Apr 16', price: 0.86, note: 'Pre-rally bottom' },
      { date: 'Oct 19', price: 2.51, note: 'Post-crash low' },
      { date: 'Nov 18', price: 2.14, note: 'Recovery phase' },
    ]
  },
  {
    year: 2012,
    dates: [
      { date: 'Jan 4', price: 4.72, note: 'Year start dip' },
      { date: 'Feb 17', price: 4.90, note: 'Pre-halving low' },
      { date: 'Jul 24', price: 7.10, note: 'Summer bottom' },
    ]
  },
  {
    year: 2013,
    dates: [
      { date: 'Jan 1', price: 13.30, note: 'New year low' },
      { date: 'Jul 5', price: 70.00, note: 'Mid-year correction' },
      { date: 'Dec 18', price: 522.00, note: 'Post-peak dip' },
    ]
  },
  {
    year: 2014,
    dates: [
      { date: 'Aug 26', price: 478.00, note: 'Summer low' },
      { date: 'Oct 3', price: 338.00, note: 'Bear market' },
      { date: 'Jan 14', price: 810.00, note: 'Early year' },
    ]
  },
  {
    year: 2015,
    dates: [
      { date: 'Jan 14', price: 177.00, note: 'Absolute bottom' },
      { date: 'Jan 15', price: 190.00, note: 'Recovery start' },
      { date: 'Aug 25', price: 198.00, note: 'Mid-year low' },
    ]
  },
  {
    year: 2016,
    dates: [
      { date: 'Jan 17', price: 356.00, note: 'Year start' },
      { date: 'Feb 18', price: 380.00, note: 'Pre-halving' },
      { date: 'May 25', price: 448.00, note: 'Halving dip' },
    ]
  },
  {
    year: 2017,
    dates: [
      { date: 'Jan 11', price: 780.00, note: 'Year low' },
      { date: 'Mar 25', price: 920.00, note: 'Spring dip' },
      { date: 'Jul 16', price: 1830.00, note: 'Mid-year correction' },
    ]
  },
  {
    year: 2018,
    dates: [
      { date: 'Dec 15', price: 3191.00, note: 'Bear market bottom' },
      { date: 'Dec 7', price: 3447.00, note: 'Capitulation' },
      { date: 'Nov 25', price: 3689.00, note: 'Crash low' },
    ]
  },
  {
    year: 2019,
    dates: [
      { date: 'Feb 8', price: 3400.00, note: 'Year low' },
      { date: 'Jan 28', price: 3420.00, note: 'Early year' },
      { date: 'Dec 17', price: 6635.00, note: 'Year end dip' },
    ]
  },
  {
    year: 2020,
    dates: [
      { date: 'Mar 13', price: 4970.00, note: 'COVID crash' },
      { date: 'Mar 16', price: 5021.00, note: 'Pandemic low' },
      { date: 'Jan 3', price: 6965.00, note: 'Year start' },
    ]
  },
  {
    year: 2021,
    dates: [
      { date: 'Jan 4', price: 31971.00, note: 'Year start' },
      { date: 'Jan 27', price: 32333.00, note: 'Early dip' },
      { date: 'Jul 20', price: 29796.00, note: 'Mid-year crash' },
    ]
  },
  {
    year: 2022,
    dates: [
      { date: 'Nov 21', price: 15480.00, note: 'FTX collapse low' },
      { date: 'Dec 30', price: 16547.00, note: 'Year end' },
      { date: 'Nov 9', price: 15632.00, note: 'Bear bottom' },
    ]
  },
  {
    year: 2023,
    dates: [
      { date: 'Jan 1', price: 16625.00, note: 'Year start' },
      { date: 'Jan 11', price: 17126.00, note: 'Early year' },
      { date: 'Mar 10', price: 19851.00, note: 'Banking crisis dip' },
    ]
  },
  {
    year: 2024,
    dates: [
      { date: 'Jan 23', price: 38521.00, note: 'Pre-ETF dip' },
      { date: 'Feb 26', price: 50123.00, note: 'Correction' },
      { date: 'Sep 6', price: 52546.00, note: 'Summer low' },
    ]
  },
];

export default function Landing() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="pt-16 pb-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
          When to Buy Bitcoin
        </h1>
        <p className="text-xl text-gray-500 font-light">
          Historical best buying opportunities since 2009
        </p>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="space-y-16">
          {bitcoinBestBuyDates.map((yearData) => (
            <div 
              key={yearData.year}
              className="border-t border-gray-200 pt-12"
            >
              {/* Year Header */}
              <button
                onClick={() => setSelectedYear(selectedYear === yearData.year ? null : yearData.year)}
                className="w-full text-left mb-8 group"
              >
                <h2 className="text-4xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                  {yearData.year}
                </h2>
              </button>

              {/* Top 3 Dates */}
              <div className="space-y-8">
                {yearData.dates.map((dateInfo, index) => (
                  <div 
                    key={index}
                    className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8 group hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-colors"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm font-medium text-gray-400 w-8">
                        #{index + 1}
                      </span>
                      <span className="text-2xl font-light text-gray-900">
                        {dateInfo.date}
                      </span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 md:ml-auto">
                      <span className="text-3xl font-light text-gray-900 tabular-nums">
                        ${dateInfo.price.toLocaleString('en-US', { 
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2 
                        })}
                      </span>
                      <span className="text-sm text-gray-400 md:min-w-[140px]">
                        {dateInfo.note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 text-center">
        <p className="text-sm text-gray-400 font-light">
          Historical data for informational purposes only. Not financial advice.
        </p>
      </footer>
    </div>
  );
}

