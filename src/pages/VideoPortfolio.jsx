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
      <main className="video-main">
        <section className="gallery">
           <div className="video-card">Showreel</div>
           <div className="video-card">Sports</div>
           <div className="video-card">Personal</div>
        </section>
      </main>
    </div>
  );
}
