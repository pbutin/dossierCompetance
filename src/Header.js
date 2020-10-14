import React from 'react';

const Header = (props) => {
  return (
    <div className="header block">
      <img className="brand-logo block" src={props.experience.logoUrl} alt="brand logo"></img>
      <div className="right-header block">
        <p> {props.experience.titre} </p>
        <p> {props.experience.entreprise} </p>
      </div>
    </div>
  );
}

export default Header;