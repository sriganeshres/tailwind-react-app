import React from "react"
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Card = () => {
    return (
        <div className="bg-white w-full py-[10rem] mx-auto px-4">
            <div className="max-w-[1260px]  grid lg:grid-cols-3 justify-center items-center mx-auto gap-8">
                <div className="w-full shadow-xl flex flex-col  p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-[80px] mx-auto z-0 bg-white " src={Single} alt="Single" />
                    <h2 className="text-2xl font-bold text-center py-3">Single User</h2>
                    <p className="text-4xl font-bold text-center">$149</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b border-b-gray-500 mx-8 mt-8">500GB storage</p>
                        <p className="py-2 border-b border-b-gray-500 mx-8 ">1 Granted User</p>
                        <p className="py-2 border-b border-b-gray-500 mx-8 ">Send Upto 2GB</p>
                    </div>
                    <button className="p-2 border border-[#00df9a] bg-[#00df9a] w-[180px] mx-auto my-4 font-bold text-[#000300] hover:text-[#00df9a] hover:bg-[#000300] hover:border-[#000300] rounded-md">Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-[80px] mx-auto z-0 bg-white " src={Double} alt="Double" />
                    <h2 className="text-2xl font-bold text-center py-3">Two Users</h2>
                    <p className="text-4xl font-bold text-center">$249</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b border-b-gray-500 mx-8 mt-8">1200GB storage</p>
                        <p className="py-2 border-b border-b-gray-500 mx-8 ">2 Granted Users</p>
                        <p className="py-2 border-b border-b-gray-500 mx-8 ">Send Upto 5GB</p>
                    </div>
                    <button className="p-2 border border-[#00df9a] bg-[#00df9a] w-[180px] mx-auto my-4 font-bold text-[#000300] hover:text-[#00df9a] hover:bg-[#000300] hover:border-[#000300] rounded-md">Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-[80px] mx-auto z-0 bg-white " src={Triple} alt="Triple" />
                    <h2 className="text-2xl font-bold text-center py-3">Triple User</h2>
                    <p className="text-4xl font-bold text-center">$399</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b border-b-gray-500 mx-8 mt-8">2500GB storage</p>
                        <p className="py-2 border-b border-b-gray-500 mx-8 ">3 Granted Users</p>
                        <p className="py-2 border-b border-b-gray-500 mx-8 ">Send Upto GB</p>
                    </div>
                    <button className="p-2 border border-[#00df9a] bg-[#00df9a] w-[180px] mx-auto my-4 font-bold text-[#000300] hover:text-[#00df9a] hover:bg-[#000300] hover:border-[#000300] rounded-md">Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Card