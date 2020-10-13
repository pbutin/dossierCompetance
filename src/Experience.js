import React from 'react';
import './Experience.css';


const Experience = (props) => {
  return (
    <div className="block">
      <div className="header block">
        <img className="brand-logo block" src={props.experience.logoUrl} alt="brand logo"></img>
        <div className="right-header block">
          <p> {props.experience.titre} </p>
          <p> {props.experience.entreprise} </p>
        </div>
      </div>
      <p> {props.experience.dateDebut} </p>
      <p> {props.experience.dateFin} </p>
      <p> {props.experience.contexte} </p>
      <p> {props.experience.competences.languages} </p>
      <p> {props.experience.realisations} </p>
    </div>
  );
}

export default Experience;