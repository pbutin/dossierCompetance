import React from 'react';
import './Experiences.css';

import Experience from './Experience';

import experiences from './experiences.json';


const Experiences = (props) => {
  // Hooks
  const [experienceIndex, setExperience] = React.useState(props.experienceIndex);

  // Setup
  const currentExperience = experiences[experienceIndex];

  // Handlers
  const onNextExperience = () => {
    if (experienceIndex < experiences.length - 1) {
      setExperience(experienceIndex + 1);
    }
  }

  const onPreviousExperience = () => {
    if (experienceIndex > 0) {
      setExperience(experienceIndex - 1);
    }
  }

  return (
    <div>
      <i onClick={props.onClose} className="material-icons icon-large clickable">close</i>
      <div className="left-button button" onClick={onPreviousExperience}>
        <i className="material-icons icon-large clickable">keyboard_arrow_left</i>
      </div>
      <div className="right-button button" onClick={onNextExperience}>
        <i className="material-icons icon-large clickable">navigate_next</i>
      </div>
      <div className="center">
        <Experience experience={currentExperience} />
      </div>
    </div>
  );
}

export default Experiences;