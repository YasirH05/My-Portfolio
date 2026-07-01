import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Video, MapPin, Mail, Phone } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
       <div className="center-identity">
          <h1>YASIR HASAN</h1>
          <p className="subtitle">B.Tech @ ABES Engineering College</p>
          <div className="contact-info">
             <span><MapPin size={16} /> Ghaziabad / Lucknow</span>
             <span><Mail size={16} /> yasirhasan1000@gmail.com</span>
             <span><Phone size={16} /> +91 7234872340</span>
          </div>
          <p className="prompt">Choose your path</p>
       </div>
       
       <div className="split-panel tech-panel">
         <div className="content">
            <Code2 size={48} className="icon" />
            <h2>Technical Portfolio</h2>
            <p>Software Engineering & Development</p>
            <Link to="/tech" className="enter-btn">Explore Code</Link>
         </div>
       </div>
       <div className="split-panel video-panel">
         <div className="content">
            <Video size={48} className="icon" />
            <h2>Video Editor Portfolio</h2>
            <p>Cinematic Editing & Visual Storytelling</p>
            <Link to="/video" className="enter-btn">Watch Reel</Link>
         </div>
       </div>
    </div>
  );
}
