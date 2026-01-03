import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaMedium, FaChevronDown } from 'react-icons/fa';
import profileImage from '../../assets/profile.jpg';
import resume from "@/assets/resume.pdf";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16 pb-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 via-black to-purple-900/40 opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Profile Picture */}
      <motion.a
        href="https://www.linkedin.com/in/shubhamghosh98/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 mb-8 block"
      >
        <img
          src={profileImage}
          alt="Shubham Ghosh"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg object-cover border-4 border-indigo-600 hover:scale-110 transition-transform duration-300"
        />
      </motion.a>
      
      {/* Text Info */}
      <div className="z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-2"
        >
          Hi, I'm Shubham Ghosh
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-3xl text-gray-400 mb-4"
        >
          Senior Application Security Engineer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-gray-400 mt-2 text-lg italic"
        >
          "Securing the digital world, one bug at a time."
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-gray-500 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Passionate about identifying and remediating vulnerabilities, strengthening cyber defenses, and making the internet a safer place. Senior Application Security Engineer at Barclays with hands-on expertise in web, mobile, and API penetration testing, secure code reviews, SAST and SCA implementation, and driving DevSecOps by integrating security into CI/CD pipelines.
        </motion.p>
         
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="flex justify-center space-x-6 mt-8 text-gray-400"
        >
          <a 
            href="https://www.linkedin.com/in/shubhamghosh98/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors text-2xl"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-7 w-7" />
          </a>
          <a 
            href="https://github.com/shubhamghosh98" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors text-2xl"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-7 w-7" />
          </a>
          <a 
            href="https://x.com/cyb3rn00b_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors text-2xl"
            aria-label="Twitter Profile"
          >
            <FaTwitter className="h-7 w-7" />
          </a>
          <a 
            href="https://ghoshshubham.medium.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors text-2xl"
            aria-label="Medium Blog"
          >
            <FaMedium className="h-7 w-7" />
          </a>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a 
            href="#contact" 
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors flex items-center"
          >
            Get in Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href={resume} target="_blank" rel="noopener noreferrer" 
            download
            className="px-6 py-3 border border-gray-700 hover:border-indigo-500 text-white font-medium rounded-full transition-colors flex items-center"
          >
            Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
        className="absolute bottom-10 animate-bounce text-gray-500 z-10"
      >
        <FaChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
