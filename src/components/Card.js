import React, { Component } from "react";
import profile from "../assets/profile.jpg";
import "../index.css";

class card extends Component {
  render() {
    return (
      <>
        <div className={`card_${this.props.color}`}>
          <div className="frame">
            <img className="profile" src={profile} alt="profile" />
          </div>
          <div>
            <h4 className={`name_${this.props.color}`}>RavisaraDev</h4>
            <p className="designation">UI/UX Designer</p>
            <a className="card-button" target="_blank" href="https://twitter.com/ravisaradev">
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
