import React from "react";

const InterestsButtons = (props: { switchView: any }) => {
  const { switchView } = props;

  return (
    <div className="buttonsContainer">
      <button
        onClick={() => switchView("Gaming")}
        className="buttonsContainer__button"
        data-testid="interests-button-gaming"
      >
        Gaming
      </button>
      <button
        onClick={() => switchView("Movies")}
        className="buttonsContainer__button"
        data-testid="interests-button-movies"
      >
        Movies
      </button>
      <button
        onClick={() => switchView("Science")}
        className="buttonsContainer__button"
        data-testid="interests-button-science"
      >
        Science
      </button>
    </div>
  );
};

export default InterestsButtons;
