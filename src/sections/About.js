import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            My name is Marzieh, and I am passionate programming.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I have been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">SCSS</li>
            <li className="about-grid-info-list-item">Bootstrap</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Hook Form</li>
            <li className="about-grid-info-list-item">Redux</li>
            <li className="about-grid-info-list-item">MUI</li>
            <li className="about-grid-info-list-item">Next</li>
            <li className="about-grid-info-list-item">git</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/446517566_434394.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
