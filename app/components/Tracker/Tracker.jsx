"use client"

import React, { useState } from 'react';
import RiskToleranceSelector from './RiskToTolerance';
import Portfolio from './PortFolio';
import Image from 'next/image';

const Tracker = () => {
const [overallRiskTolerance, setOverallRiskTolerance] = useState(0);

const handleRiskToleranceSelection = (selectedRisk) => {
  setOverallRiskTolerance(selectedRisk);
};

return (
  <div className=" bg-slate-100  dark:bg-dark-green text-dark-green  dark:text-white py-20 lg:px-10 px-6">
    <h1 className='text-center md:text-3xl text-lg font-semibold mb-10'>Calculate your Risk Tolerance Score</h1>
     <div className=' flex md:flex-row flex-col items-center  justify-between gap-6'>
       <div className=' md:w-[50%] w-full'>
      <RiskToleranceSelector onSelectRiskTolerance={handleRiskToleranceSelection} />
      <Portfolio overallRiskTolerance={overallRiskTolerance} />
       </div>
      <div className='w-[50%]'>
        <div className='w-full'>
          <Image src="/person2.svg" height={200} width={300} className='md:w-[400px] w-full' alt='image'/>
        </div>
      </div>
    </div>
  </div>
);
}

export default Tracker;



