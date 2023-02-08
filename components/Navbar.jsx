import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='w-full h-20 z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 my-8 2xl:px-16 '>
                <Image className='pt-6 cursor-pointer'
                    src='/assets/icon/logoNav.svg'
                    alt='/'
                    width='175'
                    height='50'
                />
                <div>
                    <ul className='hidden md:flex space-x-10 ' >
                        <Link href='/' >
                            <li className='text-sm mt-3 hover:border-b hover:text-rose-700 '>Home</li>
                        </Link>
                        <Link href='/' >
                            <li className='text-sm mt-3 hover:border-b  hover:text-rose-700 '>Program</li>
                        </Link>
                        <Link href='/' >
                            <li className='text-sm mt-3 hover:border-b  hover:text-rose-700 '>Blog</li>
                        </Link>
                        <Link href='/' >
                            <li className='text-sm mt-3 hover:border-b  hover:text-rose-700 '>About us</li>
                        </Link>
                        <Link href='/' >
                            <li className='text-sm hover:border-b items-center text-center mr-20'>
                                <button className='bg-blue-900 hover:bg-slate-400 hover:text-orange-700 text-white px-8 py-3  
                                 rounded-md'>Log in
                                </button>
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden' >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

        <div className={nav ? 'md:hidden fixed bg-black/70 left-0 top-0     w-full h-screen' : ''}>
                <div className={
                    nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                <div className='flex w-full items-center justify-between'>
                <Image className='pt-6 cursor-pointer'
                 src='/assets/icon/logoNav.svg'
                 alt='/'
                 width='120'
                 height='50'
                 />
                 <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer '>
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                 <div className='py-4 px-8 flex flex-col'>
                        <ul>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Program</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Blog</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About us</li>
                            </Link>
                            <Link href='/' >
                                <li className='text-sm py-4'>
                                    <button className='bg-blue-900 hover:bg-slate-400 hover:text-orange-700 text-white p-2
                                 rounded-md'>Log in
                                    </button>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
