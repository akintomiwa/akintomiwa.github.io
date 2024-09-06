import React from 'react';
import myphoto from '../assets/images/Tomiwa-1.jpg';

function AboutMe() {
    return(
        <div>
            <h1>Hi there!</h1>
            <h4>My name is Akintomiwa and welcome to my front porch.
            </h4>
            <p>
                If people are what they've done for work,
                then you could consider me a software engineer, a data scientist, or a machine learning engineer.
            </p>
            <p>
                You could also call me a climate change scientist, or an visual artist and you wouldnt be entirely wrong either.
            </p>
            <p>
               My curiosity has led me down various paths, and I'm all the better for it.
            </p>
            <p>
                You can reach me at hello@cousinakin.com or using the form at the bottom of the page.
            </p>
            <img
                height={400}
                src={myphoto} alt="Photo of Akintomiwa" 
            />
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default AboutMe;

