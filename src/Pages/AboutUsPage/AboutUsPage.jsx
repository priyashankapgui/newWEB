import React from 'react';

function AboutUsPage(props) {
    return (
        <div>
            <h1>About Us
                
            </h1>
            <p>
                We are a group of developers who
                 are passionate about creating web applications. We are always looking for new projects to work on and new technologies to learn. We are excited to work with you on your next project. 
            </p>

            <span>
                Hello
                </span>
  <button onClick={() => props.history.push('/contact-us')}>Contact Us</button>

        </div>
    );
}

export default AboutUsPage;