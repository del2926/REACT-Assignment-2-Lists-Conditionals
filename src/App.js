import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput: "",
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const style = {
      marginTop: "30px",
      border: "2px solid blue",
    };
    const charList = this.state.userInput.split("").map((c, index) => {
      return (
        <Char chr={c} key={index} click={() => this.deleteCharHandler(index)} />
      );
    });
    return (
      <div className="App">
        <input
          type="text"
          style={style}
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
