import React from "react";

const Result = () => {
  return (
    <div className="ResultBg">
      <div className="ResultHeading">
        <h1 className="RH">Result</h1>
      </div>

      <div className="result-container">
        <div className="result-content">
          <div className="score-info">
            <h2>You need more practice!</h2>
            <h1 className="blue">Your score is 20%</h1>
            <h2>Total number of questions: 15</h2>
            <h2>Attempted questions: 5</h2>
            <h2>Correct answers: 2</h2>
            <h2>Wrong answers: 3</h2>
          </div>
        </div>
      </div>
      <div className="result-controls">
        <button className="play-again-button">Play Again</button>
        <button className="back-home-button">Back to Home</button>
      </div>
    </div>
  );
};

export default Result;
