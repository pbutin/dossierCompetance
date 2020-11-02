import React from 'react';
import Competences from "./Competences";
import Contexte from './Contexte';
import Dates from './Dates';
import Header from './Header';

import './Experience.css';

const Experience = (props) => {
  return (
    <div className="block">
      <Header experience={props.experience} />
      <div className="left">
        <Dates dates={props.experience.dates} />
        <Competences competences={props.experience.competences}/>
      </div>
      <div className="right">
        <Contexte experience={props.experience} />
      </div>
      <p className="clear"></p>
    </div>
  );
}

export default Experience;