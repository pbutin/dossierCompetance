import React from 'react';
import './Experience.css';

class Experience extends React.Component {
  render() {
    return (
      <div className="block">
        <div className="header block">
          <img className="brand-logo block" src={this.props.experience.logoUrl} alt="brand logo"></img>
          <div className="right-header block">
            <p> {this.props.experience.titre} </p>
            <p> {this.props.experience.entreprise} </p>
          </div>
        </div>
        <p> {this.props.experience.dateDebut} </p>
        <p> {this.props.experience.dateFin} </p>
        <p> {this.props.experience.contexte} </p>
        <p> {this.props.experience.competences.languages} </p>
        <p> {this.props.experience.realisations} </p>
      </div>
    )
  }
}

export default Experience;