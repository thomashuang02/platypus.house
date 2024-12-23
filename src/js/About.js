import React from 'react';
import SectionHeader from './SectionHeader';
import '../css/About.css';

const About = _props => {
    return (
        <div className="container" id="about">
            <SectionHeader name="about" />
            <div className="row">
                <div className="col m4">
                <p>what I'm trying:</p>
                    <ul>
                        <li>starting a career in psychology</li>
                        <li>j-rock drumming</li>
                        <li>becoming a competent cook</li>
                        <li>running an asthmatic 8-minute mile</li>
                        <li>100-percenting Cyberpunk 2077</li>
                    </ul>
                </div>
                <div className="col m4">
                <p>what I tried and accomplished:</p>
                    <ul>
                        <li>becoming good enough at piano</li>
                        <li>225 bench, muscle-up</li>
                    </ul>
                </div>
                <div className="col m4">
                <p>what I'm glad I tried anyway:</p>
                    <ul>
                        <li>a software career</li>
                        <li>making original music</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;