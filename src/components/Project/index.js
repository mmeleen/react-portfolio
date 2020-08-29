import React from "react";

function Project(props) {
  return (
    <>
      <div className="row border-secondary border-bottom mt-3 mb-3">
        <div className="col-sm-4 text-center text-sm-left">
          <img src={props.src} alt={props.alt} width="200" height="200" className=" img-thumbnail mt-2 mb-3"></img>
        </div>
        <div className="col-sm-8 text-center text-sm-left">
          <h4 className="lead text-info">{props.title}</h4>
          <p className="mt-2">{props.summary}</p>
          <a href={props.url} className="text-muted">Visit the Deployed Project</a><span className="card-text"> or </span>
          <a href={props.gitUrl} className="text-muted">Visit the GitHub Repository</a>
        </div>
      </div>
    </>
  );
}

export default Project;