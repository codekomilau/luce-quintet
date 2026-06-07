import React, { useState } from 'react';
import MusicalBackground from '../components/MusicalBackground';
import { Mail, Send, MapPin } from 'lucide-react';


const Contact = () => {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   subject: '',
   message: ''
 });


 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value
   });
 };


 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   const gmailUrl = `https://mail.google.com/mail/?view=cm&to=quintet.luce@gmail.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} <${formData.email}>\n\n${formData.message}`)}`;
   window.open(gmailUrl, '_blank');
   setFormData({ name: '', email: '', subject: '', message: '' });
 };


 return (
   <div className="relative min-h-screen pt-20 pb-12">
     <MusicalBackground />
    
     <div className="relative px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
           <h1 className="text-5xl md:text-6xl font-bold mb-6">
             <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg">
               Contact Us
             </span>
           </h1>
           <p className="text-xl text-white/80 max-w-3xl mx-auto">
             Get in touch with The Luce Quintet for booking inquiries, collaboration opportunities, or general questions.
           </p>
         </div>


         <div className="grid lg:grid-cols-2 gap-12">
           {/* Contact Information */}
           <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
             <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg mb-8">Get In Touch</h2>
            
             <div className="space-y-6">
               <div className="flex items-center space-x-4">
                 <div className="bg-blue-500 p-3 rounded-lg">
                   <Mail className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <h3 className="text-lg font-semibold text-white">Email</h3>
                   <p className="text-white/80">quintet.luce@gmail.com</p>
                 </div>
               </div>


               <div className="flex items-center space-x-4">
                 <div className="bg-purple-500 p-3 rounded-lg">
                   <MapPin className="w-6 h-6 text-white" />
                 </div>
                 <div>
                   <h3 className="text-lg font-semibold text-white">Service Area</h3>
                   <p className="text-white/80">Somerset County, New Jersey</p>
                 </div>
               </div>
             </div>


             <div className="mt-8 p-6 bg-black/30 rounded-xl border border-white/10">
               <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg mb-4">Performance Bookings</h3>
               <p className="text-white/80 leading-relaxed">
                 We offer free performances for libraries, schools, retirement homes, and community centers.
                 Contact us to schedule a performance for your venue or event.
               </p>
             </div>
           </div>


           {/* Contact Form */}
           <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
             <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg mb-8">Send a Message</h2>
            
             <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                   Name
                 </label>
                 <input
                   type="text"
                   id="name"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                   className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-300"
                   placeholder="Your name"
                 />
               </div>


               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                   Email
                 </label>
                 <input
                   type="email"
                   id="email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   required
                   className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-300"
                   placeholder="your@email.com"
                 />
               </div>


               <div>
                 <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                   Subject
                 </label>
                 <input
                   type="text"
                   id="subject"
                   name="subject"
                   value={formData.subject}
                   onChange={handleChange}
                   required
                   className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-300"
                   placeholder="Performance booking, collaboration, etc."
                 />
               </div>


               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                   Message
                 </label>
                 <textarea
                   id="message"
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   rows={5}
                   className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/40 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors duration-300 resize-none"
                   placeholder="Tell us about your event, questions, or how we can help..."
                 />
               </div>


               <button
                 type="submit"
                 className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold py-3 px-6 rounded-lg hover:from-amber-400 hover:to-amber-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
               >
                 <Send className="w-5 h-5" />
                 <span>Send Message</span>
               </button>
             </form>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};


export default Contact;
