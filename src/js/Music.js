import React from 'react';
import SectionHeader from './SectionHeader';
import MusicComponent from './MusicComponent';
import '../css/Music.css';

const Music = props => {
    return (
    <>
    <div className="container" id="music">
        <SectionHeader name="music" />
        <p>
            these might be listenable
        </p>
    </div>
    
    {/*proudest tunes*/}
    <div className="row-padding row">
        <MusicComponent 
            name="To The Stars"
            link="https://youtu.be/1lV7kZ0kK4I"
            thumbnailURL="https://img.youtube.com/vi/1lV7kZ0kK4I/maxresdefault.jpg"
        />
        <MusicComponent 
            name="🌠 Jirachi fancam"
            link="https://youtu.be/UzN8eesCr0Q"
            thumbnailURL="https://img.youtube.com/vi/UzN8eesCr0Q/maxresdefault.jpg"
        />
        <MusicComponent 
            name="Pocket Full of Midnight"
            link="https://youtu.be/uLTnho1KAc0"
            thumbnailURL="https://img.youtube.com/vi/uLTnho1KAc0/maxresdefault.jpg"
        />
        <MusicComponent 
            name="Green Light"
            link="https://youtu.be/hPUq8_f6KyA"
            thumbnailURL="https://img.youtube.com/vi/hPUq8_f6KyA/mqdefault.jpg"
        />
    </div>

    {/*shitposts*/}
    <div className="container">
        <p>
            ...and here are some shitposts
        </p>
    </div>
    {/*row 1*/}
    <div className="row-padding row">
        {/* <MusicComponent 
            name="awoo 56709"
            link="https://youtu.be/HfFSQkahN2s"
            thumbnailURL="https://img.youtube.com/vi/HfFSQkahN2s/maxresdefault.jpg"
        /> */}
        {/* <MusicComponent 
            name="georgia"
            link="https://youtu.be/hGMMDJAObLA"
            thumbnailURL="https://img.youtube.com/vi/hGMMDJAObLA/maxresdefault.jpg"
        /> */}
        <MusicComponent 
            name="Mio Honda murder ASMR"
            link="https://youtu.be/e3oSIlUbGwA"
            thumbnailURL="https://img.youtube.com/vi/e3oSIlUbGwA/maxresdefault.jpg"
        />
        <MusicComponent 
            name="bread"
            link="https://youtu.be/MUv-eFAOV9M"
            thumbnailURL="https://img.youtube.com/vi/MUv-eFAOV9M/mqdefault.jpg"
        />
        <MusicComponent 
            name="Katy Perry - Plastic Bag"
            link="https://youtu.be/QqKL0LTUpi8"
            thumbnailURL="https://img.youtube.com/vi/QqKL0LTUpi8/mqdefault.jpg"
        />
        <MusicComponent 
            name="if catullus was a cringy rapper"
            link="https://youtu.be/WWTqLbZ0hs8"
            thumbnailURL="https://img.youtube.com/vi/WWTqLbZ0hs8/mqdefault.jpg"
        />
    </div>
    {/*row 2*/}
    <div className="row-padding row">
        {/* <MusicComponent 
            name="somebody toucha my spaghet (trap remix)"
            link="https://youtu.be/hJ1nb0TvlZo"
            thumbnailURL="https://img.youtube.com/vi/hJ1nb0TvlZo/mqdefault.jpg"
        /> */}
        {/* <MusicComponent 
            name="Humble but i got a hand on my gat"
            link="https://youtu.be/V1sZAGIooqM"
            thumbnailURL="https://img.youtube.com/vi/V1sZAGIooqM/mqdefault.jpg"
        /> */}
    </div>
    </>
    );
}

export default Music;