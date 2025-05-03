// import React from 'react';

// function Features() {
//     const features = [
//         {
//             icon: "🔄",
//             title: "Multi-Crypto Support",
//             description: "Our platform supports a wide range of cryptocurrencies including ETH, BNB, SOL, TON, and more."
//         },
//         {
//             icon: "⭐",
//             title: "Telegram Stars Purchases",
//             description: "Purchase Telegram stars instantly and enhance your mini-apps and gaming experience."
//         },
//         {
//             icon: "💳",
//             title: "One-Time Funding",
//             description: "Easily fund your account with a single transaction and use your balance to purchase any type of gas fee."
//         },
//         {
//             icon: "⚡",
//             title: "Instant Transactions",
//             description: "Enjoy fast and seamless transactions with instant payment processing."
//         }
//     ];

//     return (
//         <section className="py-12">
//             <div className="space-y-8">
//                 <div className="flex items-center gap-2 text-blue-500">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
//                     </svg>
//                     <span className="text-lg font-semibold">FEATURES</span>
//                 </div>
//                 <h2 className="text-3xl font-bold">Receiving Gas Fees Made Easy</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {features.map((feature, index) => (
//                         <div key={index} className="bg-[#1A1F2E] p-6 rounded-xl space-y-4">
//                             <span className="text-2xl">{feature.icon}</span>
//                             <h3 className="text-xl font-semibold">{feature.title}</h3>
//                             <p className="text-gray-400">{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Features;







import React from 'react';

function Features() {
    const features = [
        {
            icon: "🔄",
            title: "Multi-Crypto Support",
            description: "Our platform supports a wide range of cryptocurrencies including ETH, BNB, SOL, TON, and more."
        },
        {
            icon: "⭐",
            title: "Telegram Stars Purchases",
            description: "Purchase Telegram stars instantly and enhance your mini-apps and gaming experience."
        },
        {
            icon: "💳",
            title: "One-Time Funding",
            description: "Easily fund your account with a single transaction and use your balance to purchase any type of gas fee."
        },
        {
            icon: "⚡",
            title: "Instant Transactions",
            description: "Enjoy fast and seamless transactions with instant payment processing."
        }
    ];

    return (
        <section className="py-12" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="space-y-8">
                <div className="flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                    </svg>
                    <span className="text-lg font-semibold">FEATURES</span>
                </div>
                <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>Receiving Gas Fees Made Easy</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="p-6 rounded-xl space-y-4" 
                            style={{ 
                                backgroundColor: 'var(--color-card)',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <span className="text-2xl">{feature.icon}</span>
                            <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--color-subtle)' }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
      
