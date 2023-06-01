import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {SiJavascript, SiReact, SiTailwindcss} from 'react-icons/si'
import { BsArrowUpRight } from "react-icons/bs";
import Img1 from '../assets/HookBank.png'
import Img2 from '../assets/Dado.png'
import Img3 from '../assets/calculator.jpg'


const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amou: 0.3}}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My lastest <br />
                work
              </h2>
              <p className="max-w-sm mb-16">
              Welcome to the extraordinary world of Diego Morin, a versatile and imaginative artist who skillfully navigates the realms of product design, photography  digital art.and  With a keen eye for detail and a relentless pursuit of innovation, Diego Morin crafts captivating visual narratives, immersive digital realms, and functional yet aesthetically pleasing products.
              </p>
              {/* <button className="btn btn-sm">View all projects</button> */}
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 flex  items-center gap-x-5 " >
                <span className="text-3xl text-white">HookBank</span>
                
                <SiReact/>
                <SiTailwindcss/>
              </div>
              {/* LINK */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                <a href="https://diegom30.github.io/HooBank/" 
                target="_blank"
                className="btn w-9 h-9  flex justify-center items-center">
                        <BsArrowUpRight/>
                      </a>
                  </div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amou: 0.3}}
           className="flex-1 flex flex-col gap-y-10 mt-auto">
            {/* image */}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">JAVASCRIPT</span>
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 flex  items-center gap-x-5 " >
                <span className="text-3xl text-white">DADO 3D</span>
                <SiJavascript className="text-yellow-300"/>
                </div>
                {/* LINK */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                <a href="https://diegom30.github.io/Dado-3D/" 
                target="_blank"
                className="btn w-9 h-9  flex justify-center items-center">
                        <BsArrowUpRight/>
                      </a>
                  </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">JAVASCRIPT</span>
              </div>
              {/* Title */}
              <div className="flex gap-x-5 items-center absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Calculator</span>
                <SiJavascript className="text-yellow-300"/>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-700 z-50">
                <a href="https://diegom30.github.io/calculator/" 
                target="_blank"
                className="btn w-9 h-9  flex justify-center items-center">
                        <BsArrowUpRight/>
                      </a>
                  </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
