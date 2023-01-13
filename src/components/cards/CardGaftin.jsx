import React from 'react'

export const CardGaftin = () => {
  return (
       <div className="rounded-md hover:shadow-lg bg-white border-[1.5px] border-gray-300 flex flex-col items-center">
         <div className="w-[70px] h-[70px] overflow-hidden  rounded-lg bg-cyan-600 mt-[25px]">
           <p>-</p>
         </div>
         <div className="p-6 text-center">
           <h4 className="text-2xl font-semibold mb-4">Branding</h4>
           <p className="mt-4 mb-[30px]">
                We create effective action plans and design optimal business strategies.
           </p>
           <a href="#" className="text-[#777af2] font-bold"> Learn More</a>
         </div>
       </div>
  )
}
