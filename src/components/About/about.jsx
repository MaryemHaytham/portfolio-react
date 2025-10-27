import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <p className="about-subtitle">ABOUT US</p>
        <h1 className="about-title">WHO AM I?</h1>
      </div>

      <div className="about-content">
        <p className="about-text">
          Hi I'm Maryem Haytham, a passionate frontend developer. With expertise in modern web technologies,
          I specialize in creating responsive and intuitive user interfaces that enhance the digital experience.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <div className="card-icon">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4=" alt="React" className="tech-icon" />
          </div>
          <h3>React Development</h3>
          <div className="card-underline blue"></div>
          <p>Building dynamic and interactive web applications using React.js, Redux, and modern React patterns.</p>
        </div>

        <div className="card">
          <div className="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="tech-icon angular">
              <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/>
            </svg>
          </div>
          <h3>Angular Development</h3>
          <div className="card-underline red"></div>
          <p>Creating robust applications with Angular, TypeScript, and RxJS for state management.</p>
        </div>

        <div className="card">
          <div className="card-icon">
            <i className="fas fa-mobile-alt tech-icon"></i>
          </div>
          <h3>Responsive Design</h3>
          <div className="card-underline yellow"></div>
          <p>Implementing mobile-first approaches and responsive layouts for optimal user experience across devices.</p>
        </div>

        <div className="card">
          <div className="card-icon">
            <i className="fas fa-code tech-icon"></i>
          </div>
          <h3>Modern Web Development</h3>
          <div className="card-underline purple"></div>
          <p>Utilizing latest web technologies and best practices to build performant and scalable applications.</p>
        </div>
      </div>
    </div>
  );
}
