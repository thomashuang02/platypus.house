import React from 'react';
import '../css/Greeting.css';

const Greeting = props => {
    return (
        <div className="container padding-top-80">
            <h1 className="jumbo"><b>hey</b></h1>
            <p>This is Thomas's website. Stay for a cookie, if you have those enabled</p>
            <p class="mobile-textbox">Sorry, this page is poorly optimized for small screens like yours 😿</p>
        </div>
    );
}

export default Greeting;