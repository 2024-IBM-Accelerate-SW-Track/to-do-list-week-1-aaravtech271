import React, { Component } from 'react';
import "./About.css";
import aarav from "../assets/aarav.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={aarav}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Aarav Joglekar</div>
            <div className="brief_description">
              <p>Interests: working out, ice skating, travel, food</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
