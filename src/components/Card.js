import React, { Component } from "react";
import profile from "../assets/profile.png";
import "../Index.css";

class card extends Component {
  render() {
    return (
      <>
        <div className={`card_${this.props.color}`}>
          <div className="frame">
            <img className="profile" src={profile} alt="profile" />
          </div>
          <div>
            <h4 className={`name_${this.props.color}`}>Bethany Ava</h4>
            <p className="designation">UI/UX Designer</p>
            <a className="card-button" href="#">
              Follow
            </a>
            <div className="togggle" />
          </div>
        </div>
      </>
    );
  }
}

export default card;
