import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const Main = () => {
    return (
        <div className='w-full md:h-screen flex items-center pt-14'>
            <div className='max-w-[1240px]  m-auto md:grid grid-cols-2 gap-8'>
                <div>
                    <h1 className=' py-8 tracking-wider text-7xl '>
                        Healthy in side <span className='text-violet-300 '>fresh</span> out side
                    </h1>
                    <p className='text-gray-600 tracking-widest   text-base '>
                        Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.
                    </p>
                    <div className='flex py-6' >
                        <div>
                            <Link href='/'>
                            <button className=' flex justify-between py-2 bg-blue-900 text-white rounded-md
                                hover:text-stone-900 hover:bg-blue-400 '>
                                <div className='mx-6'>Get started
                                </div>
                                <div className='justify-end mx-6 '>
                                    <Image src="/assets/icon/Arrow.svg" width={'22'} height={'5'} alt="/" />
                                </div>
                             </button>
                            </Link>
                        </div>
                        <div>
                           <Link href='/'>
                           <button className='mx-3 flex justify-between py-2 bg-white text-blue-600 shadow-xl rounded-md 
                                hover:text-amber-800 hover:bg-slate-400 '>
                                <div className=' mx-3 '>
                                    <Image src="/assets/icon/PlayButton.svg" width={'22'} height={'5'} alt="/" />
                                </div>
                                <div className='justify-end mx-3'>Learn more
                                </div>
                            </button>
                           </Link>
                        </div>
                    </div>
                    <h3 className=' py-2'>Brands:</h3>
                    <div>
                        <Image src="/assets/projects/brandImg.svg" width={400} height={0} alt="/" />
                    </div>
                </div>
                <div className='flex items-center '>
                    <li>
                        <Image src='/assets/projects/img1.png' width={'645'} height={'45'} className='max-w-screen-sm ' alt="/" />
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Main;
