import React from 'react';

const Details = (props) => {
  return (
    <div className="block">
      <div className="block">
      	<h3> Contexte:</h3>
      	<p> {props.experience.contexte} </p>
      </div>
      <p> {props.experience.realisations} </p>
    </div>
  );
}

export default Details;