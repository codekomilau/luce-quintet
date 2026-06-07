//import React from 'react';
import MusicalBackground from '../components/MusicalBackground';
import { Camera } from 'lucide-react';


const Gallery = () => {
 // Using Pexels URLs for musical performance and concert images
 const galleryImages = [
   {
     url: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800',
     title: 'String Quartet Performance',
     description: 'Classical ensemble in concert hall'
   },
   {
     url: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800',
     title: 'Orchestra Rehearsal',
     description: 'Musicians preparing for performance'
   },
   {
     url: 'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=800',
     title: 'Concert Hall',
     description: 'Beautiful acoustic venue'
   },
   {
     url: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=800',
     title: 'Musical Instruments',
     description: 'String instruments ready for performance'
   },
   {
     url: 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=800',
     title: 'Sheet Music',
     description: 'Classical compositions and arrangements'
   },
   {
     url: 'https://images.pexels.com/photos/1047930/pexels-photo-1047930.jpeg?auto=compress&cs=tinysrgb&w=800',
     title: 'Violin Performance',
     description: 'Solo violin in spotlight'
   },
   {
     url: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=800',
     title: 'Community Performance',
     description: 'Performing for local audience'
   },
   {
     url: 'https://images.pexels.com/photos/3971986/pexels-photo-3971986.jpeg?auto=compress&cs=tinysrgb&w=800',
     title: 'Ensemble Practice',
     description: 'Rehearsing in intimate setting'
   },
   {
     url: 'https://images.pexels.com/photos/1751688/pexels-photo-1751688.jpeg?auto=compress&cs=tinysrgb&w=800',
     title: 'Cello Close-up',
     description: 'Beautiful string instrument detail'
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
               Photo Gallery
             </span>
           </h1>
           <p className="text-xl text-white/80 max-w-3xl mx-auto">
             Capturing moments of musical excellence and community connection through our performances.
           </p>
         </div>


         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {galleryImages.map((image, index) => (
             <div
               key={index}
               className="group bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-105"
             >
               <div className="aspect-square overflow-hidden">
                 <img
                   src={image.url}
                   alt={image.title}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
               </div>
               <div className="p-4">
                 <h3 className="text-lg font-semibold text-white mb-1">{image.title}</h3>
                 <p className="text-white/60 text-sm">{image.description}</p>
               </div>
             </div>
           ))}
         </div>


         {/* Coming Soon Section */}
         <div className="mt-16 bg-black/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 text-center">
           <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
             <Camera className="w-8 h-8 text-black" />
           </div>
           <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg mb-4">More Photos Coming Soon</h2>
           <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
             We're constantly capturing new moments from our performances and community events.
             Check back regularly to see our latest photos and behind-the-scenes glimpses of The Luce Quintet in action.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
};


export default Gallery;
