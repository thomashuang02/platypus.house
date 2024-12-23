import React from 'react';
import SocialComponent from './SocialComponent';
import '../css/Socials.css';

const Socials = props => {
    return (
        <div className="container socials-container" id="socials">
            <p>note: my resume really needs an update. coming soon</p>
            <table className="buttons">
            <tbody>
              <tr>
                {/* <SocialComponent 
                    name="LinkedIn"
                    faClass="fa-linkedin"
                    link="https://www.linkedin.com/in/thomashuang02/"
                />
                <SocialComponent 
                    name="GitHub"
                    faClass="fa-github"
                    link="https://github.com/thomashuang02"
                />
                <SocialComponent 
                    name="YouTube"
                    faClass="fa-youtube-play"
                    link="https://www.youtube.com/patapus"
                />
                <SocialComponent 
                    name="Email"
                    faClass="fa-envelope"
                    link="#contact"
                    stayOnPage={true}
                /> */}
                <SocialComponent 
                    name="Resume"
                    faClass="fa-file-text"
                    link="https://docs.google.com/viewer?url=https://platypus.house/media/Thomas_Huang_Resume.pdf"
                />
              </tr>
            </tbody>
            </table>
        </div>
    );
}

export default Socials;