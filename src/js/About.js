import React from 'react';
import SectionHeader from './SectionHeader';
import '../css/About.css';

const About = props => {
    return (
        <div className="container" id="about">
            <SectionHeader name="about" />
            <div>
                I'm a recent NYU graduate and an incoming software engineer at 
                {' '}
                <a className="hover-skyblue hover-no-underline pulsing-skyblue" 
                    href="https://datavant.com/" 
                    target="_blank" rel="noreferrer">
                    Datavant
                </a>.
            </div>
            <div className="row">
                <div className="col m4">
                <p>things I make:</p>
                    <ul>
                        <li>cool software on my own</li>
                        <li>cool software with teammates</li>
                        <li>original music</li>
                        <li>mediocre baked goods</li>
                    </ul>
                </div>
                <div className="col m4">
                <p>things I break:</p>
                    <ul>
                        <li>(not) programming conventions</li>
                        <li>gym PRs</li>
                        <li>it down</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;