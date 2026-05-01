import React from 'react'
import { Link } from 'react-router'
import face from '../assets/Facebook.png'
import instgram from '../assets/instgram.png'
import whatsapp from '../assets/whatsapp2.png'
import mail from '../assets/mail.png'
export default function Footer() {
  const number='201505479404'
  return (
    <div className='py-5 border-t border-gray-300 '>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around items-center">

<div className="flex gap-3 items-center">
  <a className='hover:underline' href={`mailto:dreamilydentalclinic@gmail.com`}><img src={mail} className='w-13' alt="" /></a>
  <a className='hover:underline' href={`https://wa.me/${number}`}><img src={whatsapp} className='w-10' alt="" /></a>
  <a href="https://www.facebook.com/people/Dreamily-Dental-Clinic/61587279904182/#" target='_blank'><img src={face} className='w-10' alt="" /></a>
<a href="https://www.instagram.com/dreamily.dentalclinic/" target='_blank' >
  <img src={instgram} className='w-10' alt="" />

</a>
</div>
<div>
  <p> عيادة ديفا لطب وتجميل الفم والاسنان </p>
</div>
</div>
      </div>
      <p className='text-center py-4 text-gray-500'>© 2026 — جميع الحقوق محفوظة</p>


    </div>
  )
}
