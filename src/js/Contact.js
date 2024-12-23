import React, {useState} from 'react';
import SectionHeader from './SectionHeader';
import '../css/Contact.css';
import axios from 'axios';


const Contact = props => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [mysteriousCondition, setmysteriousCondition] = useState(false);
    const togglemysteriousCondition = () => {
        setmysteriousCondition(!mysteriousCondition);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const submitButtonContainer = document.getElementById("submit-button-container");
        submitButtonContainer.classList.add("loading");

        const sendEmailScriptURL = "https://script.google.com/macros/s/AKfycbzXqbfS091KBi-l-PzREsqox4NJtL1_8utGevBmK88tpFoo5id6ZmFnMyEtgmRsQwja/exec";

        const postFormData = async formData => {
            const response = await axios({
                method: "POST",
                url: sendEmailScriptURL,
                headers: { "content-type": "multipart/form-data" },
                data: formData
            });
            submitButtonContainer.classList.remove("loading");
            alert(response.data);
        }
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("message", message);
            formData.append("mystery", mysteriousCondition);
            await postFormData(formData);
        }
        catch(error) {
            submitButtonContainer.classList.remove("loading");
            alert(`Error: ${error}`);
        }
    }
    return (
    <div className="container" id="contact">
        <SectionHeader name="contact" />
        <form id="contact-form" onSubmit={e=>handleSubmit(e)}>
            <div className="section">
                <input placeholder="your name" className="input border" type="text" name="Name" value={name} onChange={e=>setName(e.target.value)} required/>
            </div>
            <div className="section">
                <input placeholder="your email" className="input border" type="email" name="Email" value={email} onChange={e=>setEmail(e.target.value)} required/>
            </div>
            <div className="section">
                <textarea placeholder="your message" className="input border" rows="4" name="Message" value={message} onChange={e=>setMessage(e.target.value)} required></textarea>
                </div>
            <div className="section">
                <label className="checkbox-container">
                    <input id="contact-condition" type="checkbox" checked={mysteriousCondition} onChange={()=>togglemysteriousCondition()}/>
                    <span className="checkmark"></span>
                </label>
                <label className="checkbox-label" htmlFor="contact-condition">check to do nothing whatsoever</label>
            </div>
            <div id="submit-button-container">
                <button id="submit-contact" type="submit" className="sendMessageButton button block padding-large patapusteal"></button>
                <div className="loader"></div>
            </div>
        </form>  
        </div>
    );
}

export default Contact;