import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const footerItems = [ 
  { name: "Home", href: "/" },
  { 
    name: "About", 
    subItems: [
      { name: "About", href: "/about" },
      { name: "Why Choose Us", href: "/whychooseus" },
      { name: "Future in Robotics", href: "/future" },
    ]
  },
  { name: "Services", href: "/services" },
  { name: "Courses", href: "/courses" },
  { name: "Gallery", href: "/gallery" },
  { name: "Achievements", href: "/achievements" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "YouTube", href: "https://youtube.com", icon: Youtube },
];

const contactInfo = [
  { 
    icon: Mail, 
    label: "Email", 
    value: "contact@robotree.in", 
    href: "mailto:contact@robotree.in" 
  },
  { 
    icon: Phone, 
    label: "Phone", 
    value: "7908932245", 
    href: "tel:+917908932245" 
  },
  { 
    icon: MapPin, 
    label: "Address", 
    value: "AJ4,Sector H, South Dhadka Rd, Vivekananda Nagar, Asansol,WB, India-713301", 
    href: "https://maps.google.com/?q=123+Innovation+Drive,+Tech+City,+TC+12345" 
  },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with desired options
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-[#0D1B42] to-[#050C2A] text-white pt-16 pb-8 px-4 sm:px-6 overflow-hidden max-w-full">
      {/* Glow Effects */}
      <div className="absolute w-80 h-80 bg-purple-400/20 blur-3xl rounded-full -top-10 left-10 animate-pulse z-0" />
      <div className="absolute w-64 h-64 bg-cyan-400/20 blur-3xl rounded-full bottom-0 right-10 animate-ping z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Branding and Contact */}
        <div className="space-y-8 lg:max-w-xs" data-aos="fade-up">
          {/* Branding */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              RoboTree
            </h2>
            <p className="text-sm text-gray-300 max-w-sm">
              Empowering the next generation through robotics, innovation, and digital learning.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-white font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400">{item.label}</span>
                      <a 
                        href={item.href} 
                        className="block text-sm text-gray-300 hover:text-purple-400 transition-colors duration-300"
                        target={item.icon === MapPin ? "_blank" : undefined}
                        rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-white font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-400 hover:to-cyan-400 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm text-gray-300" data-aos="fade-up" data-aos-delay="600">
          {footerItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-2">
                {item.name}
              </h3>
              <ul className="space-y-1">
                {item.subItems ? (
                  item.subItems.map((subItem, idx) => (
                    <li key={idx}>
                      <Link
                        to={subItem.href}
                        className="hover:text-purple-400 transition-colors duration-300"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link
                      to={item.href}
                      className="hover:text-purple-400 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-400 text-sm relative z-10" data-aos="fade-up" data-aos-delay="800">
        © {new Date().getFullYear()} RoboTree. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
