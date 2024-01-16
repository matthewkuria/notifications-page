import { useState } from 'react'
import Notification from './components/Notification'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section className="bg-white shadow-md h-full">
            <div className="flex justify-around ">
               <div className="">
               <h1 className='font-bold'>Notifications</h1>
               </div>
                <div className="ml-10 text-gray-500">
                <p>Mark All As Read</p>
                </div>
            </div>
            <div className="">
              <Notification />
            </div>
          
     </section>
    </>
  )
}
export default App
