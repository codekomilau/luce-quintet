//import React from 'react';
import MusicalBackground from '../components/MusicalBackground';
import { Music } from 'lucide-react';
import soumyanilPhoto from '../assets/SoumyaNil Jana.png';
import ranvirPhoto from '../assets/Ranvir Singh.png';
import siddarthPhoto from '../assets/Siddhart Afzalpurkar.png';
import ryanPhoto from '../assets/Ryan Babler.png';
import gautamPhoto from '../assets/Gautham Bharel.png';


const About = () => {
 const musicians = [
   {
     name: "Soumyanil Jana",
     instrument: "First Violin",
     photo: soumyanilPhoto,
     bulletPoints: [
       "MHS Class of 2027",
       "7 years of experience",
       "Montgomery Township Orchestra Program: 2018 - Present",
       "Greater Princeton Youth Orchestra (1st Violin): 2022 - Present",
       "2022 - 2023: Concert Orchestra",
       "2023 - Present: Symphonic Orchestra",
       "Achieved a Level 9 rating in the ASTACAP recognition program"
     ],
     personalStatement: "I've admired the violin since I was four years old because of my older sister playing it herself as an elementary schooler. I still love its sound and want to continue refining my skills on this instrument."
   },
   {
     name: "Ranvir Singh",
     instrument: "Viola",
     photo: ranvirPhoto,
     bulletPoints: [
       "MHS Class of 2027",
       "Greater Princeton Youth Orchestra: 2022 - 2024",
       "2022 - 2023: Concert Orchestra",
       "2023 - 2024: Symphonic Orchestra",
       "Youth Orchestra of Central Jersey (Pro Arte Orchestra): 2024 - Present",
       "Performed as assistant section leader and section leader",
       "NJMTA Winner's Recital(Solo with Piano): 2023 - Present",
       "2023, 2024: Honors Placement",
       "2025: High Honors Placement",
       "2025 Prima Volta Music Competition: 3rd Place + Winner's Recital Performance (Solo with Piano)"
     ],
     personalStatement: "I enjoy playing violin as it helps me relax and clear my mind, as well as letting me join a community of musicians both in school and out. I look forward to performing with the Luce Quintet in the future!"
   },
   {
     name: "Siddarth Afzalpurkar",
     instrument: "Second Violin",
     photo: siddarthPhoto,
     bulletPoints: [
       "MHS Class of 2028",
       "Montgomery Township Orchestra—regular and chamber groups (2021-Present)",
       "Performed as principal second violin and assistant concertmaster",
       "Greater Princeton Youth Orchestra (2022 - Present)",
       "2022 - 2023: Concert Orchestra",
       "2023 - Present: Symphonic Orchestra",
       "Performed in the Pit Orchestra for the Montgomery High School's production of Newsies"
     ],
     personalStatement: "I enjoy playing violin as it helps me relax and clear my mind, as well as letting me join a community of musicians both in school and out. I look forward to performing with the Luce Quintet in the future!"
   },
   {
     name: "Ryan Babler",
     instrument: "Cello",
     photo: ryanPhoto,
     bulletPoints: [
       "MHS Class of 2027",
       "Has played the cello for 6 years",
       "Performed in over 10 orchestral concerts",
       "Served on the Montgomery High School Symphonic Orchestra Leadership Council"
     ],
     personalStatement: "The cello has always been a way to find a mental and emotional outlet through music for myself. I also find a lot of fun and joy improving both individually and as an ensemble."
   },
   {
     name: "Gautam Bharel",
     instrument: "Double Bass & Head of Musical Arrangements",
     photo: gautamPhoto,
     bulletPoints: [
       "MHS Class of 2027",
       "Montgomery Township Orchestra Program: 2021 - Present",
       "Montgomery High School Pit Orchestra: 2023 - Present"
     ],
     personalStatement: "I like playing the Double Bass because of how fulfilling it is. Classical playing is a very unique form of instrumental performance, and helps round out my musical experience."
   }
 ];


 return (
   <div className="relative min-h-screen pt-20 pb-12">
     <MusicalBackground />
    
     <div className="relative px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
           <h1 className="text-5xl md:text-6xl font-bold mb-6">
             <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">
               Meet Our Musicians
             </span>
           </h1>
           <p className="text-xl text-white/80 max-w-3xl mx-auto">
             Talented students from Montgomery High School Orchestra, united by our passion for music and community service.
           </p>
         </div>


         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {musicians.map((musician, index) => (
             <div
               key={index}
               className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-105"
             >
               <div className="aspect-square rounded-xl mb-6 overflow-hidden">
                 <img
                   src={musician.photo}
                   alt={musician.name}
                   className="w-full h-full object-cover object-top"
                 />
               </div>
              
               <div className="text-center">
                 <h3 className="text-xl font-semibold text-white mb-2">{musician.name}</h3>
                 <div className="flex items-center justify-center mb-4">
                   <Music className="w-5 h-5 text-amber-400 mr-2" />
                   <span className="text-amber-400 font-medium">{musician.instrument}</span>
                 </div>
                
                 {/* Bullet points for experience */}
                 <div className="text-left mb-6">
                   <ul className="text-white/80 text-sm space-y-1">
                     {musician.bulletPoints.map((point, pointIndex) => (
                       <li key={pointIndex} className="flex items-start">
                         <span className="text-amber-400 mr-2 mt-1">•</span>
                         <span>{point}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                
                 {/* Personal Statement */}
                 <div className="text-left bg-black/30 rounded-lg p-4 border border-white/10">
                   <h4 className="text-amber-400 font-semibold mb-2">Personal Statement:</h4>
                   <p className="text-white/80 text-sm leading-relaxed italic">
                     {musician.personalStatement}
                   </p>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
   </div>
 );
};


export default About;
