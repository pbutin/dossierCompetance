import React from 'react';

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
    <div onClick={props.onDisplayExperience}> one div </div>
     {experiences.map(experience => (
        <div className="block">
          <p>{experience.titre}</p>
          <p>{experience.entreprise}</p>
          <p>{parseAndFormat(experience.dates.debut)} - {parseAndFormat(experience.dates.fin)}</p>
        </div>
        ))}
    </div>
  );
}

export default HomePage;