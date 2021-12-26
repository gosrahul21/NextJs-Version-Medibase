import React from 'react'
import {PhoneIcon,MailIcon} from '@heroicons/react/solid'
export default function Footer() {
    return (
        <div className='bg-gray-800 grid grid-cols-4 px-8 py-4'>
            <section>
                <h1 className='text-indigo-100 text-2xl'>About Us</h1>
                <p className='text-indigo-100 text-sm'>This website is developed for educational purpose</p>

                <div className=''>
                <h1 >Contact Us</h1>
                    <div className='flex space-x-1'><PhoneIcon height={'20px'} className='text-yellow-300'/> <p>+91-7004572140</p></div>
                    <div className='flex space-x-1'><MailIcon  height={'20px'} className='text-red-400'/><p> gosrahul21@gmail.com</p></div>
                </div>
               
            </section>

            <section>

            </section>

            <section>

            </section>

            <section>

            </section>
        </div>
    )
}
