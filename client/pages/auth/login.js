import {Header} from '../../components';
import Head from 'next/head'
import {firebaseApp} from '../../firebase'
import { useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google'
import { getAuth, GoogleAuthProvider, signInWithPopup,signInWithPhoneNumber,FacebookAuthProvider } from "firebase/auth";
import {useRouter} from 'next/router'



function login() {

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
                <div className='flex flex-col justify-center items-center bg-gradient-to-tr from-slate-700 to-slate-700 border-indigo-200 rounded-md p-4 space-y-4'>
                    <button className='border bg-white border-gray-100 text-gray-800 rounded-lg px-2 py-1 cursor-pointer w-full' onClick={signInPopUpGoogle}><GoogleIcon className="text-red-800"/> Login with Google</button>
                    <button className='border bg-white border-gray-100 text-gray-800 rounded-lg px-2 py-1 cursor-pointer w-full' onClick={signInPopUpFacebook}> <FacebookIcon className="text-sky-800"/> Login with Facebook</button>
                    <input className='px-2 py-1 bg-transparent border rounded-md' placeholder="email" />
                    <input className='px-2 py-1 bg-transparent  border rounded-md' placeholder='password'/>
                    <button className=' text-gray-100 rounded-lg px-2 py-1 cursor-pointer w-full bg-indigo-600 hover:bg-indigo-500 transition duration-150 active:scale-95 ' >Log In</button>
                </div>
            </main>           
              
        </div>
    )
}

export default login