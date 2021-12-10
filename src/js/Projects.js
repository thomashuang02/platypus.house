import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectComponent from './ProjectComponent';
import '../css/Projects.css';

const Projects = props => {
    return (
        <>
        <div className="container" id="projects">
            <SectionHeader name="projects" />
            <p>
                learning by doing, an endlessly{' '}
                <strike>frustrating</strike>{' '}
                fulfilling journey.
            </p>
        </div>

        {/*row 1*/}
        <div className="row-padding row">
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
                date="last updated December 9, 2021"
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
        </div>
        {/*row 2*/}
        <div className="row-padding row">
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
        </div>
        {/*row 3*/}
        <div className="row-padding row">
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
            <ProjectComponent filler={true}/>
            <ProjectComponent filler={true}/>
        </div>
        </>
    );
}

export default Projects;