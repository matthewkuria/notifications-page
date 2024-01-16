import React from "react";

export default function Notification(){
    return(
        <section className="">
            <div className="">
               <img src="../assets/images/avatar-angela-gray" alt="" />
            </div>
            <div className="">
                <p>Mark Webber reacted to your recent post <span>My first tournament today!</span></p>
                <p className="text-gray-500"> 1m ago</p>
            </div>
        </section>
    )
}