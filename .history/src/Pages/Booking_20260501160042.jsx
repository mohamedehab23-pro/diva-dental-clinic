import Header from '../Components/Header'
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { useForm } from 'react-hook-form';
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const today = new Date();
today.setHours(0,0,0,0);
const schema=zod.object({
  name:zod.string().nonempty('الاسم مطلوب').min(2,'الاسم يجب ان يكون علي الاقل  حرفين'),
  phone:zod.string().nonempty('رقم الهاتف مطلوب').regex(/^01[0125][0-9]{8}$/,'رقم الهاتف يجب ان يكون رقم مصريا'),
  service:zod.string().nonempty('يجب ان تختار اختيار واحد'),
  time:zod.string().nonempty('التاريخ مطلوب').refine((date) => {
      const selectedDate = new Date(date);
      selectedDate.setHours(0,0,0,0);
      return selectedDate >= today;
    }, {
      message: "لا يمكن اختيار تاريخ قبل اليوم"
    })
})
export default function Booking() {
  
const { handleSubmit, register ,formState:{errors,touchedFields}} = useForm({
    defaultValues: {
      name: '',
      phone: '',
      service: '',
      time:''
    },
    resolver:zodResolver(schema),
    mode:'onBlur',
    reValidateMode:'onBlur'
  })
  const sendData =  (userData) => {
  const {name,phone,service,time}=userData

  const d=new Date(time)
  const date=d.toLocaleDateString()
const clinicNumber='20150'
const message=`
مرحبا، أريد حجز موعد في العيادة
الاسم: ${name}
رقم الهاتف: ${phone}
نوع الخدمة: ${service}
الموعد المناسب:${time}
`;
const whatsappURL=`https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`;
window.open(whatsappURL,'_blank')

  }

  return (
    <>
      <section  id='booking' className='min-h-[50vh] w-[90%] mx-auto py-12 '>
        <div className="container mx-auto">
<Header text={'احجز موعدك'} />
        <div className='flex justify-center  items-center'>

          <div className='  p-6 dark:text-white dark:bg-gray-800 bg-white rounded-xl lg:min-w-md  w-sm border border-gray-200'>
            <form onSubmit={handleSubmit(sendData)} className='flex text-end flex-col gap-4'>
              <label htmlFor='name '>الأسم</label>
              <Input  errorMessage={errors.name?.message} isInvalid={errors.name&& touchedFields.name} variant='bordered' {...register('name')} id='name' />
              <label htmlFor='mobile'>رقم الهاتف</label>
              <Input type='tel' errorMessage={errors.phone?.message} isInvalid={errors.phone&& touchedFields.phone} variant='bordered' {...register('phone')} id='mobile' />
              <label htmlFor='service'>نوع الخدمة</label>
              <select className={`p-2 rounded-xl shadow border border-gray-300 dark:bg-gray-800 text-sm dark:text-white ${errors.service?'border-red-500':'border-gray-300'}`} {...register('service')} id="jobs">
             
                <option  value="تنظيف الأسنان">تنظيف الأسنان</option>
                <option value="حشو تجميلي">حشو تجميلي</option>
                <option value="تقويم الأسنان">تقويم الأسنان</option>
                <option value="زراعة الأسنان">زراعة الأسنان</option>
                <option value="إستشارة عامة">إستشارة عامة</option>
              </select>
            {errors.service&& touchedFields.service&& (<p className='text-red-600/80 text-xs '>{errors.service?.message}</p>)}
              <label  htmlFor='date' >الموعد المفضل</label>
              <input    type="date"  className={`p-2 rounded-xl shadow border w-full text-sm border-gray-300 
                ${errors.time ?'border-red-500':'border-gray-300' }`} {...register('time')}/>
             {errors.time&& touchedFields.time&& <p className='text-red-600/80 text-xs'>{errors.time?.message}</p>}
              <Button type='submit' color="primary"> ارسال عبر الواتساب</Button>
            </form>

          </div>

        </div>
        </div>
        
      </section>


    </>
  )
}
