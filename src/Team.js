import React from "react";
import Card from "./Card";
import cem from "../src/Pictures/ethemcemozkan.jpg";

function Team() {
  return (
    <>

<div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            <Card title="Who are we?" imgsrc={cem} >
              <div>
              <p>
                I’m Ethem Cem Özkan, the founder of Celebron IT Solutions, with over a decade of experience in DevOps engineering, cloud architecture, and cloud migrations.
                My expertise lies in building robust, scalable platforms tailored to meet the needs of businesses looking to modernize and optimize their operations.
              </p>
              <p>
                I’ve worked with various technologies including AWS and have a strong background in configuration management and software development. 
                Visit my web page at <a href="https://ethemcemozkan.com" target="_blank">ethemcemozkan.com</a> to learn more about my journey and how I can help your business.
              </p>
              </div>

            </Card>
            <Card title="What is our expertise?Who are we?" imgsrc={cem} >
            <p>Our areas of expertise include:</p>
                  <ul>
                      <li><strong>DevOps Engineering</strong>: Streamlining operations and automating workflows for efficient, high-performing systems.</li>
                      <li><strong>Cloud Architecture</strong>: Designing and deploying secure, scalable cloud infrastructure tailored to your business needs.</li>
                      <li><strong>Cloud Migrations</strong>: Seamlessly transitioning your applications and data to the cloud with minimal disruption.</li>
                      <li><strong>AWS Expertise</strong>: Leveraging the power of AWS to create optimized, future-proof solutions.</li>
                  </ul>
              

            </Card>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Team;
