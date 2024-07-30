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


function App() {
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
        <HomeBanner id="home" />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="NewsApp"
          projectDesc="The NewsMouse web app is a ReactJS-based application that fetches data from NewsAPI to provide users with up-to-date 
         news articles. It offers a user-friendly interface for browsing and staying informed about various topics"
          projectLink="https://github.com/RohitKumar9690/newsapp"
          deployedProjectLink="/"
          projectImg={require('./images/projectNews.png')}
        />

        <ProjectCard
          projectTitle="Hotel Management System"
          projectDesc="Hotel Management System using Core Java with file handling involves designing classes for rooms, guests, reservations, and billing."
          projectLink="/"
          deployedProjectLink="/"
          projectImg={require('./images/projectHotel.png')}
        />

        <ProjectCard
          className="odd"
          projectTitle="Todo app"
          projectDesc="This Angular application manages a todos list with features to add, complete, undo, and delete todos. It provides a user-friendly interface to organize your tasks efficiently."
          projectLink="/"
          deployedProjectLink="/"
          projectImg={require('./images/projectToDO.png')}
        />
        <AboutMe id='about' />
        <SkillCard id='skills' />
        <ContactForm id='contact' />
        <Footer />
      </div>
    </>
  );
}

export default App;
