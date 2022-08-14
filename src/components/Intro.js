import React from 'react'
import logo from '../assets/theWorld.gif'


const Intro = () => {
  
 
  return (
      <>
       <div className="min-h-full -mt-10 grid ipad:grid-cols-2  justify-items-center items-center sm:grid-cols-1">
          <div className="ipad:hidden" >
              <img src={logo} alt="world" className="w-40 h-40 mt-20 mb-10"/>
            </div>
            <div className="ml-3">
             <p className="text-5xl mb-2">Hi, I'M JATURON </p> 
             <p className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 animate-fade-in-down">A SOFTWARE DEVELOPER</p> <br/>
             <p className="">I am passionate about coding and programming.</p> 
             <p>I am always happy when building applications and <br/>try my best to deliver wonderful products.</p>
            </div>
            <div className="invisible ipad:visible">
              <img src={logo} alt="world"/>
            </div>
          </div>
      </>
  )

}

export default Intro