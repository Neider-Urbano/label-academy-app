import React from 'react'
import OurProcess from '../../components/buttons/OurProcess'
import vector1 from "../../assets/images/vector1.png"

const Video = () => {
  return (
    <div className='w-full flex items-center justify-center bg-gray-100 text-gray-500 h-[620px]'>
       <div className="w-full flex items-center justify-between max-w-[1170px]">
          
          <div className='w-[560px]  relative h-[335px]'>
            <div className='w-[340px] h-[173px] absolute bottom-[0px] right-[-25px]'>
              <img src={vector1} className="h-[100%] w-[100%]" alt=""/> 
            </div>
            <iframe className="absolute left-0 top-0 rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/qiMF5Z-5cwY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>

          <div className='w-[480px]'>
              <p className='text-[15px] text-[#777af2] font-medium'>SUCCESSFUL CREATIVE IS BOOTED IN STRATEGY</p>
              <h1 className='mt-[10px] text-[34px] text-[#39374d] leading-[40px] w-[468px] font-bold'>We partner with companies to bring clarity to their brand</h1>
              <p className='mt-[25px] text-[18px] text-[#455880] mb-[30px] w-[470px] font-medium'>We develop enjoyable consumer experiences, from digital strategy and content to media and analysis.
                Leading to meaningful results and satisfied clients.
              </p>
              <OurProcess/>
          </div>
       </div>
       </div>
  )
}

export default Video