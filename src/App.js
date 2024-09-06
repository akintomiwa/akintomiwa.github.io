// import logo from './logo.svg';
import React, { useState } from 'react';
// import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';

import Footer from './components/Footer';
import NavBar from './components/Navbar';
import SoftwareProjects from './components/SoftwareProjects';
import AboutMe from './components/AboutMe';

import { Routes, Route } from 'react-router-dom';
import { DarkModeProvider, useDarkMode } from "./providers/DarkModeContext"
import './App.css';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Promo from './components/Promo';
// import Btn from './components/Btn';
// import { Button, Container } from 'react-bootstrap';
// import Sheading1 from './components/Sheading1';
// import ModeToggler from './components/ModeToggler';



function App() {
  const message = "Welcome to your Homepage.";
  const navItems = ["Home", "About Me", "Visual Projects", "Software Projects"];
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const { isDarkMode } = useDarkMode();

  // Toggle dark mode
  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  // function handleClick() {
  //   setActive("P2");
  // }

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      {/* <Header name="Isaac Akin-Onigbinde" /> */}
      <NavBar items={navItems} />
      {/* <ModeToggler toggleDarkMode={toggleDarkMode} /> */}
      {/* <button className="hamburger-menu" onClick={toggleDrawer}>
        &#9776;
      </button> */}
      <Sidebar isDarkMode={isDarkMode} isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Main welcomeMessage={message} />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/software-projects" element={<SoftwareProjects />} />
        {/* Add other routes here */}
      </Routes>
      <VideoPlayer url={videoUrl} /> 
      <Routes>
        <Route path="/" element={<Footer isDarkMode={isDarkMode} />} />
      </Routes>
    </div>
  );
}
  // return (
  //   <div className={isDarkMode ? "dark-mode" : "light-mode"}>
  //     {/* <Header name= "Tomiwa" color="purple" /> */}
      
  //     <Header name= "Isaac Akin-Onigbinde" />
  //     <div>
  //       <NavBar items = {items}/>
  //       <Main welcomeMessage = {message}/>
  //       <ModeToggler toggleDarkMode={toggleDarkMode} />
  //       <Sidebar isDarkMode={isDarkMode} />
  //       <Footer />
  //     </div>
  //   </div>
  // );

export default function WrappedApp() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}

