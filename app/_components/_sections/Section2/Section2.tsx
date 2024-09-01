import Image from 'next/image'
import React from 'react'

const Section2 = () => {
  return (
    <div className='w-full h-auto min-h-[80px] bg-white my-[45px] py-3 flex flex-col gap-[10px]'>
      <div className='flex justify-center items-center tablet:gap-2 notebook:gap-6'>
        <Image src="./images/leftLine.svg" alt="leftLine" width={220} height={10} className='hidden tablet:block' />
        <p className='font-bold custom-text-color text-sm whitespace-nowrap hidden tablet:block'><span className='montserrat text-black'>Sound Wave Generator</span> Trusted by Our <span className='text-black montserrat'>Partners</span></p>
        <p className='font-bold custom-text-color block tablet:hidden text-sm w-[90%] text-center'>Trusted by <span className='montserrat text-black'>25M+</span> users and <span className='montserrat text-black'>100k+</span> high-end companies</p>
        <Image src="./images/rightLine.svg" alt="rightLine" width={220} height={10} className='hidden tablet:block' />
      </div>
      <div className='w-full h-auto min-h-[50px] flex justify-center items-center flex-wrap gap-[-10px]'>
        <Image src="./images/brand1.svg" alt="iconBrand" width={130} height={50}/>
        <Image src="./images/brand2.svg" alt="iconBrand" width={130} height={50}/>
        <Image src="./images/brand3.svg" alt="iconBrand" width={130} height={50}/>
        <Image src="./images/brand4.svg" alt="iconBrand" width={130} height={50}/>
        <Image src="./images/brand5.svg" alt="iconBrand" width={130} height={50}/>
      </div>
    </div>
  )
}

export default Section2
