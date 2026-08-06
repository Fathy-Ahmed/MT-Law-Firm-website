import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let resourcesLoaded = false;
    let minTimeElapsed = false;

    const attemptRemove = () => {
      if (resourcesLoaded && minTimeElapsed) {
        setFade(true);
        document.body.classList.remove('preloader-active');
        setTimeout(() => {
          setVisible(false);
        }, 600);
      }
    };

    const timer = setTimeout(() => {
      minTimeElapsed = true;
      attemptRemove();
    }, 5000);

    const handleLoad = () => {
      resourcesLoaded = true;
      attemptRemove();
    };

    if (document.readyState === 'complete') {
      resourcesLoaded = true;
      attemptRemove();
    } else {
      window.addEventListener('load', handleLoad);
    }

    document.body.classList.add('preloader-active');

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
      document.body.classList.remove('preloader-active');
    };
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" className={`preloader-overlay ${fade ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <img src={logo} alt="MT Law Firm Logo" className="preloader-logo" />
      </div>
    </div>
  );
}
