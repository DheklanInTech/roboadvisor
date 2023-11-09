"use client"

import React from 'react';

function Portfolio({ overallRiskTolerance }) {
  
    const stocks = [
        { stock: 'Nigerian Stocks', percentage: overallRiskTolerance * 10 },
        { stock: 'Foreign Stocks', percentage: overallRiskTolerance * 8 },
        { stock: 'Tech Stocks', percentage: overallRiskTolerance * 6 },
        { stock: 'Emerging Stocks', percentage: overallRiskTolerance * 5 },
        { stock: 'Nigerian Bonds', percentage: overallRiskTolerance * 4 },
        { stock: 'Foreign Bonds', percentage: overallRiskTolerance * 3 },
        { stock: 'Commodities', percentage: overallRiskTolerance * 7},
        { stock: 'Real Estate', percentage: overallRiskTolerance * 1 },
        { stock: 'T-Bills', percentage: overallRiskTolerance * 0 },
        { stock: 'Alternatives', percentage: overallRiskTolerance * 0 },


    ];

    return (
        <div className='w-[100%]'>
            <div className='px-4 py-4 rounded-md bg-gray-300 dark:bg-footer-grey'>
                {stocks.map((stock, index) => (
                    <div key={index} className='flex items-center  justify-end  gap-6 py-2'>
                        <div className=''>
                            <p className='text-sm font-semibold'>{stock.stock}</p>
                        </div>
                        <div className="w-[50%] bg-gray-100 rounded-full dark:bg-gray-400">
                            <div className={` bg-lime-600 md:text-[0.65rem] text-[0.55rem] font-medium  text-gray-800 dark:text-blue-100 text-center md:p-0.5 p-0.3 leading-none rounded-full`} style={{ width: `${stock.percentage}%` }}>{stock.percentage}%</div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}


export default Portfolio;
