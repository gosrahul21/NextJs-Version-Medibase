import {Header} from '../../components';
import Head from 'next/head'
import {firebaseApp} from '../../firebase'
import { useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google'
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithPhoneNumber,FacebookAuthProvider } from "firebase/auth";
import {useRouter} from 'next/router'



function signup() {

    const auth = getAuth(firebaseApp);
    const router = useRouter();

    const signInPopUpGoogle = ()=>{
            signInWithPopup(auth,new GoogleAuthProvider()).then((result)=>{
                router.push('/');
            }).catch((err)=>{
                console.log(err)
        });
    }  

    const signInPopUpFacebook = ()=>{
        signInWithPopup(auth, new FacebookAuthProvider()).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className='bg-gradient-to-tr from-slate-900 to-slate-800'>
            <Head>
                <title>Login- MedHistory</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />  
            </Head>

            <Header/>
            <main className='flex flex-col justify-center items-center h-[100vh] '>
                <div className='flex flex-col items-center rounded-lg bg-gradient-to-tr from-slate-700 to-slate-700 border-indigo-200 '>
                    <div className='flex justify-center items-center w-full text-gray-200 p-2 text-lg font-semibold border-b-2  border-gray-400 shadow-md'>Sign Up</div>
                    
                    <div className='flex flex-col justify-center items-center  p-4 space-y-4'>
                        <button className='border bg-white border-gray-100 text-gray-800 shadow-md rounded-lg px-2 py-1 cursor-pointer w-full hover:bg-gray-300 transition duration-200 active:scale-95 ' onClick={signInPopUpGoogle}><GoogleIcon className="text-red-800"/> Continue with Google</button>
                        <button className='border bg-white border-gray-100 text-gray-800 shadow-md rounded-lg px-2 py-1 cursor-pointer w-full hover:bg-gray-300 transition duration-200 active:scale-95 ' onClick={signInPopUpFacebook}> <FacebookIcon className="text-sky-800"/> Continue with Facebook</button>
                        <input className='px-2 py-2 bg-transparent text-gray-200  border rounded-md w-80' placeholder="email"  type='text'/>
                        <input className='px-2 py-2 bg-transparent text-gray-200   border rounded-md w-80' placeholder='password' type='password' requierd/>
                        <button className=' text-gray-100 rounded-lg px-2 py-1 shadow-md cursor-pointer w-full bg-indigo-600 hover:bg-indigo-500 transition duration-200 active:scale-95 ' >Sign Up</button>
                    </div>
                   
                    {/* <p className='text-gray-200 p-2 underline cursor-pointer' >Forgot Password?</p> */}
                
                </div>
               
            </main>           
              
        </div>
    )
}

export default signup
