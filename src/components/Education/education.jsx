import React from 'react';
import './education.css';

export default function Education() {
  const [activeTab, setActiveTab] = React.useState('education');

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Arab Open University-AOU (Egypt branch)",
      period: "09/2020 – 01/2024",
      details: [
        "GPA: 3.06 (Very Good)",
        "Graduation Project: Web Vulnerabilities Scanner Website Using ML (Grade A)"
      ]
    },
    {
      degree: "Bachelor of Science",
      institution: "The Open University-OU (British branch)",
      period: "09/2020 – 01/2024",
      details: [
        "With second class honours (1st Division)"
      ]
    }
  ];

  const courses = [
    {
      title: "Advanced React",
      institution: "Upskilling",
      period: "10/2025 - present"
    },
    {
      title: "NgRx (with NgRx Data) - The Complete Guide (Angular 20)",
      institution: "Udemy",
      period: "05/2025 – 08/2025"
    },
    {
      title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
      institution: "Udemy",
      instructor: "Maximilian Schwarzmüller",
      period: "05/2025 – present"
    },
    {
      title: "Angular Testing Course - Angular University",
      institution: "Udemy",
      period: "04/2025 – 05/2025"
    },
    {
      title: "ASP.net advanced course",
      institution: "Upskilling",
      period: "10/2024 – 02/2025"
    },
    {
      title: "Artificial Intelligence",
      institution: "Amit",
      period: "05/2023 – 12/2023"
    },
    {
      title: "Full-Stack diploma (ASP.net and Angular)",
      institution: "Route academy",
      period: "03/2022 – 02/2023"
    },
    {
      title: "Artificial Intelligence",
      institution: "Instant",
      period: "05/2021 – 01/2022"
    }
  ];

  return (
    <div className="education-page">
      <div className="education-header">
        <p className="education-subtitle">MY BACKGROUND</p>
        <h1 className="education-title">EDUCATION & COURSES</h1>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="fas fa-graduation-cap"></i>
            Education
          </button>
          <button 
            className={`tab-button ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            <i className="fas fa-certificate"></i>
            Courses
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'education' && (
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{edu.degree}</h3>
                    <div className="timeline-info">
                      <div className="timeline-institution">{edu.institution}</div>
                      <div className="timeline-period">{edu.period}</div>
                    </div>
                    <ul className="timeline-details">
                      {edu.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="courses-timeline">
              {courses.map((course, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-icon">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{course.title}</h3>
                    <div className="timeline-info">
                      <div className="timeline-institution">{course.institution}</div>
                      {course.instructor && (
                        <div className="timeline-instructor">{course.instructor}</div>
                      )}
                      <div className="timeline-period">{course.period}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}