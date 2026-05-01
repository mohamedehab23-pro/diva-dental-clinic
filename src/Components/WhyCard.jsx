import React from 'react'

export default function WhyCard({title,content }) {
  return (
    <>
    <div className='rounded-2xl text-center border hover:shadow-2xl shadow w-full p-6 border-gray-200'>
<p className={`xl:text-5xl text-3xl text-blue-500 font-bold`}>{title} </p>
<p className={`xl:text-xl text-lg py-2`}>{content}  </p>
</div>
    
    </>
  )
}
