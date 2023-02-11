import Image from 'next/image'
import React from 'react'

const HowWork = () => {
    return (
        <div>
            {/* -------It Works Section---------------*/}
            <div className='w-11/12 flex items-center'>
                <div className=' m-auto md:grid grid-cols-2 gap-12'>
                    <div className='flex items-center'>
                        <Image src='/assets/projects/Work.svg' width={'6'} height={'45'} className='w-screen ' alt="/" />
                    </div>
                    <div className='py-20'>
                        <h1 className=' py-8 tracking-wider text-6xl '>
                            How it works?
                        </h1>

                        <div>
                            <ul>
                                <li className='m-4 rounded-md overflow-hidden shadow-lg bg-slate-50 p-8'>The body becomes sick because of rarely exercise</li>
                                <li className='rounded-md overflow-hidden shadow-lg bg-slate-50 p-8'> <p>Don't give up in order to get a healthy and ideal body</p></li>
                                <li className='m-4 rounded-md overflow-hidden shadow-lg bg-slate-50 p-8'> Become addicted to the exercise that is given</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
  {/*  -------------Programs Taken  Section-----------------  */}

            <div className='justify-items-center text-center pb-8'>
                <h1 className='mx-96 min-[320px]:mx-8 sm:mx-8 tracking-widest text-6xl'>Programs that can be taken</h1>
            </div>


            <div className='p-16'>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-12 pl-6'>
                    <div className='flex '>
                        <div className=' flex justify-center rounded-full bg-sky-500 w-20 h-20'>
                            <Image src='/assets/icon/ABS.svg' width={'45'} height={'45'}  className='w-10' alt="" />
                        </div>
                        <div className='w-2/4 mx-4'>
                            <p className='pb-3 tracking-tighter text-base font-bold'>Gets ABS in 2 weeks</p>
                            <div className='text-slate-400'><p>Exercise is a very important need for our body. </p></div>
                        </div>
                    </div>

                    <div className='flex '>
                        <div className=' flex justify-center rounded-full bg-blue-400 w-20 h-20'>
                            <Image src='/assets/icon/FullBody.svg' width={'45'} height={'45'} className='w-10' alt="" />
                        </div>
                        <div className='w-2/4 mx-4'>
                            <p className='pb-3 tracking-tighter text-base font-bold'>25 Mins full body workout</p>
                            <div className='text-slate-400'><p>Exercise is a very important need for our body. </p></div>
                        </div>
                    </div>


                    <div className='flex '>
                        <div className=' flex justify-center rounded-full bg-fuchsia-400 w-20 h-20'>
                            <Image src='/assets/icon/Arms.svg' width={'45'} height={'45'} className='w-10' alt="/" />
                        </div>
                        <div className='w-2/4 mx-4'>
                            <p className='pb-3 tracking-tighter text-base font-bold'>10 Mins toned arms workout</p>
                            <div className='text-slate-400'><p>Exercise is a very important need for our body. </p></div>
                        </div>
                    </div>

                    <div className='flex '>
                        <div className=' flex justify-center rounded-full bg-fuchsia-400 w-20 h-20'>
                            <Image src='/assets/icon/FatBurn.svg' width={'45'} height={'45'} className='w-10' alt="" />
                        </div>
                        <div className='w-2/4 mx-4'>
                            <p className='pb-3 tracking-tighter text-base font-bold'>15 Mins full body fat burn</p>
                            <div className='text-slate-400'><p>Exercise is a very important need for our body. </p></div>
                        </div>
                    </div>

                    <div className='flex '>
                        <div className=' flex justify-center rounded-full bg-sky-500 w-20 h-20'>
                            <Image src='/assets/icon/HIIT.svg' width={'45'} height={'45'} className='w-10' alt="" />
                        </div>
                        <div className='w-2/4 mx-4'>
                            <p className='pb-3 tracking-tighter text-base font-bold'>25 Mins HIIT workout</p>
                            <div className='text-slate-400'><p>Exercise is a very important need for our body. </p></div>
                        </div>
                    </div>

                    <div className='flex '>
                        <div className=' flex justify-center rounded-full bg-sky-500 w-20 h-20'>
                            <Image src='/assets/icon/LowerAbs.svg' width={'45'} height={'45'} className='w-10' alt="" />
                        </div>
                        <div className='w-2/4 mx-4'>
                            <p className='pb-3 tracking-tighter text-base font-bold'>Intense lower Abs workout</p>
                            <div className='text-slate-400'><p>Exercise is a very important need for our body.</p></div>
                        </div>
                    </div>
                </div>
            </div>


    {/*--------------Testimonials Section---------------------- */}        

            <div>
                <div className='justify-items-center text-center'>
                    <h1 className='text-7xl '>Testimonials</h1>
                </div>

                <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:gap-6 mx-20 gap-'> 
                    <div className='py-10'> 
                        <div className='rounded overflow-hidden shadow-lg bg-slate-50 p-8'>
                        <p className='p-8'>    <span className='text-4xl'> "</span>It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</p>

                        <div className='flex '>
                        <div className=' '>
                            <Image src='/assets/icon/Ada.svg' width={'45'} height={'45'} className='w-14' alt="" />
                        </div>
                        <div className='w-2/4 mx-4'>
                            <p className='pb-3 tracking-tighter text-base font-bold'>Suketi Mantapo</p>
                            <div className='text-slate-400'><p>Designer Graphic </p></div>
                        </div>
                    </div>

                        </div>

                    </div>

                    <div className='py-10'> 
                        <div className='rounded-md overflow-hidden shadow-lg bg-slate-50 p-8'>
                        <p className='p-8'>    <span className='text-4xl'> "</span>It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</p>

                        <div className='flex '>
                        <div className=' '>
                            <Image src='/assets/icon/Ada.svg' width={'45'} height={'45'} className='w-14' alt="" />
                        </div>
                        <div className='w-2/4 mx-4'>
                            <p className='pb-3 tracking-tighter text-base font-bold'>Ada Apose</p>
                            <div className='text-slate-400'><p>Designer Graphic </p></div>
                        </div>
                    </div>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default HowWork
