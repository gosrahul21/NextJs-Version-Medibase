import Dropdown from "./Dropdown";

export default function Header() {
    return (
        <div className="fixed w-full z-50 top-0 shadow-md grid grid-cols-3 px-4 py-2">
            <div>
                {/* Display Name of website */}
                <h1>Medibase</h1>
            </div>

            <div className="flex justify-center">
                {/* display search box to search for patient */}
                <input placeholder="Search" type="text" className="text-center px-2 py-1 rounded-full border-2 border-gray-200 outline-gray-400"/>
            </div>

            <div className="flex justify-end">
                <Dropdown displayName={"options"}/>
            </div>
            
        </div>
    )
}
