"use client";
import { motion } from "framer-motion";
import aboutImg from "../assets/wImages/about.png";
import { CheckCircle, Quote, Zap } from "lucide-react";
import WhyChooseUs from "./WhyChooseUs";
import FutureRobotics from "./FutureRobotics";

const About = () => {
  const features = [
    "Innovation-driven solutions for complex challenges",
    "Client-centered approach with personalized attention",
    "Commitment to excellence in every project",
    "Continuous learning and improvement",
  ];

  return (
    <>
      <section
        className="about-section relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1a1b2d] to-[#0D1B42] py-20 px-6 lg:px-20 text-white"
        id="about"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/20 blur-3xl rounded-full opacity-60 -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pink-400/20 blur-3xl rounded-full opacity-60 -z-10 animate-ping" />

        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center text-gradient bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text mb-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            About <span className="text-blue-600">Us</span>
          </h1>

          <p
            className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Dedicated to excellence and innovation in every project we undertake
          </p>

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full max-w-6xl mx-auto">
            {/* Image block */}
            <div
              className="w-full lg:w-1/2 relative"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-pink-400 rounded-tl-xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-pink-400 rounded-br-xl" />

              <div className="relative z-10 bg-white p-3 rounded-xl shadow-xl">
                <img
                  src={aboutImg}
                  alt="About Our Company"
                  className="rounded-lg w-full h-auto object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
                />

                {/* Stats overlay */}
                <div
                  className="absolute -bottom-8 -right-8 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="bg-blue-100 rounded-full p-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                    <p className="text-xl font-bold text-gray-900">5+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text block */}
            <div
              className="w-full lg:w-1/2 space-y-8"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div
                className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-500"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Quote className="w-10 h-10 text-blue-200 mb-4" />
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  Our mission is to ignite curiosity and inspire young minds
                  through immersive robotics and automation education. By
                  embedding cutting-edge technology into the learning
                  experience, we aim to nurture creativity, foster
                  problem-solving skills, and empower students to explore new
                  horizons, preparing them for the limitless possibilities of
                  the future.
                </p>
              </div>

              <div
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h3 className="text-2xl font-bold text-white">
                  Our Approach
                </h3>
                <ul className="space-y-3">
                  {features.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
                      data-aos="fade-up"
                      data-aos-delay={700 + index * 100}
                    >
                      <CheckCircle className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CSS for grid pattern */}
        <style>{`
          .bg-grid-pattern {
            background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.1) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.1) 1px,
                transparent 1px
              );
            background-size: 40px 40px;
          }
        `}</style>
      </section>

      <WhyChooseUs />
      <FutureRobotics />
    </>
  );
};

export default About;
