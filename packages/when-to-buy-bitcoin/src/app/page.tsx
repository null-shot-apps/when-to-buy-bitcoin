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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight text-center mb-4">
            When to Buy Bitcoin
          </h1>
          <p className="text-lg text-gray-500 text-center font-light">
            Historical best buying opportunities since 2009
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Year Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {bitcoinData.map((yearData) => (
              <button
                key={yearData.year}
                onClick={() => setSelectedYear(selectedYear === yearData.year ? null : yearData.year)}
                className={`py-6 px-4 border transition-all duration-200 ${
                  selectedYear === yearData.year
                    ? 'border-gray-900 bg-gray-50'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <span className="text-2xl font-light text-gray-900">{yearData.year}</span>
              </button>
            ))}
          </div>

          {/* Selected Year Details */}
          {selectedYear && (
            <div className="animate-fadeIn">
              <div className="border-t border-gray-200 pt-12">
                <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
                  Top 3 Dates in {selectedYear}
                </h2>
                <div className="space-y-8">
                  {bitcoinData
                    .find((y) => y.year === selectedYear)
                    ?.dates.map((dateInfo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-8 px-8 border border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        <div className="flex items-center gap-8">
                          <span className="text-5xl font-light text-gray-300 w-12">
                            {index + 1}
                          </span>
                          <div>
                            <div className="text-2xl font-light text-gray-900 mb-1">
                              {dateInfo.date}
                            </div>
                            <div className="text-sm text-gray-500 font-light">
                              {selectedYear}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-light text-gray-900">
                            ${dateInfo.price.toLocaleString('en-US', {
                              minimumFractionDigits: dateInfo.price < 1 ? 5 : 2,
                              maximumFractionDigits: dateInfo.price < 1 ? 5 : 2,
                            })}
                          </div>
                          <div className="text-sm text-gray-500 font-light mt-1">
                            USD
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!selectedYear && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400 font-light">
                Select a year to view the best buying dates
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

