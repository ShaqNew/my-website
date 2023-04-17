import React from "react";

const AboutMeText = () => {
  return (
    <div className="AboutMeText">
      <h2>
        My name is Shaquille but everyone calls me <span>SHAQ</span>
      </h2>
      <p>
        I am a web developer born and raised in London with specialties in
        frontend development and experience in e-commerce
      </p>
      <p>
        I studied computer science and acheived a first at the{" "}
        <a
          className="AboutMeText__Link"
          href="https://www.kent.ac.uk/courses/undergraduate/124"
        >
          University of Kent
        </a>
      </p>
      <p>
        I have worked on projects for brands such as{" "}
        <a className="AboutMeText__Link" href="https://www.calvinklein.co.uk/">
          Calvin Klein
        </a>,{" "}
        <a className="AboutMeText__Link" href="https://uk.tommy.com/">
        Tommy Hilfiger
        </a>, and{" "}
        <a className="AboutMeText__Link" href="https://uk.tempur.com/mattresses/">
        Tempur Mattress
        </a>
      </p>
    </div>
  );
};

export default AboutMeText;
