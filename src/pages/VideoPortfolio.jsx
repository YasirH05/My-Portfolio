import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './VideoPortfolio.css';

export default function VideoPortfolio() {
  return (
    <div className="video-container">
      <nav className="video-nav">
        <Link to="/" className="back-link"><ArrowLeft size={20} /> Back</Link>
        <div className="logo">Director's Cut</div>
      </nav>
      <header className="hero-section">
        <div className="hero-content">
          <h1>Visual Storytelling</h1>
          <p>Cinematic editing that brings moments to life.</p>
        </div>
      </header>
      <main className="video-main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column', color: 'white', textAlign: 'center' }}>
        <div style={{ padding: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚧 Under Construction</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: '1.6' }}>
            I am currently working on this side of the portfolio. 
            The video editor showcase will be available soon. Please check back later!
          </p>
        </div>
      </main>
    </div>
  );
}
