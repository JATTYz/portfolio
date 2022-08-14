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

const AboutMeMobile = () => {
  return (
    <>

        <ParallaxLayer offset={2.5} speed={0.5}>
          <div className="">
          <div className="text-center">
            <h1 className="text-3xl font-bold -ml5 ">My Technical Skills</h1> 
          </div>
          <div>
            </div>
          <div className="">
          
         <div className="my-5 text-center "> 
          <h1 className="mb-3">Languages:</h1 >
            <div className="flex justify-center">
            <img className="mx-2" src={java} alt="gg" style={{width: 50, height: 50}}/> 
            <img className="mx-2" src={javascript} alt="gg" style={{width: 50, height: 50}}/> 
            <img className="mx-2" src={python} alt="gg" style={{width: 50, height: 50}}/> 
            </div>
            
            <div className="flex mt-5 justify-center ">
            <img className="mx-2" src={html} alt="gg" style={{width: 50, height: 50}}/> 
            <img className="mx-2" src={css} alt="gg" style={{width: 50, height: 50}}/> 

              </div>
         
         </div>

         <div className="mb-5"> 
            <h1 className="mb-5 text-center">Database:</h1 > 
            <div className="flex justify-center">
            <img className="mx-2" src={postgresql} alt="gg" style={{width: 50, height: 50}}/> 
            <img className="mx-2" src={mongodb} alt="gg" style={{width: 50, height: 50}}/> 
            </div>
          </div>
          <div className="mb-5"> 
            <h1 className="mb-5 text-center">Frameworks:</h1 > 
            <div className="flex justify-center">
            <img className="mx-2" src={react} alt="gg" style={{width: 50, height: 50}}/>
            <img className="mx-2" src={springboot} alt="gg" style={{width: 50, height: 50,  color: 'green'}}/>
            <img className="mx-2" src={node} alt="gg" style={{width: 50, height: 50}}/>
            </div>

            <div className="flex mt-5 justify-center">
            <img className="mx-2" src={django} alt="gg" style={{width: 50, height: 50}}/>

            <img className="mx-2" src={tailwind} alt="gg" style={{width: 50, height: 50}}/>
            <img className="mx-2" src={bootstrap} alt="gg" style={{width: 50, height: 50}}/>
              </div>
            </div>
            <div className="mb-5"> 
            <h1 className="mb-5 text-center">Others:</h1 > 
            <div className="flex justify-center">
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

export default AboutMeMobile