import React from 'react';
import Greeting from './Greeting';
import Canvas from './Canvas';
import About from './About';
import Socials from './Socials';
import Projects from './Projects';
import Music from './Music';
import Contact from './Contact';

const Main = props => {
    return (
    <div className="main" id="home">
        <div className="sidebar-spacer"></div>
        <div id="main-content" className="max-width">
            <Greeting />
            <About />
            <Socials />
            <Projects />
            <Music />
            <Canvas />
            <Contact />
        </div>
      </div>
    );
}

export default Main;