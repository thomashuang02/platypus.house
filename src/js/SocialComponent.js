import React from 'react';

const SocialComponent = props => {
    return (
        <td>
        <a href={props.link} target={props.stayOnPage ? "_self" : "_blank"}  rel="noreferrer">
            <button type="submit" className="socialButton button">
                <i className={`fa ${props.faClass} mini-icon`}></i>
                &nbsp;<b>{props.name}</b>
            </button>
        </a>
        </td>
    );
}

export default SocialComponent;