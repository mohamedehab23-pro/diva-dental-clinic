import React from 'react'
import Header from '../Components/Header'
import before from '../assets/before.png'
import after from '../assets/after.png'
import secondbefore from '../assets/face.png'
import secondafter from '../assets/another.png'

export default function BeforeAfterPage() {

  return (<>
    <div id='before-after' className='min-h-screen py-10'>
<Header text={'صور قبل وبعد'}/>
<div className='flex flex-col gap-7 items-center'>
      <div className='flex gap-3'>
        <div>
          <p className='text-center py-4 text-2xl'>قبل</p>

          <img src={before} className='w-40 lg:w-70  rounded-2xl duration-600' alt="bad teeth" />
        </div>
        <div>
          <p className='text-center py-4 text-2xl'>بعد</p>

        <img src={after} className='w-40 lg:w-70  rounded-2xl duration-600' alt="clean teeth" />
        </div>
      </div>
      <div className='flex gap-3'>
        <img src={secondbefore} className='w-40 lg:w-70  rounded-2xl duration-600' alt="bad teeth" />
        <img src={secondafter} className='w-40 lg:w-70  rounded-2xl duration-600' alt="clean teeth" />
      </div>
      
</div>

    

    </div>
    </>
  )
}
