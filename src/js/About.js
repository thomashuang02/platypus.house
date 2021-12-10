import React from 'react';
import SectionHeader from './SectionHeader';
import '../css/About.css';

const About = props => {
    return (
        <div className="container" id="about">
            <SectionHeader name="about" />
            <div>
                I'm a computer science student at NYU and 
                an incoming software engineer at 
                {' '}
                <a className="hover-skyblue hover-no-underline pulsing-skyblue" 
                    href="https://datavant.com/" 
                    target="_blank" rel="noreferrer">
                    Datavant
                </a>.
            </div>
            <div className="row">
                <div className="col m4">
                <p>here, a list of things I make:</p>
                    <ul>
                        <li>cool software on my own</li>
                        <li>cool software with teammates</li>
                        <li>original music</li>
                        <li>mediocre baked goods</li>
                    </ul>
                </div>
                <div className="col m4">
                <p>and a list of things I break:</p>
                    <ul>
                        <li>not programming conventions (usually)</li>
                        <li>my max pullup PR, sometimes</li>
                        <li>it down ヾ(⌐■_■)ノ♪</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;