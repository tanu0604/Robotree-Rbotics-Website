"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "NIT, Arunachal Pradesh",
    image: "/placeholder.svg",
    content:
      "The 7-day Robotics and Automation workshop conducted by Robotree Robotics LLP at NIT Arunachal Pradesh was an incredible success...",
  },
  {
    id: 2,
    name: "DAV Model School",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "Robotree Robotics LLP conducted an exceptional Robotics and Automation workshop at DAV Model School, Asansol...",
  },
  {
    id: 3,
    name: "JNV Dakshin Dinajpur",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "The robotics workshop exceeded our expectations. The hands-on sessions were well-organized...",
  },
  {
    id: 4,
    name: "JNV Roing, Arunachal Pradesh",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "The cyber security workshop was a game-changer for our students...",
  },
  {
    id: 5,
    name: "JNV Mon, Nagaland",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "Robotree Robotics LLP delivered a fantastic workshop for our senior students...",
  },
  {
    id: 6,
    name: "JNV Anini",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "The workshop on Robotics, Drones, and 3D Printing was highly impactful...",
  },
  {
    id: 7,
    name: "JNV Purba Medinipur",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "The Cyber Security workshop was truly transformative for our students...",
  },
  {
    id: 8,
    name: "JNV Barpeta, Assam",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "The 15-day Robotics training was highly beneficial for our students...",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + visibleCount >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, testimonials.length - visibleCount)
        : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + visibleCount
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050C2A] to-[#0D1B42] text-white py-16 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-400 to-purple-400 text-transparent bg-clip-text">
            What Our Alumni Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from our former students about their experiences and how their
            education shaped their futures.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600/80 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transform -translate-x-1/2 md:translate-x-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600/80 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transform translate-x-1/2 md:translate-x-0"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden px-8">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${(activeIndex / testimonials.length) * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-700/30"
                >
                  <div className="relative mb-6">
                    <Quote className="absolute text-blue-400/30 w-12 h-12" />
                  </div>

                  <p className="text-gray-200 mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full -mr-10 -mb-10 z-0"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({
            length: Math.ceil(testimonials.length / visibleCount),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index * visibleCount)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index * visibleCount === activeIndex
                  ? "bg-blue-400 w-6"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
