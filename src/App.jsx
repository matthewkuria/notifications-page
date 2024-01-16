import React from 'react'
import Notification from './components/Notification'
import data from './data'
import './App.css'

function App() {
  const notiFeeds = data.map(item =>{
    return(
      <Notification
             name ={item.name} 
             image= {item.img}
             action={item.action}
             actionDone={item.actionDone}
             lastSeen={item.lastSeen}
             isOnline={item.isOnline}
             MessageSent={item.privateMessage}
      />
    )
  })

  return (
    <>
     <section className="bg-white shadow-md h-full mt-4 w-full">
            <div className="flex justify-around ">
               <div className="flex">
               <h1 className='font-bold'>Notifications</h1> <span className='bg-blue-800 text-white rounded-md px-2 mx-4'>3</span>
               </div>
                <div className="ml-10 text-gray-500 hover:text-blue-800 ">
                <p>Mark All As Read</p>
                </div>
            </div>
            <div className="">
              {notiFeeds}
            </div>
          
     </section>
    </>
  )
}
export default App
