import { motion } from 'framer-motion';
import { GraduationCap, FlaskRound } from 'lucide-react';
import { Education } from '@/lib/types';

const educationItems: Education[] = [
  {
    degree: "Bachelor's in Computer Applications",
    institution: "Jain College, Jamshedpur",
    period: "2016 - 2019"
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Kerala Public School, Jamshedpur",
    period: "2015 - 2016"
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-8 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-16">Education</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg w-full md:w-[45%] transform hover:scale-105 transition-all duration-300 border border-gray-700"
            >
              <div className="mb-4">
                {index === 0 ? (
                  <GraduationCap className="h-10 w-10 text-indigo-500 mx-auto" />
                ) : (
                  <FlaskRound className="h-10 w-10 text-indigo-500 mx-auto" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
              <p className="text-gray-400">{item.institution}</p>
              <p className="text-gray-500 mt-2">{item.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
