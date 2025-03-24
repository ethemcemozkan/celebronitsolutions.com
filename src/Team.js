import React from "react";
import Card from "./Card";
import cem from "./Pictures/ethemcemozkan.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Team() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Team</h1>
      </div>
      <main className="p-8 text-gray-800">
        <div className="flex justify-end ">
          <Card title="Ethem Cem Özkan" imgsrc={cem} text="Director/DevOps Engineer" layout="horizontal" roundImg={true} >
            <div className="flex flex-col justify-center px-6">
              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="https://ethemcemozkan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                >
                  <FontAwesomeIcon icon={faGlobe} /> CV
                </a>
                <a
                  href="https://linkedin.com/in/ethemcemozkan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info btn-sm d-flex align-items-center gap-2"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a
                  href="mailto:cem.ozkan@celebronitsolutions.com"
                  className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2"
                >
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </a>
              </div>

              <p className="text-lg text-gray-700 mt-4 text-left max-w-lg">
             The Director and a Senior DevOps Engineer at Celebron IT Solutions, with over 10 years of hands-on experience in cloud infrastructure, automation, and platform modernisation. I help organisations design and implement robust, scalable solutions using AWS, Azure, Terraform, Ansible, Kubernetes, and CI/CD practices.
             </p>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}