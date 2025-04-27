import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="cursive-font text-3xl">Shubham Ghosh</span><span className="text-indigo-500">.</span>
            </Link>
            <p className="text-gray-400 mt-2">Senior Application Security Engineer</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="#home" className="text-gray-300 hover:text-indigo-500 transition-colors">Home</a>
            <a href="#experience" className="text-gray-300 hover:text-indigo-500 transition-colors">Experience</a>
            <a href="#blog" className="text-gray-300 hover:text-indigo-500 transition-colors">Blog</a>
            <a href="#contact" className="text-gray-300 hover:text-indigo-500 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {currentYear} Shubham Ghosh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
