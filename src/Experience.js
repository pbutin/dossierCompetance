import React from 'react';
import Competences from "./Competences";
import Dates from './Dates';
import Details from './Details';
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
        <Details experience={props.experience} />
      </div>
      <p className="clear"></p>
    </div>
  );
}

export default Experience;