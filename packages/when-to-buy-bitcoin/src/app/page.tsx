'use client';

import { useState } from 'react';

// Historical Bitcoin data - lowest prices per year
// Data represents approximate lowest prices (in USD) for each year
const bitcoinData = [
  { year: 2009, dates: [
    { date: 'Oct 5', price: 0.00076 },
    { date: 'Nov 15', price: 0.00076 },
    { date: 'Dec 20', price: 0.00076 }
  ]},
  { year: 2010, dates: [
    { date: 'Jan 10', price: 0.003 },
    { date: 'Feb 5', price: 0.005 },
    { date: 'Mar 15', price: 0.008 }
  ]},
  { year: 2011, dates: [
    { date: 'Jan 5', price: 0.30 },
    { date: 'Apr 10', price: 0.67 },
    { date: 'Oct 19', price: 2.51 }
  ]},
  { year: 2012, dates: [
    { date: 'Jan 4', price: 4.72 },
    { date: 'Feb 16', price: 3.80 },
    { date: 'Jul 24', price: 7.10 }
  ]},
  { year: 2013, dates: [
    { date: 'Jan 1', price: 13.30 },
    { date: 'Apr 16', price: 50.00 },
    { date: 'Jul 5', price: 70.00 }
  ]},
  { year: 2014, dates: [
    { date: 'Jan 14', price: 770.00 },
    { date: 'Aug 18', price: 465.00 },
    { date: 'Oct 4', price: 340.00 }
  ]},
  { year: 2015, dates: [
    { date: 'Jan 14', price: 177.00 },
    { date: 'Jan 25', price: 200.00 },
    { date: 'Aug 25', price: 220.00 }
  ]},
  { year: 2016, dates: [
    { date: 'Jan 17', price: 360.00 },
    { date: 'Feb 18', price: 380.00 },
    { date: 'Aug 2', price: 530.00 }
  ]},
  { year: 2017, dates: [
    { date: 'Jan 1', price: 963.00 },
    { date: 'Mar 25', price: 920.00 },
    { date: 'Jul 16', price: 1830.00 }
  ]},
  { year: 2018, dates: [
    { date: 'Feb 6', price: 5920.00 },
    { date: 'Jun 24', price: 5760.00 },
    { date: 'Dec 15', price: 3191.00 }
  ]},
  { year: 2019, dates: [
    { date: 'Jan 1', price: 3747.00 },
    { date: 'Feb 8', price: 3400.00 },
    { date: 'Dec 17', price: 6635.00 }
  ]},
  { year: 2020, dates: [
    { date: 'Mar 13', price: 4970.00 },
    { date: 'Mar 16', price: 5030.00 },
    { date: 'Sep 5', price: 10150.00 }
  ]},
  { year: 2021, dates: [
    { date: 'Jan 4', price: 32127.00 },
    { date: 'Jan 27', price: 30350.00 },
    { date: 'Jul 20', price: 29796.00 }
  ]},
  { year: 2022, dates: [
    { date: 'Jan 24', price: 33000.00 },
    { date: 'Jun 18', price: 17708.00 },
    { date: 'Nov 21', price: 15480.00 }
  ]},
  { year: 2023, dates: [
    { date: 'Jan 1', price: 16530.00 },
    { date: 'Jan 11', price: 16950.00 },
    { date: 'Sep 11', price: 24900.00 }
  ]},
  { year: 2024, dates: [
    { date: 'Jan 23', price: 38520.00 },
    { date: 'Feb 26', price: 50500.00 },
    { date: 'Sep 6', price: 53800.00 }
  ]},
];

export default function Landing() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [searchDate, setSearchDate] = useState('');
  const [searchResult, setSearchResult] = useState<{ date: string; price: number } | null>(null);

  const handleSearch = () => {
    if (!searchDate) return;
    
    // Simple search - in a real app, you'd query an API
    // For demo, we'll search through our existing data
    const searchLower = searchDate.toLowerCase();
    
    for (const yearData of bitcoinData) {
      for (const dateInfo of yearData.dates) {
        const fullDate = `${dateInfo.date} ${yearData.year}`.toLowerCase();
        if (fullDate.includes(searchLower) || searchLower.includes(dateInfo.date.toLowerCase())) {
          setSearchResult({ date: `${dateInfo.date}, ${yearData.year}`, price: dateInfo.price });
          return;
        }
      }
    }
    
    setSearchResult({ date: searchDate, price: 0 });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="pt-8 pb-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight text-center mb-1">
            When to Buy Bitcoin
          </h1>
          <p className="text-sm text-gray-500 text-center font-light">
            Historical best buying opportunities since 2009
          </p>
          
          {/* Search Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search date (e.g., Jan 1 2020)"
                className="flex-1 px-4 py-2 border border-gray-200 text-sm font-light focus:outline-none focus:border-gray-900 transition-colors"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-2 border border-gray-900 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition-colors"
              >
                Search
              </button>
            </div>
            
            {/* Search Result */}
            {searchResult && (
              <div className="mt-3 p-3 border border-gray-200 bg-gray-50">
                <div className="text-sm font-light text-gray-900">
                  {searchResult.date}
                </div>
                <div className="text-lg font-light text-gray-900 mt-1">
                  {searchResult.price > 0 ? (
                    `${searchResult.price.toLocaleString('en-US', {
                      minimumFractionDigits: searchResult.price < 1 ? 5 : 2,
                      maximumFractionDigits: searchResult.price < 1 ? 5 : 2,
                    })} USD`
                  ) : (
                    'Date not found in dataset'
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Year Grid with Inline Details - 5 per row */}
          <div className="space-y-2">
            {Array.from({ length: Math.ceil(bitcoinData.length / 5) }, (_, rowIndex) => (
              <div key={rowIndex}>
                <div className="grid grid-cols-5 gap-2">
                  {bitcoinData.slice(rowIndex * 5, rowIndex * 5 + 5).map((yearData) => (
                    <button
                      key={yearData.year}
                      onClick={() => setSelectedYear(selectedYear === yearData.year ? null : yearData.year)}
                      className={`py-3 px-3 border transition-all duration-200 ${
                        selectedYear === yearData.year
                          ? 'border-gray-900 bg-gray-50'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <span className="text-lg font-light text-gray-900">{yearData.year}</span>
                    </button>
                  ))}
                </div>
                
                {/* Inline Details for selected year in this row */}
                {bitcoinData.slice(rowIndex * 5, rowIndex * 5 + 5).map((yearData) => (
                  selectedYear === yearData.year && (
                    <div key={`details-${yearData.year}`} className="mt-2 animate-fadeIn">
                      <div className="space-y-2">
                        {yearData.dates.map((dateInfo, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-3 px-4 border border-gray-200 bg-white"
                          >
                            <div className="flex items-center gap-4">
                              <span className="text-xl font-light text-gray-300 w-5">
                                {index + 1}
                              </span>
                              <div>
                                <div className="text-base font-light text-gray-900">
                                  {dateInfo.date}
                                </div>
                                <div className="text-xs text-gray-500 font-light">
                                  {yearData.year}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-light text-gray-900">
                                ${dateInfo.price.toLocaleString('en-US', {
                                  minimumFractionDigits: dateInfo.price < 1 ? 5 : 2,
                                  maximumFractionDigits: dateInfo.price < 1 ? 5 : 2,
                                })}
                              </div>
                              <div className="text-xs text-gray-500 font-light">
                                USD
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}





