import React from "react";
import { NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row col-sm-12 col-lg-9">
        <li className="flex-sm-fill text-sm-center">
          <NavLink
          exact
            to="/"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            About
          </NavLink>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/portfolio"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/skill"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Skill
          </NavLink>
          <br />
          <br />
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Contact
          </NavLink>
        </li>
        <a
          className="flex-sm-fill text-sm-center nav-link resume"
          href={require("../assets/images/resume.pdf")}
        //   onClick={() => window.open("../assets/images/jane-doe-resume.pdf")}
        //   href={Resume}
        // onClick={() => window.open(Resume)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/resume-icon.PNG")}
            alt="resume"
            height="28"
            width="28"
            className="resume"
          />
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          href="https://github.com/metasabeya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/GitHub-icon.png")}
            alt="GitHub"
            height="30"
            width="30"
            className="github"
          />
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          href="https://linkedin.com/in/metasebeya-ketsela-68138b18b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/linkdin.png")}
            alt="Linkedin"
            height="30"
            width="29"
            className="linkedin"
          />
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/mail.jpg")}
            alt="Mail"
            height="30"
            width="30"
            className="Email"
          />
        </a>
    </nav>
  );
}

export default Navbar;
