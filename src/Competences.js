import React from 'react'

const Competences = (props) => {
  return (
    <div>
      <div className="block">
        <h5>Languages et framework:</h5>
          {props.competences.languages.map(language => (
              <li key={language}>
                {language}
              </li>
            ))}
      </div>
      <div className="block">
        <h5>Méthodologies:</h5>
          {props.competences.methodologies.map(methodologie => (
              <li key={methodologie}>
                {methodologie}
              </li>
            ))}
      </div>
      <div className="block">
        <h5>Outils & Applications:</h5>
          {props.competences.outilsAndApplications.map(outil => (
              <li key={outil}>
                {outil}
              </li>
            ))}
      </div>
    </div>
  );
}

export default Competences;