import React from 'react';

const ProjectComponent = props => {
    if(props.filler) {
        return <div className="col m4 margin-bottom" />
    }
    else {
        return (
        <div className="col m4 margin-bottom">
            <div className="light-grey round-bottom project-container">
                { props.imageURL ? <img className="project-pic" src={props.imageURL} alt={props.name}/> : null }
                { props.videoSrc ? 
                    <div className='project-video-container'>
                        <video autoPlay muted loop id='wish-animation'>
                            <source src={props.videoSrc} type='video/mp4' />
                        </video>
                    </div>
                     : null }
                <div className="container">
                    <h3>{props.name}</h3>
                    <p className="gray-text">
                        { props.date &&
                            <>
                            {props.date}<br/> 
                            </> }
                        { props.deployedLink &&
                            <>
                            deployed <a className="hover-teal hover-no-underline pulsing-teal" href={props.deployedLink} target="_blank" rel="noreferrer">here</a><br/>
                            </> }
                        { props.githubLink &&
                            <>
                            view on <a className="hover-teal hover-no-underline pulsing-teal" href={props.githubLink} target="_blank" rel="noreferrer">Github</a><br/>
                            </> }
                        { props.youtubeLink &&
                            <>
                            view on{' '}
                            <a className="hover-red hover-no-underline pulsing-red" href={props.youtubeLink} target="_blank" rel="noreferrer">YouTube</a><br/>
                            </> }
                    </p>
    
                    {props.children}
    
                </div>
            </div>
        </div>
        );
    }
}

export default ProjectComponent;