import { useEffect } from 'react';
import { X, Clapperboard, ExternalLink } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import './VideoModal.css';

const instagramProfiles = [
  {
    platform: 'Instagram',
    handle: '@unpopulareditsss',
    url: 'https://www.instagram.com/unpopulareditsss/'
  },
  {
    platform: 'Instagram',
    handle: '@shutter.scroll',
    url: 'https://www.instagram.com/shutter.scroll/'
  }
];

export default function VideoModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Save existing overflow and lock scroll without shifting position
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="video-modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div 
        className="video-modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="video-modal-close-btn" 
          onClick={onClose} 
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="video-modal-header">
          <span className="video-modal-badge">
            <Clapperboard size={14} className="video-modal-badge-icon" />
            In Progress
          </span>
          <h2 id="video-modal-title" className="video-modal-title">Video Editing</h2>
        </div>

        <div className="video-modal-body">
          <p className="video-modal-lead">
            This side of the portfolio is still in the works.
          </p>
          <p className="video-modal-text">
            I've been working on video editing alongside development, and I'll eventually put together a dedicated space for it here.
          </p>

          <div className="video-modal-socials-section">
            <p className="video-modal-socials-label">
              Until then, you can explore some of my edits here:
            </p>
            <div className="video-modal-links-grid">
              {instagramProfiles.map((profile) => (
                <a 
                  key={profile.handle}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-social-card"
                >
                  <div className="video-social-icon-wrapper">
                    <FaInstagram size={20} />
                  </div>
                  <div className="video-social-info">
                    <span className="video-social-platform">{profile.platform}</span>
                    <span className="video-social-handle">{profile.handle}</span>
                  </div>
                  <ExternalLink size={16} className="video-social-external-icon" />
                </a>
              ))}
            </div>
          </div>

          <div className="video-modal-rendering-status">
            <span className="rendering-pulse-indicator" />
            <span className="rendering-status-text">The edit is still rendering.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
