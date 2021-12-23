import Dropdown from "./Dropdown";
import {useState,useEffect} from 'react';

export default function Header() {

    const [bgShow,setBgShow] = useState(false);

    useEffect(()=>{
        addEventListener('scroll',(e)=>{
            if(scrollY>0){
                setBgShow(true);
            }
            else
                setBgShow(false);
        })
    })

    return (
        <div className={`fixed w-full z-50 top-0 grid grid-cols-3
         px-4 py-2 ${bgShow ?"bg-white shadow-md ":"bg-transparent"} transition duration-150  ease-in-out	`}>
            <div className="flex items-center">
                {/* Display Name of website */}
                <h1 className="text-lg">Medibase</h1>
            </div>

            <div className="flex justify-center items-center">
                {/* display search box to search for patient */}
                <input placeholder="Search" type="text" className="text-center px-2 py-1 rounded-full border-2 border-gray-200 outline-gray-400"/>
            </div>

            <div className="flex justify-end items-center space-x-4">
                <p className="hidden md:inline cursor-pointer rounded-full px-4 py-1 hover:bg-gray-50 whitespace-nowrap">Register as Doctor</p>
                <Dropdown displayName={"options"}/>
            </div>
            
        </div>
    )
}
