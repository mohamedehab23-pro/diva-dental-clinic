import React from 'react'
import Header from '../Components/Header'

export default function AboutPage() {
  return (<>
  <div id='about' className='py-10 w-[90%] mx-auto'>
<Header text={'عن العيادة'} />
    <div  className='min-h-[50vh] py-8  flex justify-center '>
<div className="w-md border border-gray-400 rounded-2xl h-fit p-4 text-end">
  <details className='py-2'>
<summary className='cursor-pointer'>من نحن


</summary>
<p className='py-2'>عيادة ديفا</p>
  </details>
  <details className='py-2'>
<summary className='cursor-pointer'>متي نشأنا </summary>
<p className='py-2'> نشأت عيادة ديفا في ديسمبر عام 2024</p>

  </details>
  
    <details className='py-2'>
<summary className='cursor-pointer'> اختصاصاتنا 


</summary>
<p className='py-2'> 
      نحن في عيادة اسنان ديفا نسعى لتقديم أفضل خدمات طب الأسنان باستخدام 
      أحدث الأجهزة والتقنيات الحديثة، مع الالتزام بأعلى معايير الجودة والتعقيم.
       يقدم فريقنا المتخصص مجموعة متكاملة من خدمات علاج الأسنان مثل الفحص الدوري، 
       تنظيف الأسنان، حشو الأسنان، علاج العصب، تجميل الأسنان، وتبييض الأسنان.
  </p>
  </details>
    
</div>
    </div>
  </div>

    </>
  )
}
