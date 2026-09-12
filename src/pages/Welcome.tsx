//import React from 'react';
import { Link } from 'react-router-dom';
//import { Music, Users, Globe, Heart } from 'lucide-react';
import { Music, Globe, Heart } from 'lucide-react';
import groupPhoto from '../assets/Luce-Quintet-Group-Photo.png';


const Welcome = () => {
 return (
   <div className="relative min-h-screen bg-white">
    
     {/* Hero Section */}
     <div className="relative pt-16 pb-1 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="relative bg-white rounded-3xl p-2 md:p-3 border border-gray-200 shadow-sm">
           <div className="text-center mb-1">
             <h1 className="text-3xl md:text-4xl font-bold mb-1">
               <span className="text-black">
                 The Luce Quintet
               </span>
             </h1>
             <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
               Cultivating joy and community through music by providing free, diverse performances to all age groups.
             </p>
           </div>

           <div className="mt-2 rounded-2xl border border-gray-200 relative group/photo mx-auto" style={{ width: '60%', overflow: 'hidden', transform: 'translateZ(0)' }}>
             {/* Dark overlay — heavier dim on hover */}
             <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/60 transition-all duration-500 pointer-events-none rounded-2xl z-10" />

             {/* Image + hotzones wrapper — hotzones are relative to the image */}
             <div className="relative" style={{ width: '136%', marginLeft: '-21%' }}>
               <img
                 src={groupPhoto}
                 alt="Luce Quintet Group Photo"
                 className="w-full block"
               />

               {/* Per-member hotzones */}
               {[
                 { name: "Soumyanil Jana",       instrument: "First Violin",   left: 14, width: 19 },
                 { name: "Siddarth Afzalpurkar", instrument: "Second Violin",  left: 31, width: 13 },
                 { name: "Ranvir Singh",          instrument: "Viola",          left: 41, width: 11 },
                 { name: "Ryan Babler",           instrument: "Cello",          left: 51, width: 14 },
                 { name: "Gautam Bharel",         instrument: "Double Bass",    left: 66, width: 27 },
               ].map(({ name, instrument, left, width }) => (
                 <Link
                   key={name}
                   to="/about"
                   state={{ member: name }}
                   className="absolute top-0 h-full group/member z-20 cursor-pointer transition-transform duration-300"
                   style={{ left: `${left}%`, width: `${width}%` }}
                 >
                   {/* Spotlight — cancels the dark overlay for this column */}
                   <div className="absolute inset-0 opacity-0 group-hover/member:opacity-100 transition-all duration-300 bg-white/15 rounded-sm z-20" />

                   {/* Pulsing amber glow border */}
                   <div className="absolute inset-0 opacity-0 group-hover/member:opacity-100 transition-all duration-300 rounded-sm z-20"
                     style={{ boxShadow: '0 0 0 2px rgba(251,191,36,0.8), 0 0 20px 4px rgba(251,191,36,0.3)' }}
                   />

                   {/* Zoom container */}
                   <div className="absolute inset-0 opacity-0 group-hover/member:opacity-100 transition-all duration-300 scale-100 group-hover/member:scale-105 z-20" />

                   {/* Slide-up name card */}
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover/member:opacity-100 group-hover/member:translate-y-0 transition-all duration-300 pointer-events-none z-30 w-full px-1">
                     <div className="bg-black/90 backdrop-blur-md text-white rounded-xl border border-amber-400/60 p-3 text-center shadow-lg shadow-amber-900/30">
                       <div className="text-amber-400 text-xs font-medium uppercase tracking-widest mb-1">{instrument}</div>
                       <div className="text-white text-sm font-bold">{name}</div>
                       <div className="mt-2 text-amber-400/70 text-xs flex items-center justify-center gap-1">
                         <span>View Profile</span>
                         <span>→</span>
                       </div>
                     </div>
                   </div>
                 </Link>
               ))}
             </div>
           </div>
         </div>
       </div>
     </div>


     {/* Mission Section */}
     <div className="relative pt-2 pb-6 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
           <h2 className="text-4xl font-bold text-center mb-12 text-black">
             Our Mission
           </h2>
          
           <div className="prose prose-lg prose-invert max-w-none">
             <div className="bg-gray-50 rounded-2xl p-8 mb-8 border border-gray-200">
               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Welcome Letter</h3>
               <p className="text-gray-700 leading-relaxed mb-6">
                 Welcome to The Luce Quintet's official website!
               </p>
               <p className="text-gray-700 leading-relaxed mb-6">
                 Founded by students of the Montgomery High School Orchestra, The Luce Quintet is a non-profit music group that offers free performances, primarily within the Somerset area. Our goal is to cultivate joy and community through music by providing free, diverse performances to all age groups.
               </p>
               <p className="text-gray-700 leading-relaxed mb-6">
                 On this website, you can learn more about our{' '}
                 <Link to="/about" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">quintet's musicians</Link>
                 , view{' '}
                 <Link to="/gallery" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">photos and videos</Link>
                 {' '}from past performances for all our concerts, and{' '}
                 <Link to="/contact" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">make your own inquiries</Link>
                 {' '}for us to play at your events or gatherings.
               </p>
               <p className="text-gray-700 leading-relaxed mb-6">
                 We hope you enjoy the love and passion for the music we play and that we see you soon at our future performances.
               </p>
             </div>


             <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                 <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Music className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-blue-700 mb-3">Quality Performances</h3>
                 <p className="text-gray-700">
                   Experience diverse musical styles including classical, film, and contemporary pieces from around the globe, all delivered with professional quality.
                 </p>
               </div>


               <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                 <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Globe className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-green-700 mb-3">Wide Availability</h3>
                 <p className="text-gray-700">
                   We perform at various venues including libraries, schools, retirement homes, and community centers to reach diverse audiences.
                 </p>
               </div>


               <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                 <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Heart className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-purple-700 mb-3">Community Impact</h3>
                 <p className="text-gray-700">
                   The Luce Quintet has performed to 300+ attendees in a total of 15+ hours of performances. This includes at school events, nursing homes, and libraries. We also played the intermission of an Atlantic Brass Band performance! In addition to performances, we've also hosted music-based workshops in our community.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};


export default Welcome;
