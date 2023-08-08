import React from "react"


const NewsLetter = () => {
    return (
        <div className="w-full py-16 text-white bg-inherit px-4">
            <div className="max-w-[1260px] mx-auto grid lg:grid-cols-3 ">
                <div className="lg:col-span-2 mx-3 lg:mx-5">
                    <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter to stay updated.</p>
                </div>
                <div className="my-4 mx-4">
                    <div className="flex flex-col ">
                        <input className="p-3 flex text-black w-full rounded-md" type="email" placeholder="Enter your Email" />
                        <button className="bg-[#00df9a] border rounded-md my-4 md:my-6 py-3 w-[200px] md:w-[250px] text-black font-medium border-[#000300]  md:text-2xl text-xl ">
                            Notify ME
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter