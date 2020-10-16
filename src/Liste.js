import React from 'react'

const Liste = (props) => {

  if (props.items.length === 0) {
    return null;
  }
  return (
    <div className="block">
      <h5>{props.title}</h5>
      <ul>
        {props.items.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Liste;