import React from "react"
import Typed from "react-typed"


const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800] mt-[-96]
                mx-auto w-full h-screen flex flex-col text-center justify-center">
                <p className="text-[#00df9a] uppercase">Grow With Data Analytics</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold py-6">Grow With Data.</h1>
                <div className="flex justify-center">
                    <p className="md:text-5xl font-semibold sm:text-4xl text-xl">Fast, flexible financing for </p>
                    <Typed className="md:text-5xl font-semibold sm:text-4xl text-xl opacity-70 pl-2 md:pl-3" strings={[' BTB', ' BTC', ' SASS']} typeSpeed={60} backSpeed={60} loop />
                </div>
                <p className="mt-4 text-center md:text-2xl text-l text-gray-500 font-bold">Monitor your Data Analytics to increase revenue from BTB, BTC and SASS Platforms</p>
                <button className="bg-[#00df9a] border rounded-md my-2 md:my-4 mx-auto py-3 w-[200px] md:w-[250px] text-black font-medium border-[#000300]  md:text-3xl text-2xl hover:bg-[#000300] hover:text-[#00df9a]">Get Started</button>
            </div>
        </div>
    )
}

export default Hero