import React from 'react';
import './HomePage.css';

import ExperienceMini from './ExperienceMini';

import experiences from './experiences.json';


const HomePage = (props) => {

  return (
    <div>
      <div>
        <h1>FULL STACK ENGINEER</h1>
        <h2>2 ans d'expérience</h2>
        <h4>Je suis quelqu'un de curieux, sportif et surtout passionné de nouvelles technologies.</h4>
      </div>
      <div>
        <p>Mes experiences:</p>
        <div className="experiences">
          {experiences.map((experience, i) => (
            <ExperienceMini key={i} i={i} experience={experience} updateExperienceIndex={(i) => props.updateExperienceIndex(i)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;