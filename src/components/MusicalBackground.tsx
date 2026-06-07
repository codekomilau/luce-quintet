//import React from 'react';


const MusicalBackground = () => {
 return (
   <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
     {/* Musical notes floating */}
     <div className="absolute top-20 left-10 animate-pulse opacity-10">
       <svg width="40" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
         <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
       </svg>
     </div>
    
     <div className="absolute top-1/3 right-20 animate-pulse opacity-10 animation-delay-1000">
<svg width="30" height="45" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
         <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
       </svg>
     </div>
    
     <div className="absolute bottom-1/3 left-1/4 animate-pulse opacity-10 animation-delay-2000">
       <svg width="35" height="52" viewBox="0 0 24 24" fill="currentColor" className="text-purple-400">
         <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
       </svg>
     </div>
    
     {/* Treble clef */}
     <div className="absolute top-1/2 right-10 animate-pulse opacity-5">
       <svg width="60" height="100" viewBox="0 0 100 160" fill="currentColor" className="text-amber-300">
         <path d="M50 20c-15 0-25 10-25 25 0 8 4 15 10 20-3 5-5 11-5 17 0 15 10 28 25 28 8 0 15-3 20-8 3-3 5-7 5-12 0-8-6-15-14-15-5 0-9 2-12 6-2 3-3 6-3 10 0 6 4 11 10 11 3 0 6-1 8-3l2 2c-3 3-7 4-12 4-9 0-16-7-16-16 0-5 2-10 6-13 8-6 14-15 14-25 0-12-8-22-20-22-7 0-13 3-17 8-2 3-3 6-3 10v60c0 8 6 15 14 15 4 0 8-2 11-5l2 2c-4 4-9 6-15 6-11 0-20-9-20-20V51c0-6 2-12 6-16 5-6 13-10 22-10 15 0 26 12 26 27 0 12-7 23-17 30z"/>
       </svg>
     </div>
 {/* Staff lines */}
     <div className="absolute top-1/4 left-0 w-full opacity-5">
       {[...Array(5)].map((_, i) => (
         <div
           key={i}
           className="w-full h-px bg-white mb-3"
           style={{ marginTop: i * 12 }}
         />
       ))}
     </div>
   </div>
 );
};
export default MusicalBackground;