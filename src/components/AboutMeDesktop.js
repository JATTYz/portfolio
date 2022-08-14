import React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'
import {FaAws} from 'react-icons/fa'
import css from '../assets/techLogos/css.ico'
import django from '../assets/techLogos/django.ico'
import heroku from '../assets/techLogos/heroku.ico'
import html from '../assets/techLogos/html.ico'
import java from '../assets/techLogos/java.ico'
import javascript from '../assets/techLogos/javascript.ico'
import mongodb from '../assets/techLogos/mongodb.ico'
import node from '../assets/techLogos/node.ico'
import postgresql from '../assets/techLogos/postgresql.ico'
import python from '../assets/techLogos/python.ico'
import react from '../assets/techLogos/react.ico'
import tailwind from '../assets/techLogos/tailwind.ico'
import bootstrap from '../assets/techLogos/bootstrap.ico'
import springboot from '../assets/techLogos/spring.svg'

const AboutMeDesktop = () => {
  return (
      <>
         <ParallaxLayer offset={1} speed={1}>
           <div className="grid grid-cols-3">
          <div className="ml-10">
            <h1 className="text-2xl">Hello again!</h1> <br/>
            <h1 >My name is Jaturon (Jatty), I am a Master of IT student specialising in Software Development at Swinburne University Of Technology.</h1> 
            <h1 className="text-sm">Feb 2022 - Nov 2023 (Expected Graduation)</h1>
            <h1 >I am passionate about all kinds of technology and enjoy building things on the internet.</h1> 
          </div>
          <div>
          </div>
          <div className="grid  mt-52 mx-10">
            <h1 className="text-2xl mb-5">My favorite hobbies aside from coding</h1> 
            <h1 >- Listening to all kinds of music but Rock 'n' Roll is very good.
                </h1> 
            <h1>- Playing guitar which is a good therapy and enhance my creativity.</h1> 
            <h1>- Exercising to stay healthy and to get myself ready for another activity.</h1>
            </div>
          </div>
        
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1}>
          <div className="grid grid-cols-3">
          <div className="text-center">
            <h1 className="text-2xl -ml5">My Technical Skills</h1> 
          </div>
          <div>
            </div>
          <div className="">
          
         <div className="mb-5"> 
          <h1 className="mb-3">Languages:</h1 >
            <div className="flex ">
            <img className="mx-2" src={java} alt="gg" style={{width: 50, height: 50}}/> 
            <img className="mx-2" src={javascript} alt="gg" style={{width: 50, height: 50}}/> 
            <img className="mx-2" src={python} alt="gg" style={{width: 50, height: 50}}/> 
            </div>
            
            <div className="flex mt-5 ">
            <img className="mx-2" src={html} alt="gg" style={{width: 50, height: 50}}/> 
            <img className="mx-2" src={css} alt="gg" style={{width: 50, height: 50}}/> 

              </div>
         
         </div>

         <div className="mb-5"> 
            <h1 className="mb-5">Database:</h1 > 
            <div className="flex ">
            <img className="mx-2" src={postgresql} alt="gg" style={{width: 50, height: 50}}/> 
            <img className="mx-2" src={mongodb} alt="gg" style={{width: 50, height: 50}}/> 
            </div>
          </div>
          <div className="mb-5"> 
            <h1 className="mb-5">Frameworks:</h1 > 
            <div className="flex">
            <img className="mx-2" src={react} alt="gg" style={{width: 50, height: 50}}/>
            <img className="mx-2" src={springboot} alt="gg" style={{width: 50, height: 50,  color: 'green'}}/>
            <img className="mx-2" src={node} alt="gg" style={{width: 50, height: 50}}/>
            </div>

            <div className="flex mt-5">
            <img className="mx-2" src={django} alt="gg" style={{width: 50, height: 50}}/>

            <img className="mx-2" src={tailwind} alt="gg" style={{width: 50, height: 50}}/>
            <img className="mx-2" src={bootstrap} alt="gg" style={{width: 50, height: 50}}/>
              </div>
            </div>
            <div className="mb-5"> 
            <h1 className="mb-5">Others:</h1 > 
            <div className="flex">
            <FaAws className="mx-2" size="50"/>
            <img src={heroku} alt="gg" className="mx-2" style={{width: 50, height: 50}}/>
            </div>
            </div>
          </div>
          </div>
        </ParallaxLayer>
      </>
  )
}

export default AboutMeDesktop