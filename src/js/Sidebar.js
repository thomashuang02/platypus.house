import React from 'react';

const Sidebar = props => {
    const close = props.close;
    return (
        <nav id="my-sidebar" className="sidebar patapusteal collapse top large padding">
            <button id="close-sidebar" onClick={()=>close()} className="button hide-large display-topleft">close</button>
            <a id="logo-and-title-link" href="https://platypus.house/">
                <div id="logo-and-title" className="container">
                <h3>
                    <img src='./images/patapuspfp.png' alt='patapus' className='logo' />
                    <b>{props.title}</b>
                </h3>
                </div>
            </a>

            <div className="bar-block">
                <div id="mode-toggle-button" onClick={()=>props.themeToggle()}>
                    <span id="mode">阳</span>
                </div>
                <a href="#home" onClick={()=>close()} className="bar-item button hover-light-teal">home</a> 
                <a href="#about" onClick={()=>close()} className="bar-item button hover-light-teal">about</a> 
                <a href="#projects" onClick={()=>close()} className="bar-item button hover-light-teal">projects</a> 
                <a href="#music" onClick={()=>close()} className="bar-item button hover-light-teal">music</a> 
                <a href="#canvas" onClick={()=>close()} className="bar-item button hover-light-teal">canvas</a> 
                <a href="#contact" onClick={()=>close()} className="bar-item button hover-light-teal">contact</a>
            </div>
        </nav>
    )
}

export default Sidebar;