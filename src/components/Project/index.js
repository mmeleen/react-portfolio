import React from "react";

function Project(props) {
  return (
    <>
      <div class="row border-secondary border-bottom mt-3 mb-3">
        <div class="col-sm-4 text-center text-sm-left">
          <img src={props.src} alt={props.alt} width="200" height="200" class="img-fluid img-thumbnail mt-2 mb-3"></img>
        </div>
        <div class="col-sm-8 text-center text-sm-left">
          <a href={props.url} class="lead text-info">{props.title}</a>
          <p class="mt-2">{props.summary}</p>
        </div>
      </div>
    </>
  );
}

export default Project;