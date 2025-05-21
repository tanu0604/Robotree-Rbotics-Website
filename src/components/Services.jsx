"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import image from "../assets/wImages/services.jpg";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050C2A] to-[#0D1B42] text-white py-20 px-6 lg:px-20"
      id="services"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Glowing Background Elements */}
      <div className="absolute w-96 h-96 bg-purple-500/30 blur-3xl rounded-full top-20 right-10 animate-pulse -z-10" />
      <div className="absolute w-72 h-72 bg-pink-400/20 blur-3xl rounded-full bottom-20 left-20 animate-ping -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center mb-12 bg-gradient-to-r from-white via-cyan-400 to-purple-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Services</span> We Provide
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Image section */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 bg-white/10 p-3 rounded-xl shadow-xl backdrop-blur-md">
              <img
                src={image}
                alt="Our Services"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/10 rounded-2xl shadow-lg p-8 backdrop-blur-md border-l-4 border-cyan-400">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                We offer a wide range of services designed to inspire, educate,
                and empower the next generation of innovators. From interactive
                workshops to state-of-the-art lab setups, we ensure students
                experience the future today.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Our services include:
              </h3>
              <ul className="space-y-3">
                {[
                  "Workshops and Championships",
                  "Lab Setup (STEM/ATL) and Exhibitions",
                  "Training and Internship Programs",
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-white/10 rounded-lg shadow-sm backdrop-blur-md"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1" />
                    <span className="text-gray-200">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid Pattern Styling */}
      <style>
        {`
          .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}
      </style>
    </section>
  );
};

export default Service;
