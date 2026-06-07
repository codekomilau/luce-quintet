//import React from 'react';
import { Instagram, Youtube } from 'lucide-react';


const Footer = () => {
 return (
   <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 py-8">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex flex-col md:flex-row justify-between items-center">
         <div className="text-center md:text-left mb-4 md:mb-0">
           <p className="text-lg font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">The Luce Quintet</p>
           <p className="text-white/80">Cultivating joy and community through music</p>
         </div>
        
         <div className="flex space-x-6">
           <a
             href="https://www.instagram.com/lucequintet?igsh=d3FoZ3d3eGV6dWVs"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-transform duration-300"
           >
 <Instagram className="w-6 h-6 text-white" />
           </a>
           <a
             href="https://www.youtube.com/@LuceQuintet"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-red-600 p-3 rounded-full hover:scale-110 transition-transform duration-300"
           >
             <Youtube className="w-6 h-6 text-white" />
           </a>
         </div>
       </div>
      
       <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
         <p>&copy; 2025 The Luce Quintet. All rights reserved.</p>
       </div>
     </div>
   </footer>
 );
};


export default Footer;
