"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import robotics from "../assets/wImages/robotics.png";
import printing from "../assets/wImages/3d.png";
import drone from "../assets/wImages/drone.png";
import space from "../assets/wImages/space.png";
import iot from "../assets/wImages/iot.png";
import web from "../assets/wImages/web.png";
import social from "../assets/wImages/social.png"
import cyber from "../assets/wImages/cyber.png"
import advancedRobo from "../assets/wImages/advancedRobo.jpg"
import ai from "../assets/wImages/ai.jpg"
const courses = [
  {
    title:"Basic Robotics",
    description:
    "This course introduces students to the fundamentals of robotics, including robot building, basic Programming, and hands on activities to develop problem-solving and creativity.",
    image: robotics,
  },
  {
    title:"Advanced Robotics",
    description:
    "An in-depth course focused on complex robotics systems, advanced Programming, and automation, designed to take students's skills to the next level with real world applications",
    image: advancedRobo,
  },
  {
    title:"Social Media Marketing ",
    description:"This course teaches students how to strategically use social media platforms for marketing, content creation, audience engagement, and brand management, essential for modern businesses.",
    image: social,
  },
  {
    title:" Cyber Security & Programming",
    description:"Students learn the basics of cybersecurity, including protection against digital threats, and are introduced to Programming languages used for ethical hacking and data security.",
    image:cyber,
  },
  {
    title: "Web Development",
    description:
      "A comprehensive course covering website design, front-end and back-end development, and user experience (UX), equipping students with the skills to build and manage professional websites.",
    image: web,
  },
  {
    title: "Space Technology",
    description:
      "This course offers insights into the science and engineering behind space exploration, covering topics like satellite technology, space missions, and rocket science.",
    image: space,
  },
  {
    title: "Drone Technology",
    description:
      "Students explore the growing field of drones, learning to design, build, and operate drones for various applications, including surveillance, photography, and delivery.",
    image: drone,
  },
  {
    title: "3D Printing and Design",
    description:
      "This course covers the fundamentals of 3D modeling and printing, allowing students to create digital designs and bring them to life through 3D printers for real-world use.",
    image: printing,
  },
  {
    title: "Artificial Intelligence (AI)",
    description:
      "An introduction to the world of AI, where students learn about machine learning, neural networks, and how AI is revolutionizing industries by automating processes and decision-making.",
    image: ai,
  },
  {
    title: "Internet of Things (IOT)",
    description:
      "Students learn how everyday devices are connected through the internet, allowing for smart homes, cities, and industries, and they explore how to build and manage IoT systems.",
    image: iot,
  },
];

const Courses = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);

    const cardWidth = 320;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(newIndex, courses.length - 1));
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();

      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 320;
    const currentScroll = scrollContainerRef.current.scrollLeft;

    scrollContainerRef.current.scrollTo({
      left:
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050C2A] to-[#0D1B42] text-white py-20 px-6 lg:px-20"
      id="courses"
    >
      {/* Glowing Background Elements */}
      <div className="absolute w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full top-20 right-10 animate-pulse -z-10" />
      <div className="absolute w-72 h-72 bg-yellow-300/10 blur-3xl rounded-full bottom-20 left-20 animate-ping -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center mb-12 bg-gradient-to-r from-white via-yellow-300 to-orange-400 text-transparent bg-clip-text">
            Our{" "}
            <span className="text-white relative">
              Courses
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded animate-pulse"></span>
            </span>
          </h1>
        </div>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          Explore a variety of courses designed to empower and inspire students
          to excel in the fields of technology and innovation.
        </p>

        {/* Navigation dots */}
        <div className="flex justify-center mb-8">
          {courses.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
                index === activeIndex ? "bg-yellow-400 w-6" : "bg-gray-300"
              }`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: index * 320,
                    behavior: "smooth",
                  });
                }
              }}
              aria-label={`View course ${index + 1}`}
            />
          ))}
        </div>

        {/* Cards and Arrows */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-yellow-400 transition-all duration-300 ${
              showLeftArrow
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-10 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg text-yellow-400 transition-all duration-300 ${
              showRightArrow
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll gap-8 pb-12 pt-4 px-4 hide-scrollbar"
            style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl shadow-lg flex-shrink-0 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl backdrop-blur-md border-l-4 border-yellow-400"
                style={{
                  minWidth: "280px",
                  width: "320px",
                  scrollSnapAlign: "center",
                }}
              >
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-48 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="relative">
                 
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Courses;
