import React from "react"
import Laptop from "../assets/laptop.jpg"


const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
                <img className="mx-auto w-[500px] py-3 " src={Laptop} alt="Laptop" />
                <div>
                    <p className="text-[#00df9a] uppercase md:pt-48 font-bold">Data Analytics Dashboard</p>
                    <h1 className="font-bold text-2xl md:text-3xl mb-2 md:mb-4">Manage Data Analytics Centrally</h1>
                    <p>Centralized data analytics streamlines data analysis by integrating information from various sources into a single platform. It promotes unified insights, efficient resource utilization, and better data governance. This approach enables faster decision-making and deeper insights by uncovering patterns across departments. However, challenges like scalability and integration must be carefully managed for successful implementation.</p>
                    <button className="text-[#00df9a] flex justify-items-center justify-center border rounded-md my-2 mx-auto md:mx-0 md:my-4 py-3 w-[200px] md:w-[250px] bg-black font-medium border-[#000300]  md:text-3xl text-2xl hover:bg-[#00df9a] hover:text-black hover:border-[#00df9a]">Get Started  </button>
                </div>
            </div>
        </div>
    )
}

export default Analytics