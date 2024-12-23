import React from 'react';

const SmallScreenOverlay = props => {
    return (
        <div id="my-overlay" className="overlay hide-large" onClick={()=>props.closeSidebar()} title="close side menu"></div>
    );
}

export default SmallScreenOverlay;