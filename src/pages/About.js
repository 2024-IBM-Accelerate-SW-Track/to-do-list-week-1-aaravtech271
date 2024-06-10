import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/aarav.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile}
              alt="Profile Pic"
            />
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Aarav Joglekar</div>
            <div className="brief_description">
              Hi, I'm Aarav Joglekar, a computer science major at Georgia Tech with a passion
              for machine learning, especially in finance. I love playing tennis, honing my poker 
              skills, teaching others, and indulging in amazing culinary experiences. I'm known
              for being calm, composed, detail-oriented, and efficient. Whether I'm diving into 
              complex algorithms or enjoying a lighthearted game of cards, I always bring a sharp
              sense of humor and an approachable personality to everything I do.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
