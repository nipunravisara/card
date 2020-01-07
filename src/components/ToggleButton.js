import React from "react";
import "../index.css";

class ToggleButton extends React.Component {
  render() {
    return (
      <>
        <div className="ToggleSet">
          <button
            className="toggle-btn01"
            onClick={e => this.props.onClick("light")}
          >
            Light
          </button>
          <button
            className="toggle-btn02"
            onClick={e => this.props.onClick("dark")}
          >
            Dark
          </button>
        </div>
      </>
    );
  }
}

export default ToggleButton;
