import React, { useEffect } from "react";
import image from "../assets/wImages/whyChoose.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import the AOS CSS

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // If true, animations will only trigger once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050C2A] to-[#0D1B42] text-white p-10">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-purple-500/30 blur-3xl rounded-full top-20 right-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-pink-400/20 blur-3xl rounded-full bottom-20 left-20 animate-ping" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
        {/* Left Side Text */}
        <div
          className="w-full md:w-1/2 space-y-6"
          data-aos="fade-left" // Apply fade animation on scroll
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Why <span className="text-blue-400">Choose</span> Us
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            Blending passion, technology, and vision to empower the next
            generation of innovators.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl text-white font-semibold hover:scale-105 transition-transform duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-right" // Apply fade animation on scroll with delay
          data-aos-delay="200"
        >
          <div className="relative w-[300px] md:w-[350px] lg:w-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-30 scale-110" />
            <img
              src={image}
              alt="Why Choose Us"
              className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Sections below */}
      <div className="space-y-16">
        <div className="hover:scale-105 transition-transform duration-500">
          <h2 className="text-2xl font-semibold text-white" data-aos="fade-up">
            Our Approach
          </h2>
          <p
            className="text-lg text-gray-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We provide hands-on learning experiences, mentorship from experts,
            and a curriculum tailored to meet the demands of the tech industry.
          </p>
        </div>

        <div className="hover:scale-105 transition-transform duration-500">
          <h2 className="text-2xl font-semibold text-white" data-aos="fade-up">
            What We Offer
          </h2>
          <ul
            className="list-disc pl-5 space-y-3 text-lg text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li data-aos="fade-up" data-aos-delay="300">
              Robotics Training
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              Futuristic Tech Development
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              Industry Collaborations
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              Personalized Mentorship
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
