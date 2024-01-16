import React from "react";
import Mark from "../images/avatar-mark-webber.webp"
export default function Notification(){
    return(
        <section className="bg-gray-100 mt-5 flex items-center rounded-sm m-6">
            <div className="">
               <img src={Mark} alt="" className=" m-3 md:m-2 md:h-10 px-2 md:px-0" />
            </div>
            <div className="m-5 relative ">
                <p>Mark Webber reacted to your recent post <span className=" hover:text-blue-800 ">My first tournament today!</span><div className="bg-red-600 h-2 w-2 rounded-full absolute right-0 top-1/2"></div></p>
                <p className="text-gray-500"> 1m ago</p>
            </div>
        </section>
    )
}