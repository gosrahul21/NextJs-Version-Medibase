import React from 'react';
import { Header } from '../../components';
import  Image from 'next/image';
import { BrowserRouter,Routes,Router } from 'react-router-dom';
import {IdentificationIcon,CogIcon, CalendarIcon, ShieldCheckIcon,ClipboardListIcon} from '@heroicons/react/solid';


export default function showprofile({user}) {
    return (
        <div className='bg-gradient-to-tr from-slate-900 to-slate-800'>
            <Header user={user} bgshow={true}/>

            {/* left section */}
            <section className='h-[100vh] pt-16 shadow-lg bg-slate-600  w-52 flex flex-col items-center sp-y-2'>
                {/* image */}
                <div className='relative h-40 w-40  '>
                    <Image className='absolute rounded-full bg-orange-400 shadow-md border-indigo-500 border-2 h-40 w-40'
            
                    layout='fill' src="/myImage.png" />
                </div>
                {/* name */}
                <h1 className='text-xl font-semibold text-gray-50'>Rahul Goswami</h1>

                {/* options */}
                <div className='w-full text-gray-300 mt-4'>
                    <p className='py-2 px-4 hover:bg-gray-500 hover:text-gray-100 text-base cursor-pointer flex items-center whitespace-nowrap'>
                        <IdentificationIcon className='h-5 w-8'/> Personal Information
                    </p>

                    <p className='py-2 px-4 hover:bg-gray-500 hover:text-gray-100 text-base cursor-pointer flex items-center whitespace-nowrap'>
                       <ShieldCheckIcon className='h-5 w-8'/> Permissions
                    </p>

                    <p className='py-2 px-4 hover:bg-gray-500 hover:text-gray-100 text-base cursor-pointer flex items-center whitespace-nowrap'>
                       <ClipboardListIcon className='h-5 w-8'/> Medical History
                    </p>

                    <p className='py-2 px-4 hover:bg-gray-500 hover:text-gray-100 text-base cursor-pointer flex items-center whitespace-nowrap'>
                        <CalendarIcon className='h-5 w-8'/> My schedule
                    </p>

                    <p className='py-2 px-4 hover:bg-gray-500 hover:text-gray-100 text-base cursor-pointer flex items-center whitespace-nowrap'>
                       <CogIcon className='h-5 w-8'/> Settings
                    </p>
                </div>

            </section>
            
            <section>
                {/* <BrowserRouter>
                    <Routes>

                    </Routes>
                </BrowserRouter> */}
            </section>

        </div>
    )
}



// fetch image and profile details during each request