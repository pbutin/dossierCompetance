import React from 'react';

const Header = (props) => {
  return (
    <div className="header block border">
      <img className="brand-logo block" src={props.experience.logoUrl} alt="brand logo"></img>
      <div className="right-header block">
        <h1> {props.experience.titre} </h1>
        <h3> {props.experience.entreprise} </h3>
      </div>
    </div>
  );
}

export default Header;