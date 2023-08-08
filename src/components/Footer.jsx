import React from "react"
import {
    FaInstagramSquare,
    FaDribbbleSquare,
    FaTwitterSquare,
    FaFacebookSquare,
    FaGithubSquare
} from "react-icons/fa"
const Footer = () => {
    return (
        <div className="bg-[#000300] w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-slate-500 opacity-90 max-w-[1260px]">
            <div>
                <h1 className="text-[#00df9a] text-3xl font-bold">REACT</h1>
                <p className="py-4">
                    Centralized data analytics integrates diverse sources into one platform for unified insights, efficient resource use, and improved governance. It accelerates decisions, reveals cross-departmental patterns, but demands careful scalability and integration handling for success.</p>
                <div className="flex md:w-[75%]">
                    <FaFacebookSquare size={40} />
                    <FaInstagramSquare size={40} />
                    <FaTwitterSquare size={40} />
                    <FaGithubSquare size={40} />
                    <FaDribbbleSquare size={40} />
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between lg:mt-6 ">
                <div>
                    <h6 className="opacity-80 font-medium md:text-lg">Solutions</h6>
                    <ul>
                        <li className="my-2 text-sm md:text-base">Analytics</li>
                        <li className="my-2 text-sm md:text-base">Marketing</li>
                        <li className="my-2 text-sm md:text-base">Commerce</li>
                        <li className="my-2 text-sm md:text-base">Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className="opacity-80 font-medium md:text-lg">Support</h6>
                    <ul>
                        <li className="my-2 text-sm md:text-base">Pricing</li>
                        <li className="my-2 text-sm md:text-base">Documentation</li>
                        <li className="my-2 text-sm md:text-base">Guides</li>
                        <li className="my-2 text-sm md:text-base">API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="opacity-80 font-medium md:text-lg">Company</h6>
                    <ul>
                        <li className="my-2 text-sm md:text-base">About</li>
                        <li className="my-2 text-sm md:text-base">Blogs</li>
                        <li className="my-2 text-sm md:text-base">Jobs</li>
                        <li className="my-2 text-sm md:text-base">Press</li>
                    </ul>
                </div>
                <div>
                    <h6 className="opacity-80 font-medium md:text-lg">Legal</h6>
                    <ul>
                        <li className="my-2 text-sm md:text-base">Claims</li>
                        <li className="my-2 text-sm md:text-base">Policy</li>
                        <li className="my-2 text-sm md:text-base">Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer