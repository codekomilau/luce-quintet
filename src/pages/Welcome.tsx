//import React from 'react';
import { Link } from 'react-router-dom';
import MusicalBackground from '../components/MusicalBackground';
//import { Music, Users, Globe, Heart } from 'lucide-react';
import { Music, Globe, Heart } from 'lucide-react';
import groupPhoto from '../assets/Luce-Quintet-Group-Photo.png';


const Welcome = () => {
 return (
   <div className="relative min-h-screen">
     <MusicalBackground />
    
     {/* Hero Section */}
     <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="relative bg-black/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
           <div className="text-center">
             <h1 className="text-5xl md:text-7xl font-bold mb-6">
               <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">
                 The Luce Quintet
               </span>
             </h1>
             <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
               Cultivating joy and community through music by providing free, diverse performances to all age groups.
             </p>
           </div>
          
           <div className="mt-12 rounded-2xl overflow-hidden border border-white/10 relative group/photo">
             <img
               src={groupPhoto}
               alt="Luce Quintet Group Photo"
               className="w-full object-cover"
             />
             {/* Dark overlay shown when hovering the photo */}
             <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/50 transition-all duration-300 pointer-events-none rounded-2xl" />

             {/* Per-member hotzones */}
             {[
               { name: "Soumyanil Jana",       instrument: "First Violin",   left: 14, width: 19 },
               { name: "Siddarth Afzalpurkar", instrument: "Second Violin",  left: 31, width: 13 },
               { name: "Ranvir Singh",          instrument: "Viola",          left: 41, width: 11 },
               { name: "Ryan Babler",           instrument: "Cello",          left: 51, width: 14 },
               { name: "Gautam Bharel",         instrument: "Double Bass",    left: 66, width: 27 },
             ].map(({ name, instrument, left, width }) => (
               <div
                 key={name}
                 className="absolute top-0 h-full group/member"
                 style={{ left: `${left}%`, width: `${width}%` }}
               >
                 {/* Bright cutout — cancels the dark overlay for this column */}
                 <div className="absolute inset-0 opacity-0 group-hover/member:opacity-100 transition-all duration-300 rounded-sm"
                   style={{ boxShadow: '0 0 0 9999px rgba(0,0,0,0.5)', mixBlendMode: 'normal' }}
                 />
                 {/* Amber glow border around the person */}
                 <div className="absolute inset-0 opacity-0 group-hover/member:opacity-100 transition-all duration-300 border-2 border-amber-400/70 rounded-sm" />
                 {/* Lighten the hovered column */}
                 <div className="absolute inset-0 opacity-0 group-hover/member:opacity-100 transition-all duration-300 bg-white/10 rounded-sm" />

                 {/* Name tooltip */}
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/member:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                   <div className="bg-black/80 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1.5 rounded-lg border border-amber-400/60 whitespace-nowrap text-center">
                     <div>{name}</div>
                     <div className="text-amber-400 text-xs font-normal">{instrument}</div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     </div>


     {/* Mission Section */}
     <div className="relative pt-2 pb-6 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
           <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">
             Our Mission
           </h2>
          
           <div className="prose prose-lg prose-invert max-w-none">
             <div className="bg-black/30 rounded-2xl p-8 mb-8 border border-white/10">
               <h3 className="text-2xl font-semibold text-amber-400 mb-4">Welcome Letter</h3>
               <p className="text-white/80 leading-relaxed mb-6">
                 Welcome to The Luce Quintet's official website!
               </p>
               <p className="text-white/80 leading-relaxed mb-6">
                 Founded by students of the Montgomery High School Orchestra, The Luce Quintet is a non-profit music group that offers free performances, primarily within the Somerset area. Our goal is to cultivate joy and community through music by providing free, diverse performances to all age groups.
               </p>
               <p className="text-white/80 leading-relaxed mb-6">
                 On this website, you can learn more about our{' '}
                 <Link to="/about" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">quintet's musicians</Link>
                 , view{' '}
                 <Link to="/gallery" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">photos and videos</Link>
                 {' '}from past performances for all our concerts, and{' '}
                 <Link to="/contact" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">make your own inquiries</Link>
                 {' '}for us to play at your events or gatherings.
               </p>
               <p className="text-white/80 leading-relaxed mb-6">
                 We hope you enjoy the love and passion for the music we play and that we see you soon at our future performances.
               </p>
             </div>


             <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-2xl p-6 border border-blue-400/20">
                 <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Music className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-blue-400 mb-3">Quality Performances</h3>
                 <p className="text-white/80">
                   Experience diverse musical styles including classical, film, and contemporary pieces from around the globe, all delivered with professional quality.
                 </p>
               </div>


               <div className="bg-gradient-to-br from-green-600/20 to-green-500/10 rounded-2xl p-6 border border-green-400/20">
                 <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Globe className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-green-400 mb-3">Wide Availability</h3>
                 <p className="text-white/80">
                   We perform at various venues including libraries, schools, retirement homes, and community centers to reach diverse audiences.
                 </p>
               </div>


               <div className="bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-2xl p-6 border border-purple-400/20">
                 <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Heart className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-xl font-semibold text-purple-400 mb-3">Community Impact</h3>
                 <p className="text-white/80">
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
