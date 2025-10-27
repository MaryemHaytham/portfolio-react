import React from 'react';
import './experience.css';

export default function Experience() {
  const experiences = [
    {
      title: "Mid-Level Frontend developer",
      company: "Aligntech solutions",
      period: "04/2025 – present",
      description: "Develop responsive web applications using Angular. Built components, wrote tests, and integrated state management with NgRx when needed. Collaborated with cross-functional teams to deliver scalable, maintainable, and user-friendly solutions."
    },
    {
      title: "Frontend developer",
      company: "GuardXpert",
      period: "07/2024 – 09/2025",
      description: "Built dashboards, an e-commerce platform, and responsive landing pages using Angular & React."
    },
    {
      title: "Mid-Level Frontend engineer - freelancer",
      company: "Zenith",
      period: "06/2025 – 06/2025",
      description: "Designed and implemented a company website with responsive layout and high SEO performance."
    },
    {
      title: "Mid-Level Frontend engineer - freelancer",
      company: "Fabritec Software Solutions",
      period: "03/2025 – 05/2025",
      description: "Developed and maintained web applications, wrote clean code, integrated APIs, and ensured performance. Created and ran test cases, collaborated with teams, reviewed code, and optimized UI for scalability and accessibility."
    },
    {
      title: "Mid-Level Angular Developer",
      company: "Freelancer",
      period: "02/2025 – 04/2025",
      description: "Developed and maintained enterprise systems using Angular, focusing on shift & attendance tracking, receipts, and inventory management. Built scalable, user-friendly interfaces, optimized performance, and enhanced business operations with efficient web solutions."
    },
    {
      title: "Junior Frontend developer",
      company: "ELSquare (ESquares GenieSys)",
      period: "10/2024 – 03/2025",
      description: "Developed and maintained responsive web applications, implemented new features, and optimized performance using Angular and React. Collaborated with teams to integrate backend services and ensure a seamless user experience."
    },
    {
      title: "Angular Developer",
      company: "Upskilling workshop",
      period: "10/2024 – 11/2024",
      description: "Developed an Inventory Management System using Angular 16, Bootstrap, Angular Material, and PrimeNG animations."
    },
    {
      title: "Fullstack engineer freelancer",
      company: "Smartpharos Development",
      period: "05/2024 – 10/2024",
      description: "Designed and developed a Domain Management Service to streamline domain registration, renewal, and DNS management."
    },
    {
      title: "Backend (ASP.net) internship",
      company: "INNOTECH",
      period: "07/2024 – 10/2024",
      description: "Developed web applications using .NET & C# with a focus on performance and scalability. Built interactive UI components with Blazor and optimized applications using WebAssembly (WASM)."
    },
    {
      title: "JSB internship Angular",
      company: "Upskilling",
      period: "02/2024 – 06/2024",
      description: "Developed a Food Management System for tracking inventory and orders, a Project Management System for task tracking and team collaboration, a Booking System for real-time reservations, and an Exams Management System for scheduling, grading, and performance tracking."
    },
    {
      title: "Web Development Internship",
      company: "SYNC",
      period: "04/2023 – 05/2023",
      description: "Created a Quiz App using JavaScript, developed a Music Player with HTML, CSS, and JavaScript, and built an E-Learning Website with a dashboard for managing courses and user interactions."
    },
    {
      title: "Full-stack (Angular & ASP.net) Internship",
      company: "LuminSoft",
      period: "08/2023 – 10/2023",
      description: "Developed a Product Management API, created a Todo-list application, built an Item Listing App with Angular, and designed a Recipes App using Angular and .NET Core 7."
    },
    {
      title: "AI (ML & DL) Training",
      company: "Instant",
      period: "10/2023 – 12/2023",
      description: "Built a Face Detection application using OpenCV, developed an Instagram Scraper, implemented Emotional Recognition with CNN, created a Chat with PDF tool, and designed a Real-Time Object Detection system."
    },
    {
      title: "Cyber Security Summer Training",
      company: "ITI",
      period: "08/2022 – 09/2022",
      description: "Completed courses in Computer Network Essentials, Windows Server Administration, Red Hat System Administration, Introduction to Cyber Security and Firewall Technologies, and Ethical Hacking, with ongoing self-study in Cloud Computing."
    },
    {
      title: "Mid-level Angular developer",
      company: "Freelancer",
      period: "04/2025 – 06/2025",
      description: "Worked independently on Angular projects, developing responsive websites, writing unit tests, and implementing NgRx for state management when required. Delivered clean, maintainable code and collaborated with clients to meet their business goals."
    }
  ];

  return (
    <div className="experience-page">
      <div className="experience-header">
        <p className="experience-subtitle">WHAT I'VE DONE</p>
        <h1 className="experience-title">WORK EXPERIENCE</h1>
      </div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <i className="fas fa-pencil-alt"></i>
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-info">
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-period">{exp.period}</div>
              </div>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}