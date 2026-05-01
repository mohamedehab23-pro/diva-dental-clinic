import React from 'react'
import Header from '../Components/Header'
import Buttons from '../Components/Button'
import { Button } from '@heroui/button'
import { Link } from 'react-router'

export default function ContactPage() {
  const number='201505479404'
  const place='diva dental clinic'
  return (
   <>
   <div id='contact' className="  dark:text-white py-12 dark:bg-gray-800 bg-gray-50">
  
<Header text={'تواصل معنا'}/>
<div className="flex flex-col  lg:flex-row items-center py-8 justify-between">
<div className='w-full py-6 lg:py-0 flex ms-0 lg:ms-6 justify-center items-center  '>
<div className='w-150 p-6 lg:p-0  h-100'>
  <iframe  className='rounded-xl'
   width='100%'
   height='100%'
   src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=${place}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
    ></iframe>

</div>

</div>
<div className='w-full flex lg:me-6 flex-col space-y-5 items-center justify-center '>
  <p >القاهرة، مصر</p>
  <div className="flex gap-2">
    <Link className='hover:underline'  to={`mailto:divadentalclinic@gmail.com`}>
    <Button className='py-6 dark:text-white dark:bg-gray-600 bg-white' variant='faded'>  divadentalclinic@gmail.com</Button>
    </Link>
    <Buttons to={`https://wa.me/${number}`} bg={'bg-blue-500'} padding={'p-3'} hover={'hover:bg-blue-600'} color={'text-white'} text={'واتساب'}/>

  </div>
  
</div>

</div>
   
   </div>
   
   </>
  )
}
