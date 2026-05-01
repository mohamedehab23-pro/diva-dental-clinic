import sora from '../assets/dentist.png'
import Buttons from '../Components/Button'

export default function HomePage() {

  const number='201040795942'
  const message='send message'
  return (<>

    <div id='home' className=' bg-linear-to-r from-blue-100 to-white dark:bg-linear-to-r dark:from-gray-800 dark:to-gray-800  min-h-screen  p-3'>
     {/* bg-linear-to-r from-white to-blue-500/80 dark:bg-linear-to-r dark:from-gray-400 dark:to-blue-600 */}
      <div className='flex flex-col gap-5 lg:flex-row justify-around'>
<div className=' w-full flex py-8 lg:py-0 animate__animated animate__backInDown flex-col justify-center text-center '>
 
<h2 className='text-5xl  font-extrabold '>ابتسامة صحية تبدأ من هنا</h2>
<p className='text-gray-600 dark:text-white pt-3 text-lg'> نقدم أحدث تقنيات علاج الأسنان بأيدي أطباء متخصصين</p>
  <div className='flex gap-3 justify-center mt-4'>
      <Buttons to={`tel:+${number}`} padding={'p-3'} bg={'bg-gray-300 '} hover={'hover:bg-gray-400 '} color={'text-black'} text={'اتصل بنا '}/>
    
  <Buttons to={'/#booking'} bg={'bg-blue-500'} padding={'p-3'} hover={'hover:bg-blue-600'} color={'text-white'} text={'أحجز الان'}/>
  </div>
  <div className='flex flex-row gap-4 justify-center py-4'>
<button className='p-2 bg-gray-200 lg:mx-0  mx-auto w-fit rounded-full shadow text-black'>✔ أحدث الأجهزة الطبية</button>
<button className='p-2 bg-gray-200 lg:mx-0  mx-auto w-fit rounded-full shadow text-black'>✔ أطباء متخصصون  </button>
<button className='p-2 bg-gray-200 lg:mx-0  mx-auto w-fit rounded-full shadow text-black'>✔ التزام بالمواعيد</button>

  </div>


</div>
<div className=' w-full order-first lg:order-0 flex justify-center items-center'>
 <img src={sora} alt="doctor" className='lg:w-[60%] w-full ' />
</div>
      </div>



    </div>


   </> 
  )
}
