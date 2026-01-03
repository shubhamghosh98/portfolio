import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { FaDownload } from 'react-icons/fa';
import resume from "@/assets/resume.pdf"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/80 backdrop-blur-md border-gray-800' : 'bg-transparent border-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="cursive-font text-3xl">Shubham Ghosh</span><span className="text-indigo-500">.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                className="text-gray-300 hover:text-indigo-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
            {/* Resume Download Button */}
            <a 
              href={resume} target="_blank" rel="noopener noreferrer"
              download
              className="hidden md:flex items-center text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full transition-colors"
            >
              <span>Resume</span>
              <FaDownload className="ml-2 h-4 w-4" />
            </a>
          </nav>
          
          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-400 hover:text-indigo-500 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 py-4">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="text-gray-300 hover:text-indigo-500 transition-colors py-2 px-4"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              ))}
              {/* Resume Download Button for Mobile */}
              <a 
                href={resume}
                download
                className="flex items-center text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-3 rounded-full transition-colors mx-4 w-max"
                onClick={closeMenu}
              >
                <span>Download Resume</span>
                <FaDownload className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}