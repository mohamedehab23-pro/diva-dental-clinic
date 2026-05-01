import  { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import HeroPage from '../Pages/HeroPage'
import Services from '../Pages/Services'
import WhyUs from '../Pages/WhyUs'
import ReviewsPage from '../Pages/ReviewsPage'
import Booking from '../Pages/Booking'
import ContactPage from '../Pages/ContactPage'
import Button from '../Components/Button'
import AboutPage from '../Pages/AboutPage'
import BeforeAfterPage from '../Pages/BeforeAfterPage'
import logo from '../assets/logo.jpeg'
import Aos from 'aos'
import "aos/dist/aos.css"
export  function MainLayout() {
  useEffect(()=>{
    Aos.init({duration:"1000"});
  },[])
const [darkMode, setDarkMode] = useState( localStorage.getItem('darkmode') === 'true'|| false)

  const [navToggle, setNavToggle] = useState(false)
  const toggleDarkMode = () => {
  const newMode = !darkMode
  setDarkMode(newMode)
  localStorage.setItem('darkmode', newMode)
}

  return (
    <>
    <div className={`${darkMode? 'dark':''}  dark:text-white`}>
    <div className='dark:bg-gray-800 bg-white'>
      
 <div className='py-1 shadow sticky z-10 top-0 w-full dark:bg-gray-700 bg-white/90'>
<div className="container px-3 lg:p-0 mx-auto flex items-center justify-between">
<div>
  <Button to={'/#booking'} bg={'bg-blue-500'} padding={' p-2'} hover={'hover:bg-blue-600'} color={'text-white'} text={'أحجز الان'}/>
</div>
<div>
  <ul className='lg:flex nav dark:text-white/50 gap-5 hidden'>
    <li ><a href={'/#services'}>خدمات</a></li>
    <li ><a href={'/#reviews'}>أراء العملاء</a></li>
    <li ><a href={'/#about'}> عن العيادة</a></li>
    <li ><a href={'/#before-after'}> قبل و بعد </a></li>
    <li ><a href={'/#booking'}>احجز</a></li>
    <li ><a href={'/#contact'}>تواصل</a></li>
  </ul>
</div>
<div className='flex items-center gap-8'>
  <div className="flex items-center gap-1">
    <a href={'/#home'} className=' hidden md:block font-bold'>
    عيادة ديفا لتجميل الفم والاسنان 
    </a> 
    <a href={'/#home'} className='md:hidden font-bold'>
    عيادة ديفا    
    </a> 
    <div className='border border-black bg-black size-16 flex justify-center items-center rounded-full'>
  <img src={logo} className='w-10' alt="" />

    </div>
  </div>
  {darkMode?<svg xmlns="http://www.w3.org/2000/svg" 
onClick={toggleDarkMode}
fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none"
onClick={toggleDarkMode}
viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>}
</div>
<div className='lg:hidden'>
  <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setNavToggle(!navToggle)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


</div>

</div>
{navToggle && <ul className='pt-3 nav text-end px-3'>
    <li ><a onClick={()=>setNavToggle(false)} href={'/#services'}>خدمات</a></li>
    <li ><a onClick={()=>setNavToggle(false)} href={'/#reviews'}>أراء العملاء</a></li>
    <li ><a onClick={()=>setNavToggle(false)} href={'/#about'}> عن العيادة</a></li>
    <li ><a onClick={()=>setNavToggle(false)} href={'/#before-after'}> قبل و بعد </a></li>

    <li ><a onClick={()=>setNavToggle(false)} href={'/#booking'}>احجز</a></li>
    <li ><a onClick={()=>setNavToggle(false)} href={'/#contact'}>تواصل</a></li>
  </ul>}

    </div>

<div>

     <HeroPage/>
</div>
d
     <Services/>
    <ReviewsPage/>
    <AboutPage/>
    <WhyUs/>
    <BeforeAfterPage/>
    <Booking/>
    <ContactPage/>

    <Footer/>
    </div>
    </div>
    </>
  )
}
