import React from 'react';
import './Bouton.css';

const Bouton = (props) => {
  if (props.canPressNext) {
    return (
      <div className={`button clickable ${props.button}`} onClick={props.onClick}>
          <i className="material-icons icon-large">{props.icon}</i>
      </div>
    );
  }
  return (
      <div className={`button ${props.button}`}>
          <i className="material-icons icon-large grey">{props.icon}</i>
      </div>
    )

}

export default Bouton;