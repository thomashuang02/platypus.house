import React from 'react';

const SmallScreenHeader = props => {
    return (
        <header className="container top hide-large patapusteal xlarge padding">
            <button className="button patapusteal margin-right" onClick={()=>props.openSidebar()}>☰</button>
            <span>{props.title}</span>
        </header>
    );
}

export default SmallScreenHeader;