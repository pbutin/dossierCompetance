'use strict';
import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div class="block">
        <h1> {this.props.experience.titre} </h1>
        <h2> {this.props.experience.entreprise} </h2>
        <h4> {this.props.experience.dateDebut} </h4>
        <h4> {this.props.experience.dateFin} </h4>
        <h5> {this.props.experience.contexte} </h5>
        <p> {this.props.experience.competences} </p>
        <p> {this.props.experience.realisations} </p>
      </div>
    ) 
  }
}

export default Experience;