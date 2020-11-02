import React from 'react';
import { useSpring, animated } from 'react-spring';

import DatesHomePage from './DatesHomePage';

const calc = (x, y) => [0, 0, 1.08];
const trans = (x, y, s) => `perspective(600px) scale(${s})`;


const ExperienceMini = (props) => {

  const [animation, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  return (
    <animated.div
    className="block clickable experience border"
    onClick={() => {props.updateExperienceIndex(props.i)}}
    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
    onMouseLeave={() => set({ xys: [0, 0, 1] })}
    style={{ transform: animation.xys.interpolate(trans) }}
    >
      <p className="bold">{props.experience.titre}</p>
      <p>{props.experience.entreprise}</p>
      <DatesHomePage debut={props.experience.dates.debut} fin={props.experience.dates.fin}/>
    </animated.div>
  );
}

export default ExperienceMini;