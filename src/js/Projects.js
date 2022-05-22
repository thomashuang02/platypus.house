import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import ProjectComponent from './ProjectComponent';
import '../css/Projects.css';
import axios from 'axios';
import wishAnimation from '../videos/multi_5-star_wish.mp4';

const Projects = props => {
    const monthMap = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }
    const formatDate = (rawDate) => {
        const dateObj = new Date(rawDate);
        const month = monthMap[dateObj.getMonth()];
        const date = dateObj.getDate();
        const year = dateObj.getFullYear();
        return `${month} ${date}, ${year}`;
    }
    const [lastUpdated, setLastUpdated] = useState("December 12, 2021");
    const getModifiedDate = async () => {
        try {
            const res = await axios.get("https://api.github.com/repos/thomashuang02/website/branches/gh-pages");
            const rawDate = res.data.commit.commit.committer.date;
            setLastUpdated(formatDate(rawDate));
        }
        catch(e) {
            setLastUpdated("December 12, 2021");
        }
    }
    useEffect(() => {
        getModifiedDate();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
        <div className="container" id="projects">
            <SectionHeader name="projects" />
            <p>
                learning by doing.
            </p>
        </div>

        {/*row 1*/}
        <div className="row-padding row">
            <ProjectComponent 
                imageURL="./images/projects/movie-genre-classification.png"
                name="classifying movie genres using summaries"
                date="May 2022"
                githubLink="https://github.com/thomashuang02/nlp-movie-genre-classification"
            >
                <p>
                    NLP team project with <a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/CozyHome" target='_blank' rel="noreferrer">Daniel Cucuzza</a> and <a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/zer0key123" target='_blank' rel="noreferrer">Illia Borzov</a>.
                </p>
                <p>
                    I built and refined our engineering pipeline, and was also heavily involved in research, evaluation, and documentation. 
                    Code and paper with findings on Github.
                </p>
            </ProjectComponent>
            <ProjectComponent 
                videoSrc={wishAnimation}
                name="gachasim"
                date="On Hold"
                githubLink="https://github.com/thomashuang02/gachasim"
            >
                <p>
                    A gacha simulator for (eventually) various popular gacha games; all the dopamine without any of the 
                    grinding or whaling.
                </p>
                <p>
                    Good headway on one-to-one recreation of the Genshin Impact wish menu, lacking only rolling logic and wish summary displays. Project on hold as my interest in the game has waned.
                </p>
            </ProjectComponent>
            <ProjectComponent 
                imageURL="./images/projects/all-in-poker.png"
                name="All-In Poker"
                date="December 2021"
                deployedLink="https://allinpoker.app/"
                githubLink="https://github.com/software-students-fall2021/project-setup-beizhang-discrete"
            >
                <p>
                    A poker web app for a Scrum team project. 
                    Built on the MERN stack, 
                    CI using CircleCI,
                    deployed on Digital Ocean.
                </p>
                <p>
                    Credit to my teammates: 
                    {' '}<a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/B-Pasteelnick" target='_blank' rel="noreferrer">Ben Pasteelnick</a>,
                    {' '}<a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/EricXiaoYang" target='_blank' rel="noreferrer">Eric Yang</a>,
                    {' '}<a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/oooscarrr" target='_blank' rel="noreferrer">Oscar Xue</a>, and
                    {' '}<a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/owen-boop" target='_blank' rel="noreferrer">Owen Wahlgren</a>.
                </p>
            </ProjectComponent>
        </div>
        {/*row 2*/}
        <div className="row-padding row">
            <ProjectComponent 
                imageURL="./images/projects/showstop.png"
                name="Showstop"
                date="November 2021"
                deployedLink="https://showstop.herokuapp.com/"
                githubLink="https://github.com/thomashuang02/Showstop"
            >
                <p>
                    A film- and TV-cataloging web app for users to manage a list of the various shows 
                    and movies they've watched, along with details like watching progress, ratings, and notes.
                    Includes various sorting and filtering functionalities.
                </p>
            </ProjectComponent>
            <ProjectComponent 
                imageURL="./images/patapuspfp.png"
                name="personal website"
                date={`last updated ${lastUpdated}`}
                githubLink="https://github.com/thomashuang02/website"
            >
                <p>
                    Pushing my previously-zero front-end limits. 
                    Personal info, project showcases, a does-the-job contact form. Static HTML generated using React.
                </p>
                <p>Logo artist:{' '}
                    <span className='ig-link pulsing-pink'>
                        <i className="fa fa-instagram ig-logo"></i>{' '}
                        <a className="hover-pink hover-no-underline" href='https://www.instagram.com/mangonino/?hl=en' target='_blank' rel="noreferrer">mangonino</a>
                    </span>
                </p>
            </ProjectComponent>
            <ProjectComponent 
                imageURL="./images/projects/dataprophet-detect.png"
                name="time-series anomaly detection"
                date="August 2021"
                githubLink="https://github.com/thomashuang02/LSTM-Autoencoder-for-Time-Series-Anomaly-Detection/blob/main/lstm_autoencoder.ipynb"
            >
                <p>
                    Product of my DataProphet internship. Multivariate LSTM autoencoder using Keras; 
                    attempts to reconstruct compressed time-series input to visualize and suggest potential anomalies.
                </p>
            </ProjectComponent>
        </div>
        {/*row 3*/}
        <div className="row-padding row">
            <ProjectComponent 
                imageURL="./images/projects/global-vaccination.png"
                name="forecasting covid-19 vaccination rates"
                date="July 2021"
                githubLink="https://github.com/thomashuang02/iX-covid-19-project/blob/main/Covid-19%20Vaccinations%20Analysis.ipynb"
            >
                <p>
                    Examined vaccination statistics globally and regionally;
                    tried linear regression vs FBProphet for predicting when 
                    a given country would reach a percentage threshold for people vaccinated.
                </p>
            </ProjectComponent>
            <ProjectComponent 
                imageURL="./images/projects/moon-and-stars.png"
                name="♫ TO THE STARS"
                date="April 2021"
                youtubeLink="https://youtu.be/1lV7kZ0kK4I"
            >
                <p>
                    A song about a lonely whale and the solace she finds in the night sky. 
                    Shoutouts to various Madeon samples, FL Studio 12, and my Google Doc full of lyric drafts.
                </p> 
                <p>
                    Art and animation by{' '}
                    <span className='ig-link pulsing-pink'>
                        <i className="fa fa-instagram ig-logo"></i>{' '}
                        <a className="hover-pink hover-no-underline" href='https://www.instagram.com/mangonino/?hl=en' target='_blank' rel="noreferrer">mangonino</a>
                    </span>
                </p>
            </ProjectComponent>
            <ProjectComponent 
                imageURL="./images/projects/course-registration.jpg"
                name="university course registration system"
                date="February 2020"
                githubLink="https://github.com/thomashuang02/University-Course-Registration-System"
            >
                <p>
                    Designed a university course registration system in Java for 
                    creation, deletion, and manipulation of course and user-login information. 
                    Supports serialization to save and reload data.
                </p> 
            </ProjectComponent>
        </div>
        {/* <ProjectComponent filler={true}/> */}
        </>
    );
}

export default Projects;