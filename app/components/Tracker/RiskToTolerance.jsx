'use client'

import React, { useState } from 'react';

function RiskToleranceSelector({ onSelectRiskTolerance }) {
    const [selectedRisk, setSelectedRisk] = useState(0); // Default to 5

    const handleRiskSelection = (event) => {
      setSelectedRisk(parseInt(event.target.value, 10));
    };
  
    const handleSubmit = () => {
      onSelectRiskTolerance(selectedRisk);
    };
    
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleFileUpload = async () => {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await fetch('/api/uploadfile', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('File uploaded successfully:', data);
         
        } else {
          console.error('File upload failed:', response.statusText);
          
        }
      } catch (error) {
        console.error('Error uploading file:', error);
       
      }
    };





  
    return (
      <div className=' bg-gray-300 dark:bg-footer-grey mb-4 p-4 md:w-[70%] w-full rounded-md'>
        <div className='flex items-center justify-between'>
        <h2 className='md:text-sm text-xs'>Risk Tolerance</h2>
        <p className='md:text-sm text-xs'>Overall Risk Score: <span className='font-semibold'>{selectedRisk}</span></p>
        </div>
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={selectedRisk}
          onChange={handleRiskSelection}
          className='w-full h-2 mb-3 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-blue-700'
        />
        
        <button className=' bg-lemon-green text-white px-4 py-1 rounded-md cursor-pointer'  onClick={handleSubmit}>Submit</button>
      
      </div>
    );
  }

export default RiskToleranceSelector;
