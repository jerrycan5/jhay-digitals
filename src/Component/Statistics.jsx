import React from 'react'

function Statistics() {
  

        const stats = [
          {
            label: "Transaction Success Rate",
            value: "99.9%",
            description: "Average success rate for all processed transactions"
          },
          {
            label: "Processing Speed",
            value: "< 1 min",
            description: "Average transaction processing time"
          },
          {
            label: "Total Users",
            value: "20,000+",
            growth: "+8.5%"
          },
          {
            label: "Total Transactions",
            value: "100,000+",
            growth: "+9.3%"
          },
          {
            label: "Networks Supported",
            value: "20",
            growth: "+3"
          }
        ]
      
        return (
          <section className="py-12">
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
                <span className="text-lg font-semibold">STATISTICS</span>
              </div>
              <h2 className="text-3xl font-bold">Real-Time Network Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[#1A1F2E] p-6 rounded-xl space-y-4">
                    <h3 className="text-gray-400">{stat.label}</h3>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold">{stat.value}</span>
                      {stat.growth && (
                        <span className="text-green-500 text-sm">{stat.growth}</span>
                      )}
                    </div>
                    {stat.description && (
                      <p className="text-sm text-gray-400">{stat.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      }

export default Statistics