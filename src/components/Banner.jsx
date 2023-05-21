import React, { Suspense } from "react";
import Image from "../assets/Avatar.png";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Banner = () => {
  return (
    <section
      className=" min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              DIEGO <span>MORIN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary 
          font-semibold uppercase leading-[1]"
            >
              <span className="mr-4"> I am a</span>
              <TypeAnimation
                sequence={[
                  "Programmer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Software Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I take pleasure in crafting enchanting digital experiences that
              captivate and delight users at every touchpoint. Let me bring your
              most innovative ideas to life!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" activeClass="active" smooth={true}>
                <button className="btn btn-lg"> Contact me</button>
              </Link>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-gradient btn-link cursor-pointer"
              >
                My portfolio
              </Link>
            </motion.div>
            {/* Social */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/Diegom30" target="_black">
                <FaGithub />
              </a>
              <a href="https://t.me/Diemr3" target="_black">
                <FaTelegram />
              </a>
              <a
                href="https://www.linkedin.com/in/diegomorin30/"
                target="_black"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[500px] h-[600px]"
          >
            <Canvas className="">
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.5}>
                  <MeshDistortMaterial
                    color="#3d1c56"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Suspense>
            </Canvas>

            <img className="object-contain absolute animation" src={Image} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
