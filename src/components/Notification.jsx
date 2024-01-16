import React from "react";
export default function Notification(props){
    // dynamic set background color on condition of being online
    const sectStyle ={
        backgroundColor: props.isOnline ? 'hsl(210, 60%, 98%)' : 'white',
    }
    return(
        <>
        <section style={sectStyle} className="  flex items-center rounded-sm m-3 px-2 relative">
            <div className="">
               <img src={props.image} alt="" className="h-10 w-10  " />
            </div>
            <div className="m-5 relative ">
                <p><span className=" font-bold">{props.name}</span> {props.action} <span className=" hover:text-blue-800 ">{props.actionDone}</span>{props.isOnline && <div className="bg-red-600 h-2 w-2 rounded-full absolute right-0 top-1/2"></div>}</p>
                <p className="text-gray-500">{props.lastSeen}</p>
            </div>           
        </section>
        {
            props.MessageSent&&
             <div className="text-left ml-20 md:ml-80 md:mr-10 p-4 rounded-lg hover:bg-gray-300 border shadow-md w-3/4  md:w-1/2 ">
               <p>{props.MessageSent}</p>
            </div>
           }
        </>
    )
}