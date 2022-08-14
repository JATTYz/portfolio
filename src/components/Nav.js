import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import {AiFillLinkedin} from 'react-icons/ai'


const Nav = () => {
 
  return (
    <nav className="grid md:grid-cols-3 my-3">
        <div className="flex-1 justify-between">
     <ul className="flex justify-between mx-5">
       <li className="mx-3" ><button >Home</button></li>
        <li className="mx-3">AboutMe</li>
        <li className="mx-3">Projects</li>
        <li className="mx-3">Contact</li>
    </ul>
     </div>
    
     <div className= " text-center hidden md:block">
         {/* <h1>A</h1> */}
     </div>

     <div className= "hidden md:block ">      
     <ul className="flex justify-end">
         <a href="https://github.com/JATTYz" target="blank"><li className="px-1"><GoMarkGithub size="25"/> </li></a>
         <a href="https://www.linkedin.com/in/jaturon-tepjuk-310b94205/" target="blank"><li className="px-5"><AiFillLinkedin size="25"/></li></a>
     </ul> 
     </div> 
    </nav>
  
  )
}

export default Nav