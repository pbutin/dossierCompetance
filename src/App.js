import React from 'react';

import Experiences from './Experiences';
import HomePage from './HomePage';


const App = (props) => {

  // Hooks
  const [displayExperience, setDisplayExperience] = React.useState(false);
  const [experienceIndex, setExperienceIndex] = React.useState(0);

  // Handlers
  const updateExperienceIndex = (i) => {
    setExperienceIndex(i);
    setDisplayExperience(true);
  }

  if(displayExperience) { 
    return  <Experiences experienceIndex={experienceIndex} onClose={() => setDisplayExperience(false)} />;
  }
  return <HomePage updateExperienceIndex={(i) => updateExperienceIndex(i)} />;
}

export default App;