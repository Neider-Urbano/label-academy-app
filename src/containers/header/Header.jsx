import React from 'react'
import GetStarted from '../../components/buttons/GetStarted'
import Watch from '../../components/buttons/Watch'
import vector1 from "../../assets/images/vector1.png"
import vector2 from "../../assets/images/vector2.png"
import vector3 from "../../assets/images/vector3.png"
const Header = () => {
  return (
    <div className='w-full flex items-center justify-center bg-gray-100 text-gray-500 pt-[35px] pb-[60px]'>
       <div className="w-full flex items-center justify-between max-w-[1170px]">
           <div className='w-[470px] flex flex-col items-start'>
                <div className="flex justify-center">
                    <span className="z-10 text-[16px] inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-normal bg-[#777af2] text-white rounded-full">
                        Welcome to Sway
                        </span>
                    <span className="ml-[-10px] pl-[20px] text-[16px] inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-normal bg-gray-200 text-[#777af2] rounded-full">
                        Your partner for mobile and web products
                        </span>    
                </div>
                <div className="mt-[25px] mb-[40px]">
                   <h1 className='text-[60px] text-[#39374d] leading-[50px] font-bold'>We create digital experiences</h1>
                   <p className='mt-[20px] text-[18px] text-[#455880] font-medium'>We have the knowledge and expertise in design and modern programming
                    languages and platforms to help startups and growing companies build 
                    successful products.</p> 
                </div>
                <div className="flex justify-center">
                    <GetStarted/>
                    <Watch/>
                </div>
            </div> 
           <div className='w-[50%]  relative h-[698px]'>
                <div className='w-[340px] h-[495px] absolute top-0'>
                    <img src={vector2} className="h-[100%] w-[100%]" alt=""/>
                </div>
                <div className='w-[340px] h-[495px] absolute bottom-0 right-[-25px]'>
                    <img src={vector1} className="h-[100%] w-[100%]" alt=""/> 
                </div>
               <div className='w-[550px] h-[623px] rounded-md overflow-hidden absolute  right-0  top-[30px]'>
                    <img src={vector3}  className="h-[100%] w-[100%]" alt=""/> 
                </div> 
            </div> 
        </div> 
    </div>
  )
}

export default Header