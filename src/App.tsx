//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './components/Footer';


function App() {
 return (
   <Router>
     <div className="min-h-screen bg-black text-white overflow-x-hidden">
       <ScrollToTop />
       <Navbar />
       <Routes>
         <Route path="/" element={<Welcome />} />
         <Route path="/about" element={<About />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
       <Footer />
     </div>
   </Router>
 );
}


export default App;
