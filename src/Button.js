import React from 'react';
import './Button.css';

const Button = (props) => {
	return (
		  <div className="block button-background" onClick={props.onClick}>
		  </div>
	);
}

export default Button;