import React, { useState, useEffect } from 'react';
import './home.css';
import profileImage from '../../assets/images/me.jpg';
import reactLogo from '../../assets/react.svg';

export default function Home() {
  const [isReact, setIsReact] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsReact(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`home-container ${isReact ? 'react-theme' : 'angular-theme'}`}>
      <div className="content-wrapper">
        <div className="image-section">
          <div className={`profile-circle ${isReact ? 'react-border' : 'angular-border'}`}>
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>

        <div className="text-section">
          <div className="dev-identity">
            {isReact ? (
              <div className="identity-content">
                <img src={reactLogo} alt="React" className="tech-logo react-logo" />
                <h1 className="name">I'm Maryem - React Developer</h1>
              </div>
            ) : (
              <div className="identity-content">
                <i className="fab fa-angular tech-logo angular-logo"></i>
                <h1 className="name">I'm Maryem - Angular Expert</h1>
              </div>
            )}
          </div>

          <div className="description-container">
            {isReact ? (
              <p className="description">
                ⚛️ Passionate about React's component-based architecture<br/>
                📦 Expert in Redux, Context API, and React Hooks<br/>
                🚀 Creating performant SPAs and responsive interfaces<br/>
                💻 Skilled in Next.js and Modern React patterns
              </p>
            ) : (
              <p className="description">
                🅰️ Specialized in Angular's powerful framework<br/>
                🔄 Expert in RxJS and state management<br/>
                🛠️ Building scalable enterprise applications<br/>
                📱 Creating robust TypeScript solutions
              </p>
            )}
          </div>

          <button className={`download-cv ${isReact ? 'react-btn' : 'angular-btn'}`}>
            Download CV <i className="fas fa-download ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
