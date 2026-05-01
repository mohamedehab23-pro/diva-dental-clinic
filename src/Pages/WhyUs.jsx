import React from 'react'
import Header from '../Components/Header'
import WhyCard from '../Components/WhyCard'

export default function WhyUs() {
  return (
    <div className='bg-gray-50 dark:text-white dark:bg-gray-800 '>
   <div id='services' className='min-h-[50vh] w-3/4 py-3 mx-auto'>
   <Header text={'ليه تختارنا'}/>
   <div className='flex justify-center flex-col py-3 lg:flex-row gap-9'>
<WhyCard title={'أجهزة حديثة'}  content={'تقنية متطورة'}/>
<WhyCard title={10} content={'سنوات خبرة '}/>
<WhyCard title={'+1000'} content={'مريض سعيد  '}/>



   </div>
   </div>




    </div>
  )
}
