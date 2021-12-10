import React from 'react';
import SectionHeader from './SectionHeader';
import '../css/Contact.css';

const Contact = props => {
    return (
    <div className="container" id="contact">
        <SectionHeader name="contact" />
        <form id="contact-form" action="https://script.google.com/a/gmail.com/macros/s/AKfycbwGiBNTI87pR5Y5uEQ20WHuSJ80Y7IstMFZBQ1otXby0jlj2WkPEFldFSPdjzD3soWI/exec" target="_blank" rel="noreferrer" method="POST">
            <div className="section">
                <input placeholder="name" className="input border" type="text" name="Name" required/>
            </div>
            <div className="section">
                <input placeholder="email" className="input border" type="email" name="Email" required/>
            </div>
            <div className="section">
                <textarea placeholder="a message for me" className="input border" rows="4" name="Message" required></textarea>
            </div>
            <button id="submit-contact" type="submit" className="sendMessageButton button block padding-large patapusteal">send it!</button>
        </form>  
        </div>
    );
}

export default Contact;