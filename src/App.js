import React from 'react';
import './App.css';

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
      <div>
        <div className="left-button button">
          <Button handler={this.handlerPreviousExperience} />
        </div>
        <div className="right-button rotate button">
          <Button handler={this.handlerNextExperience} />
        </div>
        <div className="center">
          <Experience experience={experiences[experienceIndex]} />
        </div>
      </div>
    )
  }
}

export default App;