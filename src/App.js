// src/App.js
import React from "react";
import profilePic from "./assets/about-pic3.png";
import experienceIcon from "./assets/experience.png";
import emailIcon from "./assets/email.png";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github.png";
import educationIcon from "./assets/education.png";
import arrowIcon from "./assets/arrow.png";
import resume from "./assets/kimsresume.pdf";
import "./style.css";

function App() {
  const toggleMenu = () => {
    const menuLinks = document.querySelector(".menu-links");
    menuLinks.classList.toggle("active");
  };

  return (
    <div className="App">
      <nav id="desktop-nav">
        <div className="logo">Kimberly Boyle</div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Kimberly Boyle</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#resume" onClick={toggleMenu}>
                Resume
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={toggleMenu}>
                Education
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section id="profile">
        <div className="section__text">
          <h1 className="title">Kimberly Boyle</h1>
          <p className="section__text__p2">Front-End Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open(resume)}
            >
              Download Resume
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Information
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedinIcon}
              alt="My LinkedIn Profile"
              className="icon"
              onClick={() =>
                (window.location.href = "https://linkedin.com/kimberlymaeboyle")
              }
            />
            <img
              src={githubIcon}
              alt="My GitHub Profile"
              className="icon"
              onClick={() =>
                (window.location.href =
                  "https://github.com/kxmverly/cloudsurf-kim.git")
              }
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={profilePic} alt="Profile Picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={experienceIcon}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  1+ Months
                  <br />
                  Front-End Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src={educationIcon}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  BSBA, Information Systems
                  <br />
                  University of Nevada, Las Vegas
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello! I'm Kimberly Boyle, a junior Information Systems student
                at the University of Nevada, Las Vegas. With a passion for
                front-end development, I enjoy creating intuitive and engaging
                web experiences. I'm continually expanding my skills in HTML,
                CSS, JavaScript, and React, and I'm excited about the
                opportunities to innovate and solve problems in the tech
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="arrow-container">
          <a href="#experience">
            <img src={arrowIcon} alt="Arrow Icon" className="icon-arrow" />
          </a>
        </div>
      </section>
      <section id="education">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Education</h1>
        <div className="education-details-container">
          <h2 className="experience-sub-title">
            High School and Higher Education
          </h2>
          <p>
            I attended Northwest Career and Technical Academy from 2016 to 2020,
            where I was actively involved in Health Occupations Students of
            America (HOSA), focusing on health and medical science education.
            Following high school, I pursued a degree in Business and
            Information Systems at the University of Nevada, Las Vegas (UNLV),
            from 2020 to 2025. During my time at UNLV, I was a member of Alpha
            Xi Delta sorority from 2021 to 2023, participating in leadership,
            community service, and networking events. Additionally, I have been
            a member of the UNLV Management Information System Society since
            2024, engaging in activities that enhance my knowledge of
            information systems and allow me to network with professionals in
            the field.
          </p>
        </div>
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Front-End Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={experienceIcon}
                    alt="experience-icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="experience-icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="experience-icon"
                    className="icon"
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="experience-icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="experience-icon"
                    className="icon"
                  />
                  <div>
                    <h3>React</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="experience-icon"
                    className="icon"
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Back-End Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={experienceIcon}
                    alt="experience-icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={experienceIcon}
                    alt="experience-icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Basic</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow Icon"
          className="icon arrow"
          onClick={() => (window.location.href = "#projects")}
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailIcon}
              alt="Email icon"
              className="icon contact-icon"
            />
            <p>
              <a href="mailto:kxmverly@gmail.com">kxmverly@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img
                src={linkedinIcon}
                alt="Linkedin icon"
                className="icon contact-icon"
              />
              <p>
                <a href="https://www.linkedin.com">Linkedin</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
