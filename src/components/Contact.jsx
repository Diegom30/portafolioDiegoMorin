import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Map from "./Maps";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h383cim",
        "template_ey1wyx8",
        ref.current,
        "NboH3uHtZ34spL78w"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <section className="py-16 lg:section " id="contact">
      <motion.div
      variants={fadeIn("up", 1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amou: 0.3 }}
      className=" hidden lg:flex flex-1  absolute z-10  h-[750px] w-[100%] ">
              <Map />
            </motion.div>
      <div className="container mx-auto   ">
        <div className="flex flex-col lg:flex-row  ">
          {/* text */}
          
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amou: 0.3 }}
            className="flex-1 flex justify-start items-center  "
          >
            <div className="z-20 ">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb12 ">
                Let's Work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.div 
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amou: 0.3 }}
          className="flex-1 z-20">
            <form
              ref={ref}
              onSubmit={handleSubmit}
              className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            >
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your Name"
                name="name"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                placeholder="Your email"
                name="email"
              />

              <textarea
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                placeholder="Your message"
                name="message"
              ></textarea>
              <button type="submit" className="btn btn-lg">
                Send message
              </button>
              {success &&
                "Your messaje has been sent. We'll get back to you soon :) "}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
