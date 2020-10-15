import React from 'react';
import './Experiences.css';

import Bouton from './Bouton';
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

  const canPressNext = () => {
    if (experienceIndex < experiences.length - 1) {
      return true;
    }
    return false;
  }

  const canPressPrevious = () => {
    if (experienceIndex > 0) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <i onClick={props.onClose} className="material-icons icon-large clickable">close</i>
      <Bouton onClick={onPreviousExperience} canPressNext={canPressPrevious()} icon="keyboard_arrow_left" button="left-button"/>
      <Bouton onClick={onNextExperience} canPressNext={canPressNext()} icon="keyboard_arrow_right" button="right-button"/>

      <div className="center">
        <Experience experience={currentExperience} />
      </div>
    </div>
  );
}

export default Experiences;