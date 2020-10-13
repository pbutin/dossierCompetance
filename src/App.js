'use strict';
import React from 'react';
import Experience from './experience';
import experiences from './experiences.json';

class App extends React.Component {
  render() {
    return (
      <Experience experience={experiences[0]} />
    ) 
  }
}

export default App;