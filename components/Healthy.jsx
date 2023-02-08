import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Healthy = () => {
  return (
    <div>
      <div className='w-full m-auto md:h-screen items-center ml-16 pt-14 '>
        <div className='md:grid grid-cols-2 pl-8 gap-4 max-w-[1240px]'>
          <div className='tracking-widest text-7xl '>
            <h1 className=''>Healthy in side fresh out side</h1>
          </div>
          <div className='tracking-wider text-base '>
            <p>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p>
          </div>
        </div>
        <div className='pt-24 mx-20'>
          <div className='bg-indigo-400  h-52  rounded-3xl '>
            <div className='grid grid-cols-3 lg:gap-3 md:grid-cols-3 sm:grid-cols-1 justify-items-center  '>
              <div className='py-10 '>
                <div className='overflow-hidden flex '>
                  <div className=' flex justify-center rounded-xl bg-teal-200 h-20 w-20'>
                    <Image src='/assets/icon/Manline.svg' width={'45'} height={'45'} className='w-8' alt="" />
                  </div>
                  <div className='pl-2'>
                    <p className='pb-4 tracking-tighter text-base font-bold text-white'>Get that 11 line in 30 days</p>
                    <Link href='/'>
                    <button className=' flex justify-between hover:text-amber-800 hover:bg-slate-400 '>
                      <div className='pr-5'>Learn more</div>
                      <div className=' pt-1 '>
                        <Image src="/assets/icon/ArrowRight.svg" width={'16'} height={'8'} alt="/" />
                      </div>
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='py-10 '>
                <div className='overflow-hidden flex '>
                  <div className=' flex justify-center rounded-xl bg-teal-200 h-20 w-20'>
                    <Image src='/assets/icon/SherdMan.svg' className='w-8' width={'45'} height={'45'} alt="/" />
                  </div>
                  <div className='pl-2'>
                    <p className='pb-4 tracking-tighter text-base font-bold text-white'>14 Days sherd challenge</p>
                    <Link href='/'>
                    <button className=' flex justify-between hover:text-amber-800 hover:bg-slate-400 '>
                      <div className='pr-5'>Learn more</div>
                      <div className=' pt-1 '>
                        <Image src="/assets/icon/ArrowRight.svg" width={'16'} height={'8'} alt="/" />
                      </div>
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='py-10 '>
                <div className='overflow-hidden flex '>
                  <div className=' flex justify-center rounded-xl bg-teal-200 h-20 w-20'>
                    <Image src='/assets/icon/FlatMan.svg' width={'45'} height={'45'} className='w-8' alt="" />
                  </div>
                  <div className='pl-5'>
                    <p className='pb-4 tracking-tighter text-base font-bold text-white'>Get flat belly in 30 days</p>
                    <Link href='/'>
                    <button className='flex justify-between hover:text-amber-800 hover:bg-slate-400 '>
                      <div className='pr-5'>Learn more</div>
                      <div className=' pt-1 '>
                        <Image src="/assets/icon/ArrowRight.svg" width={'16'} height={'5'} alt="/" />
                      </div>
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Healthy
