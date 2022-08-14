import { Parallax,ParallaxLayer,  } from '@react-spring/parallax';
import './App.css';
import Test from './components/Test';
import {useRef} from 'react'
import me from './assets/Me.png'
import webApi from './assets/API-Tracker.png'
import quizGame from './assets/QuizGame.png'
import { GoMarkGithub } from 'react-icons/go'
import {AiFillLinkedin, AiOutlineArrowUp} from 'react-icons/ai'
import { HiOutlineMail } from "react-icons/hi";
import { FaArrowCircleRight} from "react-icons/fa"
import NailShop from './assets/NailShop.png'
import AboutMeDesktop from './components/AboutMeDesktop';
import AboutMeMobile from './components/AboutMeMobile';
import Intro from './components/Intro';

function App() {
  const isDesktop = Test('(min-width: 960px)');
  
  const myRef = useRef(null);
  return (
   
    <div>

    <Parallax pages={ 7.1 } style={{ backgroundColor: 'black' }} ref={myRef}>

        <ParallaxLayer offset={0} speed={0} >
        <nav className="grid ipad:grid-cols-3 my-3">
        <div className="flex-1">
        <ul className="flex justify-between mx-5">
       <li className="mx-3 cursor-pointer" onClick={() => myRef.current.scrollTo(0)}> 
       <button class="transition duration-700 ease-in-out 
                       transform 
                       hover:-translate-y-1 hover:scale-150 
                       ">
            Home
        </button></li>
        <li className="mx-3 cursor-pointer" onClick={() => myRef.current.scrollTo(1)}>
        <button class="transition duration-700 ease-in-out 
                       transform 
                       hover:-translate-y-1 hover:scale-150 
                       ">
            AboutMe
        </button>
        </li>

        <li className="mx-3 cursor-pointer" onClick={() => myRef.current.scrollTo(3)}>
        <button class="transition duration-700 ease-in-out 
                       transform 
                       hover:-translate-y-1 hover:scale-150 
                       ">
            Projects
        </button></li>
        <li className="mx-3 cursor-pointer" onClick={() => myRef.current.scrollTo(7)}>
        <button class="transition duration-700 ease-in-out 
                       transform 
                       hover:-translate-y-1 hover:scale-150 
                       ">
            Contact
        </button></li>
    </ul>
     </div>
    
     <div className= "text-xs text-center hidden ipad:block">
         <a href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program" target="blank"><h1 className=" text-transparent text-sm bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">HELLO WORLD !</h1></a>
     </div>

     <div className= "hidden ipad:block ">      
     <ul className="flex justify-end">
         <a href="https://github.com/JATTYz" target="blank"><li className="px-1"><GoMarkGithub size="25"/> </li></a>
         <a href="https://www.linkedin.com/in/jaturon-tepjuk-310b94205/" target="blank"><li className="px-5"><AiFillLinkedin size="25"/></li></a>
     </ul> 
     </div> 
    </nav>
 
    <Intro  />
        </ParallaxLayer>
     

        {isDesktop ? 
         <ParallaxLayer offset={1} speed={0.5} sticky={{start: 1, end:2}} >
         <div className="grid justify-items-center">
           
           <h1 className="text-4xl font-bold">About Me</h1> 
           <img src={me} alt="myself" />
          
         </div>
       </ParallaxLayer> : <ParallaxLayer offset={1} speed={0.2}>
          <div className="grid justify-items-center">
            
            <h1 className="text-4xl font-bold ">About Me</h1> 
            <h1 className="text-2xl my-5">Hello again!</h1> 
            <h1 className="mx-16">My name is Jaturon, I am a Master of IT student specialising in Software Development at Swinburne University Of Technology.</h1> 
            <h1 className="mx-16 text-sm">Feb 2022 - Nov 2023 (Expected Graduation)</h1>
            <h1 className="mx-16">I am passionate about all kinds of technology and enjoy building things on the internet.</h1> 
          
            <img src={me} alt="myself" />
          
            <h1 className="text-2xl my-5 mx-16">My favorite hobbies aside from coding</h1> 
            <h1 className="mx-16">- Listening to all kinds of music but Rock 'n' Roll is very good. 
                </h1> 
            <h1 className="mx-16">- Playing guitar which is a good therapy and enhance my creativity.</h1> 
            <h1 className="mx-16">- Exercising to stay healthy and to get myself ready for another activity.</h1>
         
          </div>
          
        </ParallaxLayer>}

        {isDesktop ? <AboutMeDesktop /> : <AboutMeMobile />}
       
        <ParallaxLayer offset={3.2} speed={0.5} >
        <div className="flex-1">
            <h1 className="text-center text-4xl font-bold">INDUSTRY ORIENTED MINI-PROJECTS</h1> 
            <div className="grid bg-zinc-900 rounded-3xl mx-10 mt-5 ">
            <h1 className="justify-self-end pr-7 text-lg">Web App</h1>
            <h1 className="justify-self-end pr-5 font-bold text-2xl">API TRACKER</h1>
            <img src={webApi} alt="webApi" className="h-auto w-4/5 my-3 justify-self-center rounded-3xl" />
            <h1 className="justify-self-center pr-7 ">A web app to display real-time crypto currency infomation such as price, volumns, etc.</h1>
            <h1 className="justify-self-center pr-7">Built with React, Bootstrap and free APIs from https://coingecko.com</h1>
            <div className="flex justify-self-center my-3">
           <a href="https://github.com/JATTYz/react-api-tracker-demo" target="blank"> <GoMarkGithub size="40" className="mx-3" /></a>
            <a href="https://api-tracker-jaturon.herokuapp.com/" target="blank"><FaArrowCircleRight size="40" className="mx-3"/></a>
            </div>
              </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.2} speed={0.2}>
          <div >
          
            <div className="grid bg-zinc-900 rounded-3xl mx-10 mt-5 ">
            <h1 className="justify-self-end pr-7 text-lg">Web App</h1>
            <h1 className="justify-self-end pr-5 font-bold text-2xl">Quiz Platform</h1>
            <img src={quizGame} alt="quizGame" className="h-auto w-4/5 my-3 justify-self-center rounded-3xl" />
            <h1 className="justify-self-center pr-7">A full-stack web quiz game application that helps a school increase their engagement with students.</h1>
            <h1 className="justify-self-center pr-7">You can play using this username: Student passowrd: 1234</h1>
            <h1 className="justify-self-center pr-7">Built with Django and HTML, CSS, JS(Jquery) and Bootstrap</h1>
            <div className="flex justify-self-center my-3">
           <a href="https://github.com/JATTYz/Quiz-Application-Django-Project" target="blank" > <GoMarkGithub size="40" className="mx-3" />  </a>
            <a href="https://jattyz.pythonanywhere.com/" target="blank"><FaArrowCircleRight size="40" className="mx-3"/></a>
            </div>
              </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={5.2} speed={0.5}>
          <div >
          
            <div className="grid bg-zinc-900 rounded-3xl mx-10 mt-5 ">
            <h1 className="justify-self-end pr-7 text-lg">Web App</h1>
            <h1 className="justify-self-end pr-5 font-bold text-2xl">Nail Booking Service</h1>
            <img src={NailShop} alt="Nailshop" className="h-auto w-4/5 my-3 justify-self-center rounded-3xl" />
            <h1 className="justify-self-center">A demo full-stack web applicaiton which allow users to book a nail service</h1>
            <h1 className="justify-self-center">Built with React and SpringBoot and Postgresql</h1>
            <h1 className="justify-self-center">Due to this project is a demo, it is not deployed but you can run on you local machine with the source code</h1>
            <div className="flex justify-self-center my-3">
           <a href="https://github.com/JATTYz/full-stack-nail-shop-React-SpringBoot" target="blank"> <GoMarkGithub size="40" className="mx-3" /></a>
            </div>
              </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={6} speed={1} >
          <div className="text-center mt-10">
            <p className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">I cannot do all the good that the world needs.</p>
            <br/>
            <p className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">But the world needs all the good that I can do</p>
            <p>-Jana Stanfield-</p>
            <br/>
            <br/>
            <p className=" text-xl">I am always intested to talk about technology.</p>
            <p className=" text-lg">Feel free to have a chat and connect with me.</p>
            <div className="flex justify-center space-x-9 mt-5">  
             <a href="https://github.com/JATTYz" target="blank"><GoMarkGithub size="60" /></a>
             <a href="https://www.linkedin.com/in/jaturon-tepjuk-310b94205/" target="blank">  <AiFillLinkedin size="60" style={{ backgroundColor: 'blue' }}/></a>
             <a href="mailto:Jaturon.tepjuk@gmail.com"> <HiOutlineMail size="60"/></a>
            </div>

            <div onClick={() => myRef.current.scrollTo(0)} className="cursor-pointer flex-1 justify-center mt-20  "> 
          <AiOutlineArrowUp size="30" className="justify-center w-full animate-bounce"/>
          <h1 className="" >Back to main</h1>
          </div>
  
          </div>
         
        </ParallaxLayer>
    
      </Parallax> 

 
    </div>

  );
}

export default App;
