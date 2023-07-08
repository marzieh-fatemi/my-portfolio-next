import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function Projects() {
  const projectsData = [
    {
      image: "/Screenshot (1).png",
      projectName: "NewsGrid",
      projectLink: "https://gentle-alfajores-ca36db.netlify.app/index.html",
      projectDescription:
        "this is a web application that uses the html, css,scss",
      projectTech: ["HTML", "CSS", "SCSS"],
      projectExternalLinks: {
        github: "https://github.com/marzieh-fatemi/news-grid",
        externalLink: "https://gentle-alfajores-ca36db.netlify.app/index.html",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <div className="title">
        <h2>Some Things I&apos;ve Built</h2>
      </div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <div className="project" key={projectName}>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">
                    <Link href={projectLink}>{projectName}</Link>
                  </h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
