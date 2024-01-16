import React from "react";
export default function Notification(props){
    return(
        <section className="bg-gray-100 mt-5 flex items-center rounded-sm m-6">
            <div className="">
               <img src={props.image} alt="" className=" m-3 md:m-2 md:h-10 px-2 md:px-0" />
            </div>
            <div className="m-5 relative ">
                <p><span className="hover:text-blue-700">{props.name}</span> {props.action} <span className=" hover:text-blue-800 ">{props.actionDone}</span>{props.isOnline && <div className="bg-red-600 h-2 w-2 rounded-full absolute right-0 top-1/2"></div>}</p>
                <p className="text-gray-500">{props.lastSeen}</p>
            </div>
        </section>
    )
}