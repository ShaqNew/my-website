import React from "react";
import { Parallax } from "react-scroll-parallax";

const AboutMeText = () => {
  return (
    <div className="AboutMeText">
      <h2>
        My name is Shaquille but everyone calls me <span>SHAQ</span>
        {/* <Parallax
          easing={"easeInOutSine"}
          startScroll={1}
          endScroll={800}
          // translateX={[-150, 0, "easeOutQuint"]}
          scale={[.5,1]}
        >
          SHAQ
        </Parallax> */}
      </h2>
      <p>
        I am a web developer born and raised in London with specialties in
        frontend development and experience in e-commerce
      </p>
      <p>
        I studied computer science at the{" "}
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
