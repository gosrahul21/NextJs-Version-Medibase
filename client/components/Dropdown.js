import {useEffect,useState} from 'react';

function Dropdown({displayName}) {
    const [show,setShow] = useState(false )
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
            <div className='cursor-pointer' onClick={(e)=>{e.stopPropagation(); setShow(!show)}}>
                {displayName}
            </div>

            {show&&<div className="absolute bg-white shadow-md rounded-md z-50 right-0 whitespace-nowrap">
                <p className='hover:bg-gray-100 cursor-pointer px-2 py-1 text-sm'> Sign in </p>
                <p className='hover:bg-gray-100 cursor-pointer  px-2 py-1 text-sm'> Log in </p>
                <p className='hover:bg-gray-100 cursor-pointer  px-2 py-1 text-sm'> Item 1 </p>
                <p className='hover:bg-gray-100 cursor-pointer  px-2 py-1 text-sm'> Item 1 </p>
                <p className='hover:bg-gray-100 cursor-pointer  px-2 py-1 text-sm'> Item 1 </p>
            </div>}

        </div>
    )
}

export default Dropdown;
