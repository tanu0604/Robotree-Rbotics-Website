import React from "react";
import futureImg from "../assets/wImages/future.jpg";

const FutureRobotics = () => {
  return (
    <>
      <section
        className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1a1b2d] to-[#0D1B42] py-20 px-6 lg:px-20 text-white"
        id="future-robotics"
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
            The Future of <span className="text-indigo-400">Robotics</span>
          </h1>

          <p
            className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            "The future of robotics isn't about replacing humans—it's about empowering them to achieve the unimaginable."
          </p>

          <div
            className="flex flex-col lg:flex-row-reverse items-center justify-between gap-16 w-full max-w-6xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Image section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-pink-400 rounded-tl-xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-pink-400 rounded-br-xl" />

              <div
                className="relative z-10 bg-white p-3 rounded-xl shadow-xl"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <img
                  src={futureImg}
                  alt="Future Robotics"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div
                className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-pink-500"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  The future of robotics for students is full of opportunities, with high demand in industries like manufacturing, healthcare, and space exploration. It offers diverse careers, combining skills in AI, programming, electronics, and mechanical design. Robotics encourages problem-solving, innovation, and interdisciplinary learning. Students can work on cutting-edge technologies, make a global impact, and even pursue entrepreneurial ventures. Robotics competitions and hands-on projects also provide valuable experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CSS for grid pattern */}
        <style>{`
          .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}</style>
      </section>
    </>
  );
};

export default FutureRobotics;
