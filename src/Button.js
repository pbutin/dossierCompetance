import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div className="block" onClick={this.props.handler}>
        <p>{this.props.name}</p>
      </div>
    ) 
  }
}

export default Button;