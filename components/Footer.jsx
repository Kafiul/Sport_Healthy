import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/Fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='w-full'>
            <div className='bg-violet-800 w-full flex md:flex-row flex-col  justify-around items-start p-20 '>
                <div grid grid-cols-4 gap-6>
                    <ul>
                        <div>
                            <Image src="/assets/icon/LogoWhite.svg" width={'25'} height={'4'} className='w-36' alt='/' />
                           
                            <p className='text-slate-400 text-xl tracking-tight mx-12 pb-3'>We take care of your health with <br /> regular and fun exercise</p>
                        </div>
                        <div className='flex mx-12  gap-6 pb-6'>
                            <FaLinkedinIn className='text-2xl cursor-pointer hover:text-green-600' />
                            <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600' />
                            <FaGithub className='text-2xl cursor-pointer hover:text-blue-600' />
                            <FaYoutube className='text-2xl cursor-pointer hover:text-slate-600' />
                        </div>
                    </ul>
                </div>
                <div className="p-5 flex">
                    <ul>
                        <p className="text-white font-bold pb-4">Program</p>
                        <li className='text-slate-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer '>Workout</li>
                        <li className='text-slate-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer '>Gym</li>
                        <li className='text-slate-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer '>Cardio</li>
                        <li className='text-slate-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer '>Zumba</li>
                    </ul>
                </div>
                <div className="p-5 flex">
                    <ul>
                        <p className="text-white font-bold pb-4">Blog</p>
                        <li className='text-slate-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer '>Daily stretch</li>
                        <li className='text-slate-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer '>Daily workout</li>
                    </ul>
                </div>
                <div className="p-5 flex">
                    <ul>
                         <p className="text-white font-bold pb-4">About Us</p>
                        <li className='text-slate-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer '>Support</li>
                        <li className='text-slate-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer '>Contact</li>
                        <li className='text-slate-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer '>Address</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
