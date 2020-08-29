import React from "react";
import Project from "../components/Project";

function Portfolio() {
  return (
    <>
      <main className="container mt-3">
        <div className="row border-primary border-bottom">
          <div className="col text-center text-sm-left">
            <h3>Portfolio</h3>
          </div>
        </div>
        <Project src="http://placehold.it/200x200" alt="Proj1" url="#" title="PrePoll" summary="Political information app to provide information regarding a user's local elections and demographics." />
        <Project src="http://placehold.it/200x200" alt="Proj2" url="#" title="Scope" summary="Astrology app that provides horoscopes and compatibility information." />
        <Project src="http://placehold.it/200x200" alt="Proj3" url="#" title="Employee Directory - React" summary="Table of employees that can be easily filtered and sorted by search term or column." />
        <Project src="http://placehold.it/200x200" alt="Proj4" url="#" title="Note Taker" summary="Create, store, update, and delete notes." />
        <Project src="http://placehold.it/200x200" alt="Proj5" url="#" title="Before You Buy" summary="Provides a snapshot of information about a given video game to a prospective buyer." />
        <Project src="http://placehold.it/200x200" alt="Proj6" url="#" title="Weather Dashboard" summary="Current and 5-day weather forecasts using the OpenWeatherMap API." />
        <div><br></br></div>
      </main>
    </>
  );
}

export default Portfolio;