import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
    const [Nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!Nav)
    }

    return (
        <div className="fixed w-full bg-[#000300] z-20">
            <div className="flex justify-between items-center h-20 mx-auto max-w-[1240px] px-4 bg-[#000300]">
                <h1 className="text-[#00df9a] text-3xl font-bold">REACT</h1>
                <ul className="sm:flex text-white hidden ">
                    <li className="p-4"><a href="#Home">Home</a></li>
                    <li className="p-4"><a href="#Company">Company</a></li>
                    <li className="p-4"><a href="#Resourses">Resourses</a></li>
                    <li className="p-4"><a href="#About">About</a></li>
                    <li className="p-4"><a href="#Contact">Contact</a></li>
                </ul>
                <div className="text-white sm:hidden"
                    onClick={handleNav}>
                    {!Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                </div>
                <div className={!Nav ? "fixed left-0 top-0 text-white border-r border-r-gray-900 w-[60%] h-full ease-in-out duration-500 bg-[#000300] md:hidden" : "hidden"}>
                    <h1 className="text-[#00df9a] text-3xl font-bold m-4 ">REACT</h1>
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-b-gray-600"><a href="#Home">Home</a></li>
                        <li className="p-4 border-b border-b-gray-600"><a href="#Company">Company</a></li>
                        <li className="p-4 border-b border-b-gray-600"><a href="#Resourses">Resourses</a></li>
                        <li className="p-4 border-b border-b-gray-600"><a href="#About">About</a></li>
                        <li className="p-4"><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar