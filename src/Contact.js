import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Get in Touch</h1>
      <div className="text-center">
        <p className="lead">Feel free to reach out via email or connect on LinkedIn:</p>
        <div className="d-flex flex-column align-items-center gap-3 mt-4">
          <a
            href="mailto:contact@celebronitsolutions.com"
            className="btn btn-outline-primary d-flex align-items-center gap-2"
          >
            <FontAwesomeIcon icon={faEnvelope} /> contact@celebronitsolutions.com
          </a>
          <a
            href="https://www.linkedin.com/company/celebron-it-solutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info d-flex align-items-center gap-2"
          >
            <FontAwesomeIcon icon={faLinkedin} /> Celebron IT Solutions on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}