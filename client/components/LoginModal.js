import {useState,useEffect } from 'react';
import {firebaseApp} from '../firebase'

import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithPhoneNumber,FacebookAuthProvider } from "firebase/auth";
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google'


export default function LoginModal({show,setShow}) {

    const clickOutsideHandler = () =>{
        setShow(false);
    }

    const auth = getAuth(firebaseApp);
    // const router = useRouter();

    const signInPopUpGoogle = ()=>{
            signInWithPopup(auth,new GoogleAuthProvider()).then((result)=>{
                setShow(false);
                // router.push('/');
            }).catch((err)=>{
                console.log(err)
        });
    }  

    const signInPopUpFacebook = ()=>{
        signInWithPopup(auth, new FacebookAuthProvider()).then((result)=>{
            setShow(false);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        window.document.addEventListener('click',clickOutsideHandler);

        return ()=>{
            document.removeEventListener('click',clickOutsideHandler)
        }
    },[]);


    return (

  show?(<div className= 'fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-400 bg-opacity-70  '>
                  
            <div className='flex flex-col items-center rounded-lg bg-gradient-to-tr from-slate-700 to-slate-700 border-indigo-200 ' onClick={(e)=>e.stopPropagation()}>
                <div className='flex justify-center items-center w-full text-gray-200 p-4 text-lg font-semibold border-b  border-gray-400 shadow-md'>Login</div>
        
                <div className='flex flex-col justify-center items-center  py-4 px-8 space-y-4'>
                    <button className='border bg-white border-gray-100 text-gray-800 shadow-md rounded-lg px-2 py-1 cursor-pointer w-full hover:bg-gray-300 transition duration-200 active:scale-95 ' onClick={signInPopUpGoogle}><GoogleIcon className="text-red-800"/> Continue with Google</button>
                    <button className='border bg-white border-gray-100 text-gray-800 shadow-md rounded-lg px-2 py-1 cursor-pointer w-full hover:bg-gray-300 transition duration-200 active:scale-95 ' onClick={signInPopUpFacebook}> <FacebookIcon className="text-sky-800"/> Continue with Facebook</button>
                    <input className='px-2 py-2 bg-transparent text-gray-200  border rounded-md w-80' placeholder="email"  type='text'/>
                    <input className='px-2 py-2 bg-transparent text-gray-200   border rounded-md w-80' placeholder='password' type='password' requierd/>
                    <button className=' text-gray-100 rounded-lg px-2 py-1 shadow-md cursor-pointer w-full bg-indigo-600 hover:bg-indigo-500 transition duration-300 active:scale-95 ' >Log In</button>
                </div>
       
                <p className='text-gray-200 py-2 px-8 underline cursor-pointer' >Forgot Password?</p>
    
                <p className='text-gray-200 py-4 px-8 cursor-pointer' onClick={()=>null}>Don't have an account? Sign UP</p>
            </div>

      </div>):(<div></div> )
    )
}
