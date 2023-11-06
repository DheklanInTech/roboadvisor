"use client"

import React from 'react'
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react"

const Testimonial = () => {
  return (
    <div className='bg-white py-16  dark:bg-dark-green lg:px-52 md:px-12 px-4'>
        <div className='flex flex-col justify-center items-center '>
            <h1 className=' lg:text-3xl md:text-xl text-base  font-semibold text-center'>What <span className=' text-lemon-green'>Customers</span> have to say</h1>
            <p className='text-center md:w-[50%] w-full py-4 md:text-base text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore in consequatur eos tempora iusto dolorem similique.</p>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 py-8'>
             
                  <Card
                   isBlurred
                   className="border-none bg-slate-100 dark:bg-default-100/50 max-w-[610px]"
                   shadow="sm"
                  >
                    <CardBody>
                    <div className='flex items-start gap-4 '>
                    <div className="w-[40%]">
                   <Image
                   alt="Album cover"
                   className="object-cover"
                   height={200}
                   shadow="md"
                   src="/person2.svg"
                    width="100%"
                  />
                    </div>
                    <div className='w-[60%]'>
                        <p className='text-xs text-start  font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste blanditiis provident iusto obcaecati aliquam .</p>
                        <div className=' absolute bottom-4'>

                        <h2 className='flex items-end justify-end'>Tonia smart</h2>
                        </div>
                    </div>

                    </div>
                    </CardBody>

                  </Card>
                  <Card
                   isBlurred
                   className="border-none bg-slate-100 dark:bg-default-100/50 max-w-[610px]"
                   shadow="sm"
                  >
                    <CardBody>
                    <div className='flex items-start gap-4 '>
                    <div className="w-[40%]">
                   <Image
                   alt="Album cover"
                   className="object-cover"
                   height={200}
                   shadow="md"
                   src="/person3.svg"
                    width="100%"
                  />
                    </div>
                    <div className='w-[60%]'>
                        <p className='text-xs text-start  font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste blanditiis provident iusto obcaecati aliquam.</p>
                        <div className=' absolute bottom-4'>

                        <h2 className='flex items-end justify-end'>Tonia smart</h2>
                        </div>
                    </div>

                    </div>
                    </CardBody>

                  </Card>
            
            
            </div>
            <div className=' flex justify-center'>
                <button className=' bg-lemon-green text-white py-2 px-4 text-sm rounded-md outline-none mt-4'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Testimonial