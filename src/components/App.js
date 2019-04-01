import React from "react";
import Card from "./Card";
import ToggleButton from "./ToggleButton";
import Text from "./Text";

class App extends React.Component {
  state = { appearance: "light" };

  changeColor = function(color) {
    this.setState({ appearance: color });
  };

  render() {
    return (
      <div className={`page_${this.state.appearance}`}>
        <Text />
        <div className="comp">
          <Card color={this.state.appearance} />
          <ToggleButton onClick={this.changeColor.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
