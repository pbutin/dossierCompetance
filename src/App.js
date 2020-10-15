import React from 'react';

import Experiences from './Experiences';
import HomePage from './HomePage';


const App = (props) => {

  // Hooks
  const [displayExperience, setDisplayExperience] = React.useState(false);

  if(displayExperience) { 
    return  <Experiences onClose={() => setDisplayExperience(false)} />;
  }
  return <HomePage onDisplayExperience={() => setDisplayExperience(true)} />;
}

export default App;