import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LearnMore = () => {
  return (
    <div className=' flex items-center p-4'>
      <div className='w-11/12  m-auto md:grid grid-cols-2 gap-12'>
        <div className='flex items-center '>
          <Image src='/assets/projects/img2.png' width={'640'} height={'45'} className='w-screen ' alt="/" />
        </div>
        <div className=''>
          <h1 className='tracking-wider text-5xl '>
            Best full body workout to lose fat
          </h1>
          <p className=' text-gray-600 tracking-wider text-base  '>
            Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.
          </p>
          <div className='flex py-6' >
            <div>
              <Link href='/' >
              <button className=' flex justify-between py-2 bg-blue-900 text-white rounded-md
                            hover:text-stone-900 hover:bg-blue-400 '>
                <div className='mx-6'>Get started
                </div>
                <div className='justify-end mx-6 '>
                  <Image src="/assets/icon/ArrowRight.svg" width={'22'} height={'5'} alt="/" />
                </div>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnMore
