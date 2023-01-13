import React from 'react'
import { CardGaftin } from '../../components/cards/cardGaftin'

const Services = () => {
  return (
      <div className='w-full flex items-center justify-center bg-white text-gray-500 h-[710px]'>
        <div className="w-full flex flex-col items-center justify-between max-w-[1170px]">
          <div className='text-center'>
            <h1 className='text-[42px] text-black'>Grafting effective design and UX design</h1>
            <p className='mt-[20px] text-[18px] text-[#7c7c7c] w-[770px] text-center'>We are customer-first eCommerce agency, combining the best of U/X desing, technology and analytics
              to create sites that shoppers love and retention tactics that keep the coming back.
            </p>
          </div>
          <div className='flex mt-[60px] gap-[20px]'>
            <CardGaftin/>
            <CardGaftin/>
            <CardGaftin/>
          </div>
        </div>
    </div>
  )
}

export default Services
