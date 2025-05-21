import React from "react";
import { Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Milestones from "./Milestones";
import achievement1 from "../assets/wImages/achievement1.png";
import achievement2 from "../assets/wImages/achievement2.png";

const achievementData = [
  {
    title: "STEM Awards – Best Tech Fest Organiser 2018",
    description:
      "Awarded for outstanding contributions in organizing tech fests that promoted awareness and education among school and college students in Automation & Robotics.",
    image: achievement1,
  },
  {
    title: "Winner – World Robotics Championship 2017",
    description:
      "Secured 2nd place in the Innovative Projects category at the World Robotics Championship, showcasing creative engineering solutions.",
    image: achievement2,
  },
];

const Achievements = () => {
  return (
    <>
      <section
        className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050C2A] to-[#0D1B42] text-white py-20 px-6 lg:px-20"
        id="achievements"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {/* Glowing Background Elements */}
        <div className="absolute w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full top-20 right-10 animate-pulse -z-10" />
        <div className="absolute w-72 h-72 bg-yellow-300/10 blur-3xl rounded-full bottom-20 left-20 animate-ping -z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />

        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center mb-12 bg-gradient-to-r from-white via-yellow-300 to-orange-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-white">Achievements</span>
          </motion.h1>

          <motion.p
            className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A glimpse of our excellence in robotics and innovation through
            national and international recognitions.
          </motion.p>

          {achievementData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mb-24 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Card */}
              <motion.div
                className="w-full lg:w-1/2 bg-white/10 rounded-2xl shadow-lg p-8 backdrop-blur-md border-l-4 border-yellow-400"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Image Card */}
              <motion.div
                className="w-full lg:w-1/2 relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative z-10 bg-white/10 p-3 rounded-xl shadow-xl backdrop-blur-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

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

      <div
        data-aos="fade-right"
        className="hover:scale-105 transition-transform duration-500"
      >
        <Milestones></Milestones>
      </div>
    </>
  );
};

export default Achievements;
