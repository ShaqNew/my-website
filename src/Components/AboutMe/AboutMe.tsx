import React from "react";
import './aboutMe.scss'


const AboutMe = () => {
    return(
        <section id="aboutme" className="AboutMe">
            <h1>About</h1>
            <h2>Hi! My name is Shaquille but everyone calls me Shaq</h2>
            <p>I created this website to give you an introduction to myself as a developer and a person</p>
            <p>I am a web developer born and raised in London with specialties in frontend development</p>
            <p>I learned computer science at the <a href="https://www.kent.ac.uk/courses/undergraduate/124">University of Kent</a></p>
        </section>
    )
}

export default AboutMe;