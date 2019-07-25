import React, { Component } from "react";
import "./App.css";

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    userName: "John"
  };

  changedUserName = event => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Jerry" />

        <UserInput
          changedInput={this.changedUserName}
          inputValue={this.state.userName}
        />
      </div>
    );
  }
}

export default App;
