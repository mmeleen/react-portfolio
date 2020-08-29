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
        <Project src="https://i.imgur.com/ZjZxiOE.png" alt="PrePoll" url="https://prepoll.herokuapp.com/" gitUrl="https://github.com/Kinzito17/PrePoll" title="PrePoll" summary="Political information app to provide information regarding a user's local elections and demographics." />
        <Project src="https://i.imgur.com/oR5bo4V.png" alt="Scope" url="https://scope-g1.herokuapp.com/" gitUrl="https://github.com/mmeleen/scope" title="Scope" summary="Astrology app that provides horoscopes and compatibility information." />
        <Project src="https://i.imgur.com/JMkYVIN.png" alt="Employee Directory" url="https://mmeleen.github.io/employee-directory_react/" gitUrl="https://github.com/mmeleen/employee-directory_react" title="Employee Directory - React" summary="Table of employees that can be easily filtered and sorted by search term or column." />
        <Project src="https://i.imgur.com/SUGXdHV.png" alt="Note Taker" url="https://note-taker-express-m.herokuapp.com/" gitUrl="https://github.com/mmeleen/note-taker_express" title="Note Taker" summary="Create, store, update, and delete notes." />
        <Project src="https://i.imgur.com/DJwLhgE.png" alt="Before You Buy" url="https://mmeleen.github.io/project1-g5/" gitUrl="https://github.com/mmeleen/project1-g5" title="Before You Buy" summary="Provides a snapshot of information about a given video game to a prospective buyer." />
        <Project src="https://i.imgur.com/wmxRBso.png" alt="Weather Dashboard" url="#https://mmeleen.github.io/weather-dashboard_server-side-api/" gitUrl="https://github.com/mmeleen/weather-dashboard_server-side-api" title="Weather Dashboard" summary="Current and 5-day weather forecasts using the OpenWeatherMap API." />
        <div><br></br></div>
      </main>
    </>
  );
}

export default Portfolio;