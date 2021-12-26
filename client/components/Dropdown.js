import {useEffect,useState} from 'react';
import {MenuIcon,UserIcon} from '@heroicons/react/outline'
import {useRouter} from 'next/router';
import Modal from './Modal';

function Dropdown({}) {
    const [showModal, setShowModal] = useState(false);
    const [show,setShow] = useState(false );
    const router = useRouter();

    useEffect(()=>{
        function callBack(){
            setShow(false);
        }
        window.addEventListener('click',callBack)

        return ()=>{
            window.removeEventListener('click',callBack)
        }
    },[])

    return (
        <div className="relative ">
            <div className='flex cursor-pointer text-base  border border-indigo-100 rounded-lg p-1' onClick={(e)=>{e.stopPropagation(); setShow(!show)}}>
                <MenuIcon className='text-indigo-100 h-5 w-5'/>
                <UserIcon className='text-indigo-100 h-5 w-5'/>
            </div>

            {show&&<div className="absolute min-w-[150px] bg-white shadow-md rounded-md z-50 right-0 whitespace-nowrap">
                <p onClick={()=>router.push('/auth/signin')} className='hover:bg-gray-100 text-gray-800 cursor-pointer rounded-md px-4 py-2 text-sm'> Sign in </p>
                <p onClick={()=>router.push('/auth/login')} className='hover:bg-gray-100 text-gray-800 cursor-pointer  px-4 py-2 text-sm'> Log in </p>
                <p className='hover:bg-gray-100  text-gray-800 cursor-pointer  px-4 py-2 text-sm'> Local doctors</p>
                <p className='hover:bg-gray-100 text-gray-800 cursor-pointer  px-4 py-2 text-sm' onClick={()=>setShowModal(true)}> Logout </p>
                <p className='hover:bg-gray-100 text-gray-800 cursor-pointer rounded-md  px-4 py-2 text-sm'> Item 1 </p>
            </div>}
            {showModal&&<Modal message="Do you want to Logout?" setShow={setShowModal}/>}
        </div>
    )
}

export default Dropdown;
