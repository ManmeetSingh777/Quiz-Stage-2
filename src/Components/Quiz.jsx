import React, { Component } from "react";
import Data from "../resources/quizQuestion.json";

class QuizComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  clickPrev = () => {
    let ques = this.state.count === 0 ? Data.length - 1 : this.state.count - 1;
    this.setState({
      count: ques,
    });
  };

  clickNext = () => {
    let ques = this.state.count === Data.length - 1 ? 0 : this.state.count + 1;
    this.setState({
      count: ques,
    });
  };

  clickQuit = () => {
    window.confirm("Are you sure that you want to quit ?");
  };

  render() {
    return (
      <div className="main">
        <div className="Box">
          <h1>Question</h1>
          <div className="no">
            {this.state.count + 1} of {Data.length}
          </div>
          <div className="ques">{Data[this.state.count].question}</div>

          <div className="options-container">
            <div className="side1">
              <div className="option">{Data[this.state.count].optionA}</div>
              <div className="option">{Data[this.state.count].optionB}</div>
            </div>
            <div className="side2">
              <div className="option">{Data[this.state.count].optionC}</div>
              <div className="option">{Data[this.state.count].optionD}</div>
            </div>
          </div>

          <div className="quiz-controls">
            <button className="prev-button" onClick={this.clickPrev}>
              Previous
            </button>
            <button className="next-button" onClick={this.clickNext}>
              Next
            </button>
            <button className="quit-button" onClick={this.clickQuit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
