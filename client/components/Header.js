import Dropdown from "./Dropdown";
import {useState,useEffect} from 'react';
import { MenuIcon,SearchIcon,SunIcon,BellIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import LoginModal from './LoginModal'
export default function Header({user,bgshow}) {

    const router = useRouter();
    const [bgShow,setBgShow] = useState(bgshow);
    
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

            <div className="flex justify-center items-center  rounded-full shadow-md focus:bg-white focus:text-gray-600 border active:bg-white border-gray-200 ">
                {/* display search box to search for patient */}
                <input placeholder="Search" type="text" className=" px-4 py-1 bg-transparent outline-none  w-full"/>
                <SearchIcon className="h-6 w-8"/>
            </div>

            <div className="flex justify-end items-center space-x-4 ">
                <BellIcon className="h-6 w-8 cursor-pointer"/>
                <p className="hidden md:inline cursor-pointer rounded-full px-4 py-1 hover:bg-gray-50 hover:text-gray-500 hover:shadow-md whitespace-nowrap">Refer to your friends</p>
                <Dropdown user={user} />
            </div>
            
        </div>
    )
}
