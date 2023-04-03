import React, { useEffect } from "react";
import Animals from "./Animals/Animals";
import Gaming from "./Gaming/Gaming";
import Movies from "./Movies/Movies";
import Science from "./Science/Science";

const InterestsDisplay = (props: { view: string }) => {
  const { view } = props;

  const displayView = () => {
    switch (view) {
      case "Gaming":
        return <Gaming />;
      case "Movies":
        return <Movies />;
      case "Science":
        return <Science />;
      case "Animals":
        return <Animals />;
      default:
        return null;
    }
  };

  return (
    <div className="displayContainer">
      {displayView() ? (
        displayView()
      ) : (
        <div className="defaultView">
          <h2>default view</h2>
          <p>
            I have many passions and interests that keep me engaged and excited
            about life!
          </p>
          <p>
            For one, I absolutely love <b>tech</b> and am always eager to learn
            about the latest advancements.{" "}
          </p>
          <p>
            I'm also a <b>huge animal lover</b>, especially <b>dogs</b>, and I
            find myself constantly fascinated by their unique behaviours and
            personalities.
          </p>
          <p>
            More recently I've found new interest in <b>traveling</b> and gaining new
            insight into different regions and cultures around the world. I also
            like <b>comics, shows, expansive stories</b> and any media that allows my
            imagination to run wild.
          </p>
          <p>
            I could write about the things I love all day so I decided to
            create small sections for a few of my favourite things
          </p>
          <p>
            Overall, I have a diverse range of interests, that keep me
            constantly learning, exploring, and finding new sources of
            inspiration in the world around me!
          </p>
        </div>
      )}
    </div>
  );
};

export default InterestsDisplay;
