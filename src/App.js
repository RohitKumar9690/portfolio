import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"
import Experience from "./components/Experience";
import Education from "./components/Education";


function App() {
  const experienceData = [
    {
      "jobTitle": "MERN Stack Developer Intern",
      "company": "MNNLR Pvt. Ltd",
      "location": "Pune, Mharashtra",
      "duration": "August 2024 - Present",
      "responsibilities": [
        "Developing new user-facing features using React.js",
        "Optimizing components for maximum performance",
        "Building and maintaining web applications",
        "Collaborating with backend developers and UX/UI designers"
      ]
    },
    {
      "jobTitle": "Java Developer Intern",
      "company": "CETPA Infotech Pvt. Ltd",
      "location": "Noida, Uttar Pradesh",
      "duration": "June 2023 - July 2023",
      "responsibilities": [
        "Created and maintained Java applications",
        "Worked on projects that involve integrating databases with applications",
        "Identified and resolved bugs in existing codebase, improving application stability"
      ]
    }
  ]
  

  const educationData =
  [
    {
      "degree": "Bachelor of Computer Applications (BCA)",
      "university": "Teerthanker Mahaveer University, Moradabad, Uttar Pradesh",
      "duration": "2021 - 2024",
      "courses": []
    },
    {
      "degree": "12th",
      "university": "Shri Guru Ram Rai Public School, Muzaffarnagar, Uttar Pradesh",
      "duration": "2020 - 2021",
      "courses": ["Commerce Stream ,CBSE Board"]
    },
    {
      "degree": "10th",
      "university": "SSK Public School India, Muzaffarnagar, Uttar Pradesh",
      "duration": "2018 - 2019",
      "courses": ["CBSE Board"]
    }
  ]
  const projects = [
    {
      id: "project1",
      projectTitle: "NewsApp",
      projectDesc: "The NewsMouse web app is a ReactJS-based application that fetches data from NewsAPI to provide users with up-to-date news articles. It offers a user-friendly interface for browsing and staying informed about various topics.",
      projectLink: "https://github.com/RohitKumar9690/newsapp",
      deployedProjectLink: "/",
      projectImg: require('./images/projectNews.png'),
      className: "odd"
    },
    {
      id: "project2",
      projectTitle: "Confluence Clone – Frontend Project",
      projectDesc: "This project is a frontend clone of Confluence, built using React.js and Tailwind CSS. The goal of this project is to replicate the user interface (UI) and some core features of Confluence, a popular enterprise collaboration and documentation tool developed by Atlassian. While this clone doesn't include full backend functionality, it aims to provide an intuitive and functional frontend that mimics the user experience of Confluence.",
      projectLink: "https://github.com/RohitKumar9690/Confulence_frontend_clone",
      deployedProjectLink: "/",
      projectImg: require('./images/confluence.jpg'),
      className: ""
    },
    {
      id: "project3",
      projectTitle: "User Authentication System with Login, Signup & Protected Routes",
      projectDesc: "A secure and scalable user authentication system built with React, Redux Toolkit, Tailwind CSS for the frontend, and Node.js with Express for the backend. This project includes login and signup pages, user authorization, and protected routes to ensure secure access control for authenticated users only.",
      projectLink: "https://github.com/RohitKumar9690/Login_-Signup_System_with_Protected_Routes",
      deployedProjectLink: "/",
      projectImg: require('./images/security.jpg'),
      className: "odd"
    }
    ,{
      id: "project4",
      projectTitle: "Portfolio",
      projectDesc: "A portfolio website built with React, showcasing my skills and projects.",
      projectLink: "https://github.com/RohitKumar9690/Portfolio",
      deployedProjectLink: "https://rohitkumar-portfolio-9690.netlify.app/",
      projectImg: require('./images/portfolio.png'),
      className: ""
    }
  ];
  
  
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: '#ffffff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#F94892'
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id={"home"} />
        <ProjectCard projects={projects} />
        <AboutMe id={'about'} />
        <Education educationData={educationData} id={'education'}/>
        <Experience experiences={experienceData}
        id={'experience'}/>
        <SkillCard id='skills' />
        <ContactForm id='contact' />
        <Footer />
      </div>
    </>
  );
}

export default App;
