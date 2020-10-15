import React from 'react'
import Liste from './Liste'

const Competences = (props) => {
  return (
    <div className="block">
      <h4>Compétences</h4>
      <Liste title="Languages et framework:" items={props.competences.languages} />
      <Liste title="Méthodologies:" items={props.competences.methodologies} />
      <Liste title="Outils & Applications:" items={props.competences.outilsAndApplications} />
    </div>
  );
}

export default Competences;