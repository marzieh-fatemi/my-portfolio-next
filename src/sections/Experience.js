import Link from "next/link";
import React, { useState, useEffect } from "react";

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector(".underline");
      underline.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);
  const experience = [
    {
      name: "mizangostarElm&Danesh",
      role: "frontendDeveloper",
      url: "https://mizangostar.com/",
      start: "November 22, 2021",
      end: "August 23, 2022",
      shortDiscription: ["HTML", "CSS","SCSS","JS","REACT","MUI"],
    },
    {
      name: "Hamiket",
      role: "frotendDeveloper",
      url: "",
      start: "January 21, 2023",
      end: "",
      shortDiscription: ["HTML", "CSS","SCSS","JS","REACT","MUI","TypeScript","Redux","React Hook Form","Next"],
    },
  ];
  return (
    <div className="experience" id="experience">
      <div className="title">
        <h2>where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experience.map((experience, index) => {
            return (
              <li
                key={index}
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
              >
                <span>{experience.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3 style={{ marginBottom: "10px" }}>
              <span>{experience[selected].role}</span>
              <span className="exp-details-position-compani">
                &nbsp;@&nbsp;
                <Link className="link" href={experience[selected].url}>
                  {experience[selected].name}
                </Link>
              </span>
            </h3>
            <p style={{ fontSize: "12px" }} className="exp-details-range">
              start: {experience[selected].start}
            </p>
            <p style={{ fontSize: "12px" }} className="exp-details-range">
              end:{experience[selected].end}
            </p>
            <ul className="exp-details-list">
              {experience[selected].shortDiscription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
