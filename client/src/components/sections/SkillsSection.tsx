import { motion } from 'framer-motion';
import { Shield, Code, BarChart3 } from 'lucide-react';

const skills = [
  "Web Application Security Testing",
  "Mobile App Security Testing",
  "API Security Testing",
  "Network Security Testing",
  "Bug Bounties",
  "Red Teaming"
];

export default function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section id="skills" className="py-20 px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in application security with expertise across various domains and technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Security Testing Card */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl border border-gray-700 transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-indigo-500 mb-4">
              <Shield className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Application Security Testing</h3>
            <p className="text-gray-400 mb-4">
              Expert in identifying vulnerabilities in web and mobile applications through manual and automated testing.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full transition-transform duration-300 hover:-translate-y-1">
                Web App Security
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full transition-transform duration-300 hover:-translate-y-1">
                API Security
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full transition-transform duration-300 hover:-translate-y-1">
                Mobile Security
              </span>
            </div>
          </motion.div>
          
          {/* Offensive Security Card */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl border border-gray-700 transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-indigo-500 mb-4">
              <Code className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Offensive Security</h3>
            <p className="text-gray-400 mb-4">
              Skilled in red teaming, penetration testing, and identifying potential attack vectors for organizations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full transition-transform duration-300 hover:-translate-y-1">
                Red Teaming
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full transition-transform duration-300 hover:-translate-y-1">
                Penetration Testing
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full transition-transform duration-300 hover:-translate-y-1">
                Bug Bounties
              </span>
            </div>
          </motion.div>
          
          {/* Security Assessment Card */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl border border-gray-700 transition-all duration-300 hover:-translate-y-2"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-indigo-500 mb-4">
              <BarChart3 className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Security Assessment</h3>
            <p className="text-gray-400 mb-4">
              Comprehensive evaluation of systems and networks to identify and address security vulnerabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full transition-transform duration-300 hover:-translate-y-1">
                Vulnerability Analysis
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full transition-transform duration-300 hover:-translate-y-1">
                Security Reviews
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full transition-transform duration-300 hover:-translate-y-1">
                Risk Assessment
              </span>
            </div>
          </motion.div>
        </div>
        
        {/* Skill Tags */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Technical Expertise</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-gray-800 border border-gray-700 rounded-xl px-5 py-3 text-gray-300 hover:bg-gray-700 transition duration-300 hover:-translate-y-1"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
