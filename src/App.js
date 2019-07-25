import React, { Component } from "react";
import "./App.css";

import ValidateComponent from "./ValidateComponent/ValidateComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    inputValue: ""
  };

  clickOnLetterHandler = index => {
    const lettersArray = this.state.inputValue.split("");

    lettersArray.splice(index, 1);
    const newInputValue = lettersArray.join("");
    this.setState({
      inputValue: newInputValue
    });
  };

  render() {
    let charComponents = null;

    if (this.state.inputValue.length > 0) {
      charComponents = this.state.inputValue.split("").map((char, index) => {
        return (
          <CharComponent
            letter={char}
            key={char + index}
            click={() => {
              this.clickOnLetterHandler(index);
            }}
          />
        );
      });
    }

    return (
      <div className="App">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={event => {
            this.setState({ inputValue: event.target.value });
          }}
        />
        <p>{this.state.inputValue.length}</p>
        <ValidateComponent text={this.state.inputValue} />
        {charComponents}
      </div>
    );
  }
}

export default App;
