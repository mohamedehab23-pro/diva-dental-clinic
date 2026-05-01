// import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router'
// import Button from './Button'

// export default function Navbar({setDarkMode,darkMode}) {
//   const [navToggle, setNavToggle] = useState(false)
//   return (
//     <div className='py-3 shadow sticky top-0 w-full dark:bg-gray-700 bg-white/90'>
// <div className="container px-3 lg:p-0 mx-auto flex items-center justify-between">
// <div>
//   <Button to={'/booking'} bg={'bg-blue-500'} padding={'p-2'} hover={'hover:bg-blue-600'} color={'text-white'} text={'أحجز الان'}/>
// </div>
// <div>
//   <ul className='lg:flex nav dark:text-white/50 gap-5 hidden'>
//     <li ><NavLink to={'/services'}>خدمات</NavLink></li>
//     <li ><NavLink to={'/reviews'}>أراء العملاء</NavLink></li>
//     <li ><NavLink to={'/booking'}>احجز</NavLink></li>
//     <li ><NavLink to={'/contact'}>تواصل</NavLink></li>
//   </ul>
// </div>
// <div className='flex gap-8'>
//   <Link to={''} className=' font-bold'>عياده د أحمد لطب الاسنان</Link>
//   {darkMode?<svg xmlns="http://www.w3.org/2000/svg" 
// onClick={()=>setDarkMode(!darkMode)}
// fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
// </svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none"
// onClick={()=>setDarkMode(!darkMode)}
// viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
// </svg>}
// </div>
// <div className='lg:hidden'>
//   <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setNavToggle(!navToggle)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
// </svg>


// </div>



// </div>
// {navToggle && <ul className='pt-3 nav text-end px-3'>
//     <li ><NavLink to={'/services'}>خدمات</NavLink></li>
//     <li ><NavLink to={'/reviews'}>أراء العملاء</NavLink></li>
//     <li ><NavLink to={'/booking'}>احجز</NavLink></li>
//     <li ><NavLink to={'/contact'}>تواصل</NavLink></li>
//   </ul>}


//     </div>
//   )
// }
