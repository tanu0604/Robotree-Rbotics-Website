"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Sample testimonial data - replace with your actual data
const testimonials = [
  {
    id: 1,
    name: " NIT, Arunachal Pradesh ",
    image: "/placeholder.svg",
    content:
      "The 7-day Robotics and Automation workshop conducted by Robotree Robotics LLP at NIT Arunachal Pradesh was an incredible success. The workshop provided our students with a solid foundation in robotics, hands-on learning, and advanced automation concepts. The trainers were highly knowledgeable, engaging, and ensured each student grasped complex ideas effectively. Our students left inspired, motivated, and eager to explore further in the field of robotics. This workshop was a transformative experience that we highly recommend for any institution looking to enhance their students' technical skills and innovation capacity!",
  },
  {
    id: 2,
    name: " DAV Model School",
    role: "Principle",
    image: "/placeholder.svg",
    content:
      " Robotree Robotics LLP conducted an exceptional Robotics and Automation workshop at DAV Model School, Asansol, that truly inspired both our students and faculty. The workshop was thoughtfully designed, blending hands-on activities with foundational knowledge, and provided our students with a clear pathway to understand robotics concepts and real-worldapplications. The trainers were not only experts in their field but also knew how to spark curiosity and engage each student, regardless of their skill level. We witnessed students collaborate, innovate, and develop problem-solving skills that go beyond the classroom. This workshop has ignited a passion for technology in our students, and we look forward to more such enriching sessions with Robotree Robotics LLP!",
  },
  {
    id: 3,
    name: "JNV  Dakshin Dinajpur",
    role: "Principle",
    year: "2016",
    image: "/placeholder.svg",
    content:
      " The robotics workshop exceeded our expectations. The hands-on sessions were well-organized, and students gained valuable skills in building and Programming robots. They’re now more excited than ever about technology and STEM careers. Highly recommended!",
  },
  {
    id: 4,
    name: "JNV Roing, Arunachal Pradesh",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "The cyber security workshop was a game-changer for our students. They learned how to stay safe online and understand real-world applications of cybersecurity. The trainers were knowledgeable, and the curriculum was perfectly suited to the students’ level. A 5 star experience",
  },
  {
    id: 5,
    name: "JNV  Mon, Nagaland",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "Robotree Robotics LLP delivered a fantastic workshop for our senior students. They are equipped with essential skills to manage and perform responsibly and creatively. The training was interactive and full of practical insights. Thank you!",
  },
  {
    id: 6,
    name: "JNV  Anini",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      " The workshop on Robotics, Drones, and 3D Printing was highly impactful and well-received by the students. It provided excellent hands-on exposure and inspired innovation. We appreciate the team’s effort in delivering such a valuable session",
  },
  {
    id: 7,
    name: "JNV Purba Medinipur",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "  The Cyber Security workshop was truly transformative for our students. It equipped them with essential knowledge on online safety and gave them a clear understanding of real-life cybersecurity practices. The trainers were experts in the field, and the content was thoughtfully tailored to the students' grasp. An outstanding and enriching experience!",
  },
  {
    id: 8,
    name: "JNV  Barpeta , Assam",
    role: "Principal",
    image: "/placeholder.svg",
    content:
      "  The 15-day Robotics training was highly beneficial for our students. It enhanced their practical skills, sparked creativity, and provided valuable hands-on learning. We thank the team for this excellent initiative!",
  },
 
]

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + visibleCount >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, testimonials.length - visibleCount) : prevIndex - 1))
  }

  // Get current visible testimonials
  const visibleTestimonials = () => {
    const endIndex = Math.min(activeIndex + visibleCount, testimonials.length)
    return testimonials.slice(activeIndex, endIndex)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050C2A] to-[#0D1B42] text-white py-16 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-400 to-purple-400 text-transparent bg-clip-text">
            What Our Alumni Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from our former students about their experiences and how their education shaped their futures.
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
            <div className="flex gap-6 transition-all duration-500 ease-in-out">
              {visibleTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-700/30"
                  style={{
                    transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  <div className="relative mb-6">
                    <Quote className="absolute text-blue-400/30 w-12 h-12" />
                  </div>

                  <p className="text-gray-200 mb-6 relative z-10">"{testimonial.content}"</p>

                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xl font-bold text-white">{testimonial.name.charAt(0)}</span>
                      )}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      
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
          {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index * visibleCount)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index * visibleCount === activeIndex ? "bg-blue-400 w-6" : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials;
