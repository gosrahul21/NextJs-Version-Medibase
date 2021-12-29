import {useEffect,useState} from 'react';
import {MenuIcon,UserIcon} from '@heroicons/react/outline'
import {useRouter} from 'next/router';
import Modal from './Modal';
import {Avatar} from '@mui/material/Avatar'
import LoginModal from './LoginModal';


function Dropdown({user}) {
    const [showModal, setShowModal] = useState(false);
    const [show,setShow] = useState(false );
    const [showLoginModal,setLoginShow] = useState(false);
    const router = useRouter();
    // console.log('dropdown', user)
    useEffect(()=>{
        function callBack(){
            setShow(false);
        }
        window.addEventListener('click',callBack);

        return ()=>{
            window.removeEventListener('click',callBack)
        }
    },[])

    return (
        <div className="relative ">
            <div className='flex bg-slate-500 items-center px-2 py-1 cursor-pointer text-base mx-2 border border-indigo-100 rounded-full p-1' onClick={(e)=>{e.stopPropagation(); setShow(!show)}}>
                <MenuIcon className='text-indigo-100 h-4 w-4'/>
                {user?.photoUrl?<Avatar src={user.photoUrl} sx={{ width: 25, height: 25 }} />:<UserIcon className='text-indigo-100  h-5 w-5'/>}
            </div>

            {show&&<div className="absolute min-w-[150px] bg-white shadow-md rounded-md z-50 right-0 whitespace-nowrap">
                <p onClick={()=>router.push('/auth/signin')} className={`${user && 'hidden'} hover:bg-gray-100 text-gray-800 cursor-pointer rounded-md px-4 py-2 text-sm`}> Sign in </p>
                <p onClick={()=>setLoginShow(true)} className={`${user && 'hidden'} hover:bg-gray-100 text-gray-800 cursor-pointer  px-4 py-2 text-sm`}> Log in </p>
                
                <p className={`${!user&&'hidden'} hover:bg-gray-100 text-gray-800 cursor-pointer  px-4 py-2 text-sm`} onClick={()=>router.push('/profile/showprofile')} > Profile </p>
                <p className='hover:bg-gray-100  text-gray-800 cursor-pointer  px-4 py-2 text-sm'> Local doctors</p>
                <p className={`${!user&&'hidden'} hover:bg-gray-100 text-gray-800 cursor-pointer  px-4 py-2 text-sm`} onClick={()=>setShowModal(true)}> Logout </p>
            </div>}
            {showModal&&<Modal message="Do you want to Logout?" setShow={setShowModal}/>}
            {showLoginModal&&<LoginModal show={showLoginModal} setShow={setLoginShow}/>}
        </div>
    )
}

export default Dropdown;
