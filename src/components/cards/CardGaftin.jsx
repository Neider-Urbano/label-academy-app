import React from 'react'
import vector1 from "../../assets/images/vector1.png";

export const CardGaftin = ({color, name}) => {
  return (
    <div className={`${name} relative w-[400px] h-[400px]`}>
       <div className='w-[173px] h-[370px] absolute bottom-0 left-[-30px] top-[30px] hidden divImg'>
          <img src={vector1} className="h-[100%] w-[100%]" alt=""/> 
        </div>
       <div className="absolute rounded-md hover:shadow-lg bg-white border-[1.5px] border-gray-300 flex flex-col items-center top-0 w-[370px] h-[370px]">
         <div className={`w-[70px] h-[70px] overflow-hidden  rounded-lg ${color} mt-[25px] flex justify-center items-center`}>
         </div>
         <div className="py-6 px-8 text-center">
           <h4 className="text-[28px] font-semibold mb-4 text-[#39374d]">Branding</h4>
           <p className="mt-4 mb-[30px] text-[16px] font-medium text-[#455880]">
                We create effective action plans and design optimal business strategies.
           </p>
           <a href="#" className="text-[#777af2] font-medium text-[16px]"> Learn More</a>
         </div>
       </div>
    </div>
  )
}
