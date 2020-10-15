import React from 'react';
import './Experiences.css';

import Button from './Button';
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
      <div onClick={props.onClose}>Close</div>
      <div className="left-button button">
        <Button onClick={onPreviousExperience} />
      </div>
      <div className="right-button rotate button">
        <Button onClick={onNextExperience} />
      </div>
      <div className="center">
        <Experience experience={currentExperience} />
      </div>
    </div>
  );
}

export default Experiences;