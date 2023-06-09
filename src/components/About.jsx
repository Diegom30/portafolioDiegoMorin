import React from "react";
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import CV from '../assets/CV-frontend.pdf'
import {HiOutlineDownload} from 'react-icons/hi'

const About = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });

  return(
  <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen  "> 

          <motion.div 
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amou: 0.3}}
          className=" flex-1 h-[640px] hidden lg:flex bg-about bg-contain bg-no-repeat  mix-blend-lighten bg-center "
          ></motion.div>

          <motion.div
             variants={fadeIn('left', 0.5)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amou: 0.3}}
           className=" flex-1 ">
            <h2 className="h2 text-accent">About Me.</h2>
            <h3 className="h3 mb-4">
              I'm a Freelance Front-end Developer with over 3 years of
              experience.
            </h3>
            <p className="mb-6">
            Hello! I'm Diego Morin, a web designer/developer focused on creating great web experiences. Design and coding have been my passion since the days I started working with computers, but I found myself in web design/development since 2016. I enjoy creating beautifully designed, intuitive and functional websites.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  +
                  {InView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experiencie
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {InView ? <CountUp start={0} end={300} duration={5} /> : null}
                  
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects
                  <br /> Completed
                </div>
              </div>
              <div>
                
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                +
                  {InView ? <CountUp start={0} end={200} duration={6} /> : null}
                  
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
             <a href={CV}
             target="_black"
              className="btn btn-lg j flex items-center gap-4" >
              Download CV 
             <HiOutlineDownload className="h-[50px] w-[25px]"/>
             </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
