import { motion } from 'framer-motion';
import { Medal } from 'phosphor-react';
import { Certification } from '@/lib/types';

const certifications: Certification[] = [
  {
    title: "Certified Ethical Hacker V11 (CEH)",
    issuer: "EC-Council",
    date: "June, 2022",
    certNo: "ECC1592763840",
    tags: ["Ethical Hacking"]
  },
  {
    title: "Certified Ethical Hacker - Practical",
    issuer: "EC-Council",
    date: "Jan, 2022",
    certNo: "ECC8369521704",
    tags: ["Practical Skills"]
  },
  {
    title: "GIAC Certified Penetration Tester (GPEN)",
    issuer: "SANS Institute",
    date: "Nov, 2024",
    certNo: "19776",
    tags: ["Penetration Testing"]
  },
  {
    title: "Microsoft Azure Fundamentals AZ-900",
    issuer: "Microsoft",
    date: "Oct, 2021",
    certNo: "H994-1292",
    tags: ["Cloud Security"]
  },
  {
    title: "Microsoft Certified: Security, Compliance SC-900",
    issuer: "Microsoft",
    date: "Dec, 2022",
    certNo: "I522-0513",
    tags: ["Compliance"]
  },
  {
    title: "Certified AppSec Practitioner (CAP)",
    issuer: "The SecOps Group",
    date: "Jan, 2023",
    certNo: "6903913",
    tags: ["AppSec"]
  },
  {
    title: "Certified Red Team Professional (CRTP)",
    issuer: "Altered Security",
    date: "In Progress",
    certNo: "-",
    tags: ["Red Team"]
  },
  {
    title: "Best Ethical Hacker - 2020 & 2021",
    issuer: "TCS",
    date: "Secured top ranks in CTF contest",
    tags: ["Recognition"]
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional qualifications that demonstrate my expertise and commitment to cybersecurity.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 flex flex-col"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-indigo-900/30 rounded-full mr-3">
                  <Medal size={24} weight="duotone" className="text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="text-gray-400 text-sm mb-auto">
                <p className="mb-1">{cert.date}</p>
                {cert.certNo && (
                  <p className="text-xs text-gray-500">Certificate No: {cert.certNo}</p>
                )}
              </div>
              
              {cert.tags && cert.tags.length > 0 && (
                <div className="mt-4 border-t border-gray-700 pt-4">
                  {cert.tags.map((tag, tagIndex) => (
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
