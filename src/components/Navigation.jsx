import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/wImages/logo.png";

const navItems = [
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

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-gradient-to-r from-blue-300 to-blue-400 shadow-md" : "bg-gradient-to-r from-blue-300 to-blue-400"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 text-white text-xl font-bold"
          >
            <img src={logo} alt="Logo" className="w-28 mt-1.5 p-3" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <motion.button
                      className="text-lg font-medium text-white hover:text-gray-200 flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                      <ChevronDown className="ml-2" size={16} />
                    </motion.button>
                    <div className="absolute left-0 mt-2 w-48 hidden group-hover:block bg-gradient-to-r from-blue-300 to-blue-400 border border-blue-500 rounded-md shadow-md">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-blue-500"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="text-lg font-medium text-white hover:text-gray-200"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500"
            aria-label="Main menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-gradient-to-r from-blue-300 to-blue-400 border-t border-blue-500"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <div className="space-y-1">
                      <span
                        className="block px-3 py-2 text-base font-medium text-white cursor-pointer"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.name ? null : item.name
                          )
                        }
                      >
                        {item.name}
                        <ChevronDown className="ml-2 inline" size={16} />
                      </span>
                      {openDropdown === item.name && (
                        <div className="space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-6 py-1 text-sm text-white hover:bg-blue-500"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
