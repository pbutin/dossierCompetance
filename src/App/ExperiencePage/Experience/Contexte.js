import React from 'react';
import Liste from './Liste';

const Contexte = (props) => {
  return (
    <div className="block">
      <div className="block">
      	<h3> Contexte:</h3>
      	<p> {props.experience.contexte} </p>
      </div>
      <Liste title="Rôles & Réalisations:" items={props.experience.roles} />
    </div>
  );
}

export default Contexte;