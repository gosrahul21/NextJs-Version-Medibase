import React, {useEffect,useState} from 'react'


export default function Modal({setShow,message}) {

    const clickOutsideHandler = () =>{
        setShow(false);
    }

    useEffect(()=>{
        window.document.addEventListener('click',clickOutsideHandler);

        return ()=>{
            document.removeEventListener('click',clickOutsideHandler)
        }
    },[])

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-70 '>
            <div className='bg-white space-y-6 text-gray-600 rounded-lg  w-80  px-4 py-4 transition transform duration-500 ease-in-out' onClick = {(e)=>e.stopPropagation()}>
                <p>{message}</p>
                <div className='space-x-4'>
                    <button className='bg-indigo-600 text-gray-300 px-2 py-1 rounded-md '>Logout</button>
                <button className='bg-slate-600 text-gray-300 px-2 py-1 rounded-md ' onClick = {(e)=>setShow(false)}>Close</button>
                </div>
                
            </div>
        </div>
    )
}
