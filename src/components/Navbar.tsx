//import React, { useState } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Luce-Quintet-Logo.png';


const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const location = useLocation();


 const navItems = [
   { path: '/', label: 'Welcome' },
   { path: '/about', label: 'About Musicians' },
   { path: '/gallery', label: 'Photo Gallery' },
   { path: '/contact', label: 'Contact Us' },
 ];


 return (
   <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/20">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-between items-center h-16">
         {/* Logo */}
         <Link to="/" className="flex items-center space-x-2 group">
           <img src={logo} alt="Luce Quintet Logo" className="h-12 w-12 object-contain" />
           <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">
             Luce Quintet
           </span>
         </Link>


         {/* Desktop Navigation */}
         <div className="hidden md:flex space-x-8">
           {navItems.map((item) => (
             <Link
 key={item.path}
               to={item.path}
               className={`px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/20 ${
                 location.pathname === item.path
                   ? 'bg-white/20 text-amber-300'
                   : 'text-white hover:text-amber-300'
               }`}
             >
               {item.label}
             </Link>
           ))}
         </div>


         {/* Mobile menu button */}
         <div className="md:hidden">
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
           >
             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
         </div>
       </div>


       {/* Mobile Navigation */}
       {isOpen && (
         <div className="md:hidden mt-2 pb-4">
           {navItems.map((item) => (
             <Link
               key={item.path}
               to={item.path}
               onClick={() => setIsOpen(false)}
               className={`block px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/20 ${
                 location.pathname === item.path
                   ? 'bg-white/20 text-amber-300'
                   : 'text-white hover:text-amber-300'
               }`}
             >
               {item.label}
 </Link>
           ))}
         </div>
       )}
     </div>
   </nav>
 );
};


export default Navbar;
