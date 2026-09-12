import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Music } from 'lucide-react';
import soumyanilPhoto from '../assets/SoumyaNil Jana.png';
import ranvirPhoto from '../assets/Ranvir Singh.png';
import siddarthPhoto from '../assets/Siddhart Afzalpurkar.png';
import ryanPhoto from '../assets/Ryan Babler.png';
import gautamPhoto from '../assets/Gautham Bharel.png';


const About = () => {
 const { state } = useLocation();
 const highlightedMember = state?.member ?? null;
 const cardRefs = useRef<{ [name: string]: HTMLDivElement | null }>({});

 useEffect(() => {
   if (highlightedMember && cardRefs.current[highlightedMember]) {
     setTimeout(() => {
       cardRefs.current[highlightedMember]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
     }, 100);
   }
 }, [highlightedMember]);


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
       "NJMTA Winner's Recital(Solo with Piano): 2023 - Present"
     ],
     personalStatement: "I enjoy playing the viola due to the sense of relaxation and happiness it gives me. I'm always open to learning new music, easy or hard, because it allows me to grow my skills and share my passion with other people , through performances and shows."
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
   <div className="relative min-h-screen bg-white pt-20 pb-12">
     <div className="relative px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
           <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
             Meet Our Musicians
           </h1>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             Talented students from Montgomery High School Orchestra, united by our passion for music and community service.
           </p>
         </div>


         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {musicians.map((musician, index) => (
             <div
               key={index}
               ref={el => { cardRefs.current[musician.name] = el; }}
               className={`bg-white rounded-2xl p-6 border transition-all duration-300 hover:transform hover:scale-105 shadow-sm ${
                 highlightedMember === musician.name
                   ? 'border-amber-400 shadow-[0_0_30px_rgba(251,191,36,0.3)]'
                   : 'border-gray-200 hover:border-amber-400/50 hover:shadow-md'
               }`}
             >
               <div className="aspect-square rounded-xl mb-6 overflow-hidden">
                 <img
                   src={musician.photo}
                   alt={musician.name}
                   className="w-full h-full object-cover object-top"
                 />
               </div>

               <div className="text-center">
                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{musician.name}</h3>
                 <div className="flex items-center justify-center mb-4">
                   <Music className="w-5 h-5 text-amber-500 mr-2" />
                   <span className="text-amber-600 font-medium">{musician.instrument}</span>
                 </div>

                 <div className="text-left mb-6">
                   <ul className="text-gray-700 text-sm space-y-1">
                     {musician.bulletPoints.map((point, pointIndex) => (
                       <li key={pointIndex} className="flex items-start">
                         <span className="text-amber-500 mr-2 mt-1">•</span>
                         <span>{point}</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div className="text-left bg-gray-50 rounded-lg p-4 border border-gray-200">
                   <h4 className="text-amber-600 font-semibold mb-2">Personal Statement:</h4>
                   <p className="text-gray-700 text-sm leading-relaxed italic">
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
