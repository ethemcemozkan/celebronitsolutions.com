import React from "react";
import web from "../src/Pictures/logo.png";
import Card from "./Card";
import devops from "../src/Pictures/devops.png";
import cost from "../src/Pictures/cost.png";
import platform from "../src/Pictures/platform.png";
import migration from "../src/Pictures/migration.png";
import training from "../src/Pictures/training.png";
import cloud from "../src/Pictures/cloud.png";
import observability from "../src/Pictures/observability.png";

function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow your bussiness with
                    <strong className="brand-name"> Celebron IT Solutions. </strong>
                  </h1>

                  <h5 className="my-3">
                  Specializing in DevOps consulting, we help businesses design, optimize, and modernize their AWS, Azure, and on-premises environments. Our expertise includes cloud migration, infrastructure automation, CI/CD, observability, and cloud modernizations, ensuring secure, efficient, and high-performing systems. With deep knowledge of cloud and hybrid architectures, we enable organizations to streamline operations and drive innovation.
                  </h5>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid"
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row gy-4">
                    <Card title="DevOps Engineering" imgsrc={devops}/>
                    <Card title="Platform Engineering" imgsrc={platform} />
                    <Card title="AWS/Azure Cloud Engineering" imgsrc={cloud} />
                    <Card title="On Premises/Cloud Migration" imgsrc={migration} />
                    <Card title="Observability Engineering" imgsrc={observability} />
                    <Card title="Cloud Cost Optimization" imgsrc={cost} />
                    <Card title="DevOps Training" imgsrc={training} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
