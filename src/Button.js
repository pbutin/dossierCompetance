import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <div className="block button-background" onClick={this.props.handler}>
      </div>
    ) 
  }
}

export default Button;