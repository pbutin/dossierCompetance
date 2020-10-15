import React from 'react'

const Liste = (props) => {
  return (
    <div className="block">
      <h5>{props.title}</h5>
        {props.items.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
    </div>
  );
}

export default Liste;