import React from 'react';

const SectionHeader = props => {
    return (
        <>
        <h1 className="xxxlarge text-patapusteal">
            <a className="section-header" href={`#${props.name}`}><span><b>{props.name}</b></span></a>
        </h1>
        <hr className="round divider"/>
        </>
    );
}

export default SectionHeader;