"use client";
import { motion } from "framer-motion";

import home from "../assets/wImages/home.png"
import Button from "./ui/Button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./About";
import Service from "./Services";
import Courses from "./Courses";
import GalleryHome from "./GalleryHome";
import Achievements from "./Achievements";
import Testimonials from "./Testimonials";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050C2A] to-[#0D1B42] text-white p-10">
        {/* Starry Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 bg-purple-500/30 blur-3xl rounded-full top-20 right-10 animate-pulse" />
          <div className="absolute w-72 h-72 bg-pink-400/20 blur-3xl rounded-full bottom-20 left-20 animate-ping" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Left Side Text */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Transforming Ideas Into Reality
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Revolutionizing education through futuristic tech, robotics, and
              digital transformation. Preparing the innovators of tomorrow 🌌.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl hover:scale-105 transition-transform"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-[300px] md:w-[350px] lg:w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-30 scale-110" />
              <img
                src={home}
                alt="Robot"
                className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />

              {/* Floating motion elements */}
              <motion.div
                className="absolute -right-4 top-1/4 bg-white/10 p-3 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <div className="w-10 h-10 bg-cyan-300 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-cyan-600 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-1/4 bg-white/10 p-3 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-purple-600 rounded-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sections below */}
       <div
        data-aos="fade-right"
        className="hover:scale-105 transition-transform duration-500"
      >
        <About />
      </div>

      <div
        data-aos="fade-right"
        className="hover:scale-105 transition-transform duration-500"
      >
        <Service />
      </div>
      <div
        data-aos="fade-right"
        className="hover:scale-105 transition-transform duration-500"
      >
        <Courses />
      </div>

        <div
        data-aos="fade-right"
        className="hover:scale-105 transition-transform duration-500"
      >
        <GalleryHome />
      </div>
     
        <div
        data-aos="fade-right"
        className="hover:scale-105 transition-transform duration-500"
      >
        <Achievements />
      </div>

        <div
        data-aos="fade-right"
        className="hover:scale-105 transition-transform duration-500"
      >
        <Testimonials />
      </div>
     
    </>
  );
};

export default Home;
