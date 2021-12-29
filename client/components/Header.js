import Dropdown from "./Dropdown";
import {useState,useEffect} from 'react';
import { MenuIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import LoginModal from './LoginModal'
export default function Header({user}) {

    const router = useRouter();
    const [bgShow,setBgShow] = useState(false);
    
    function scrollEventHandler(e){
        if(scrollY>0){
            setBgShow(true);
        }
        else
            setBgShow(false);
    }

    useEffect(()=>{
        addEventListener('scroll',scrollEventHandler);

        return ()=>removeEventListener("scroll",scrollEventHandler);
    })

    return (
        <div className={`fixed w-full z-50 top-0 grid grid-cols-3 text-indigo-100
         px-8 py-2 ${bgShow ?"bg-slate-700 shadow-md ":"bg-transparent"} transition duration-150  ease-in-out	`}>
            <div className="flex items-center">
                {/* Display Name of website */}
                <h1 className="text-lg  font-semibold cursor-pointer" onClick={()=>router.push('/')}>Medibase</h1>
            </div>

            <div className="flex justify-center items-center">
                {/* display search box to search for patient */}
                <input placeholder="Search" type="text" className=" px-4 py-1 rounded-full bg-transparent border border-gray-200 outline-gray-400"/>
            </div>

            <div className="flex justify-end items-center space-x-4">
                <p className="hidden md:inline cursor-pointer rounded-full px-4 py-1 hover:bg-gray-50 whitespace-nowrap">Register as Doctor</p>
                <Dropdown user={user} />
            </div>
            
        </div>
    )
}
