import React from 'react';

import Button from './Button';
import Experience from './Experience';

import experiences from './experiences.json';


let experienceIndex = 0; 
class App extends React.Component {
  constructor() {
    super();
    this.handlerNextExperience = this.handlerNextExperience.bind(this);
    this.handlerPreviousExperience = this.handlerPreviousExperience.bind(this);
  }

  handlerNextExperience() {
    if(typeof experiences[experienceIndex+1] !== 'undefined') {
      experienceIndex++;
      this.setState({
        clicked: true
      });
    }
  }

  handlerPreviousExperience() {
    if(typeof experiences[experienceIndex-1] !== 'undefined') {
      experienceIndex--;
      this.setState({
        clicked: true
      });
    }
  }

  render() {
    return (
      <div className="block" >
        <Button handler={this.handlerPreviousExperience} name="Experience précedente"/>
        <Experience experience={experiences[experienceIndex]} />
        <Button handler={this.handlerNextExperience} name="Experience suivante"/>
      </div>
    ) 
  }
}

export default App;