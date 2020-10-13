import React from 'react';
import './Button.css';

const Button = (props) => {
	return (
		  <div className="block button-background" onClick={props.handler}>
		  </div>
	);
}

export default Button;