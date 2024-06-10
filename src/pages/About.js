import React, { Component } from 'react';
import "./About.css";
import profilePic from "../assets/aarav.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profilePic}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Your Name</div>
            <div className="brief_description">
              {/* Details about you go here */}
              <p>Interests: Playing lots of cricket, eating amazing food, talking to new people!</p>
              <p>Fun Fact: I lived in amsterdam for 6 months!</p>
              <p>Hobbies: Playing cricket and stealing all your money at the poker table</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
