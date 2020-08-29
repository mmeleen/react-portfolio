import React from "react";

function About() {
  return (
    <>
      <main className="container mt-3">
        <div className="row border-primary border-bottom">
          <div className="col text-center text-sm-left">
            <h3>About Me</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-4 text-center text-sm-left">
            <img src="https://i.imgur.com/WCp0HVel.jpg" alt="Matt" width="200" height="200" className="img-fluid img-thumbnail mt-2 mb-3"></img>
          </div>
          <div className="col-sm-8">
            <p className="lead text-center text-sm-left">Welcome! My name is Matt, and I'm an aspiring full-stack web developer with UT Austin roots. I believe my
            undergraduate Economics degree and Full-Stack Web Development certification from the university have provided me with the tools necessary to be a valuable
            contributor to any team. I look forward to connecting with you!</p>
            <p className="card-text text-muted">matthew.meleen@gmail.com</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 mt-3 mb-5">
          <div className="col mb-4">
            <div className="card h-100 border-primary">
              <div className="card-header">Education</div>
              <div className="card-body">
                <h4 className="card-title">The University of Texas at Austin</h4>
                <p className="card-text"><em>B.A. Economics, Elements of Computing Certificate</em></p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100 border-primary">
              <div className="card-header">Certification</div>
              <div className="card-body">
                <h4 className="card-title">Full-Stack Web Development</h4>
                <p className="card-text"><em>The Coding Boot Camp at UT Austin</em></p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100 border-primary">
              <div className="card-header">Experience</div>
              <div className="card-body">
                <ul>
                  <li>Software Development Intern <span className="text-muted small">- Graflr - 2019</span></li>
                  <li>Webmaster <span className="text-muted small">- Texas Theta Tau</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100 border-primary">
              <div className="card-header">Technical Skills</div>
              <div className="card-body">
                <ul>
                  <li className="">JavaScript, React, Bootstrap<span className="text-muted "></span></li>
                  <li className="">HTML, CSS, jQuery<span className="text-muted "></span></li>
                  <li className="">MySQL, MongoDB, Express <span className="text-muted "></span></li>
                  <li className="">Google Cloud, Google Analytics <span className="text-muted "></span></li>
                </ul>
              </div>
            </div>
          </div>

        </div >
      </main >
    </>
  );
}

export default About;