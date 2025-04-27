import { motion } from 'framer-motion';
import { ShieldCheck } from 'phosphor-react';
import { Experience } from '@/lib/types';

const experiences: Experience[] = [
  {
    company: "Mastercard",
    position: "Vulnerability Analyst II",
    date: "January, 2024 - Present",
    tags: ["Penetration Testing"]
  },
  {
    company: "Bharti Airtel Limited",
    position: "Information Security Analyst",
    date: "August, 2022 - January, 2024",
    tags: ["Infosec"]
  },
  {
    company: "TATA CONSULTANCY SERVICES",
    position: "Application Security Engineer",
    date: "February, 2020 - August 2022",
    tags: ["AppSec"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building expertise in application security through roles at industry-leading organizations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-indigo-900/30 rounded-full mr-4">
                  <ShieldCheck size={24} weight="duotone" className="text-indigo-500" />
                </div>
                <h3 className="text-2xl font-semibold text-indigo-400">{exp.position}</h3>
              </div>
              <p className="text-lg font-medium text-white mb-2">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.date}</p>
              
              {exp.tags && exp.tags.length > 0 && (
                <div className="border-t border-gray-700 pt-4 mt-auto">
                  {exp.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-indigo-900/30 text-indigo-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
