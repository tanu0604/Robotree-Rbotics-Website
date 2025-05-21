import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const milestoneData = [
  {
    number: 7000,
    suffix: "+",
    label: "Students Trained",
  },
  {
    number: 50,
    suffix: "+",
    label: "Instituitons Visited",
  },
  {
    number: 100,
    suffix: "+",
    label: "Projects Made",
  },
];

const Milestones = () => {
  const [counts, setCounts] = useState(milestoneData.map(() => 0));

  useEffect(() => {
    const intervals = milestoneData.map((milestone, index) => {
      const increment = Math.ceil(milestone.number / 60);
      return setInterval(() => {
        setCounts((prevCounts) => {
          const updated = [...prevCounts];
          if (updated[index] < milestone.number) {
            updated[index] = Math.min(
              updated[index] + increment,
              milestone.number
            );
          }
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050C2A] to-[#0D1B42] text-white py-20 px-6 lg:px-20"
      id="milestones"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {/* Glowing Background Elements */}
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-20 right-10 animate-pulse -z-10" />
      <div className="absolute w-72 h-72 bg-blue-300/10 blur-3xl rounded-full bottom-20 left-20 animate-ping -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-cyan-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-white">Milestones</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {milestoneData.map((milestone, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-10 border-l-4 border-blue-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl font-bold text-cyan-400 mb-2">
                {counts[index]}
                {milestone.suffix}
              </div>
              <div className="text-lg font-medium text-gray-300">
                {milestone.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
  );
};

export default Milestones;
