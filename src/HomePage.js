import React from 'react';
import './HomePage.css';

import experiences from './experiences.json';


const HomePage = (props) => {

  const parseAndFormat = (date) => {
    const parsedDate = Date.parse(date);
    return new Intl.DateTimeFormat("fr-FR", {
          year: "2-digit",
          month: "2-digit"
        }).format(parsedDate);
  };

  return (
    <div>
      <div>
        <h1>FULL STACK ENGINEER</h1>
        <h2>2 ans d'expérience</h2>
        <h4>Je suis quelqu'un de curieux, sportif et surtout passionné de nouvelles technologies.</h4>
      </div>
      <div>
        <p>Mes experiences:</p>
        {experiences.map((experience, i) => (
          <div className="block clickable experience" key={i} onClick={() => {props.updateExperienceIndex(i)}}>
            <p>{experience.titre}</p>
            <p>{experience.entreprise}</p>
            <p>{parseAndFormat(experience.dates.debut)} - {parseAndFormat(experience.dates.fin)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;