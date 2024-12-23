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
            <SectionHeader name="coding projects" />
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
                    NLP team research project with <a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/CozyHome" target='_blank' rel="noreferrer">Daniel Cucuzza</a> and <a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/zer0key123" target='_blank' rel="noreferrer">Illia Borzov</a>.
                    Code and paper with findings on Github.
                </p>
            </ProjectComponent>
            <ProjectComponent 
                videoSrc={wishAnimation}
                name="gachasim"
                date="February 2022"
                githubLink="https://github.com/thomashuang02/gachasim"
            >
                <p>
                    I had a Genshin Impact phase and tried to recreate the game's wish menu, including all the animations. 
                    Got pretty close to one-to-one (lacking only rolling logic and wish result displays), but then I stopped playing the game :^)
                </p>
            </ProjectComponent>
            <ProjectComponent 
                imageURL="./images/projects/all-in-poker.png"
                name="All-In Poker"
                date="December 2021"
                // deployedLink="https://allinpoker.app/"
                githubLink="https://github.com/software-students-fall2021/project-setup-beizhang-discrete"
            >
                <p>
                    A poker web app for a team project. 
                    Built on the MERN stack, 
                    CI using CircleCI,
                    deployed on Digital Ocean.
                </p>
                <p>
                    My teammates: 
                    {' '}<a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/B-Pasteelnick" target='_blank' rel="noreferrer">Ben Pasteelnick</a>,
                    {' '}<a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/EricXiaoYang" target='_blank' rel="noreferrer">Eric Yang</a>,
                    {' '}<a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/oooscarrr" target='_blank' rel="noreferrer">Oscar Xue</a>, and
                    {' '}<a className="hover-teal hover-no-underline pulsing-teal" href="https://github.com/owen-boop" target='_blank' rel="noreferrer">Owen Wahlgren</a>.
                </p>
            </ProjectComponent>
            <ProjectComponent 
                imageURL="./images/projects/showstop.png"
                name="Showstop"
                date="November 2021"
                // deployedLink="https://showstop.herokuapp.com/"
                githubLink="https://github.com/thomashuang02/Showstop"
            >
                <p>
                    A web app for users to catalogue the films and TV shows they watch, along with details like episode progress, ratings, and notes.
                </p>
            </ProjectComponent>
        </div>
        {/*row 2*/}
        <div className="row-padding row">
            <ProjectComponent 
                imageURL="./images/patapuspfp.png"
                name="platypus.house"
                date={`last updated ${lastUpdated}`}
                githubLink="https://github.com/thomashuang02/website"
            >
                <p>This page!</p>
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
                    Built a multivariate LSTM autoencoder that reconstructs compressed time-series data to visualize patterns and suggest potential anomalies in industrial manufacturing machines 🤓
                </p>
            </ProjectComponent>
            <ProjectComponent 
                imageURL="./images/projects/global-vaccination.png"
                name="forecasting covid-19 vaccination rates"
                date="July 2021"
                githubLink="https://github.com/thomashuang02/iX-covid-19-project/blob/main/Covid-19%20Vaccinations%20Analysis.ipynb"
            >
                <p>
                    Examined vaccination statistics globally and regionally;
                    compared various models for predicting when 
                    a given country would reach a percentage threshold for people vaccinated.
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
                </p> 
            </ProjectComponent>
        </div>
        {/* <ProjectComponent filler={true}/> */}
        </>
    );
}

export default Projects;