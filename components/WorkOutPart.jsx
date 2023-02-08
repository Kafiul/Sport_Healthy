import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WorkOutPart = () => {
  return (
    <div className=' flex items-center pt-14'>
    <div className='w-11/12  md:grid grid-cols-2 gap-8'>
        <div className='ml-48'>
            <h1 className=' py-8 tracking-widest text-5xl '>
                Daily morning workout in home
            </h1>
             <div>
             <p className=' text-gray-600 tracking-wider py-8  text-lg '>
             Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
            </p>
             </div>
                <div className='flex py-6' >
                    <div>
                       <Link href='/'>
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
        <div className='flex items-center '>
            <Image src='/assets/projects/Gtretch.svg' width={'640'} height={'12'}  className='max-w-screen-md ' alt="/" />
        </div>
    </div> 
</div>

  )
}

export default WorkOutPart
