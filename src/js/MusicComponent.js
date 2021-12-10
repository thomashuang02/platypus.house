import React from 'react';

const MusicComponent = props => {
    return (
        <a className="col m3 margin-bottom" href={props.link} target="_blank" rel="noreferrer">
            <div className="music-entry">
                <img className="thumbnail" src={props.thumbnailURL} alt={props.name}/>
                <span className="music-label">{props.name}</span>
            </div>
        </a>
    );
}

export default MusicComponent;