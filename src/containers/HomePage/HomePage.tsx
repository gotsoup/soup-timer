import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import './HomePage.scss';
import Timer from '../../components/Timer/Timer';
import sessionImg from '../../assets/images/session-image.svg';
import breakImg from '../../assets/images/break-image.svg';

const HomePage = () => {
  const [inSession, setInSession] = useState(true);
  const [fading, setFading] = useState(false);
  const [userTabbing, setUserTabbing] = useState(false);
  const sessionMinutes = 25;
  const breakMinutes = 5;
  const sessionText = ['Session', 'Break'];

  const toggleSession = () => {
    setFading(true);
    setTimeout(() => {
      setInSession(!inSession);
      setFading(false);
    }, 875);
  };

  window.addEventListener('keydown', e =>
    e.keyCode === 9 ? setUserTabbing(true) : null
  );

  return (
    <div id="content-container">
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={!fading}>
        <img
          src={inSession ? sessionImg : breakImg}
          alt={
            inSession
              ? 'Person working on laptop'
              : 'Person relaxing and drinking tea.'
          }
        />
        <h2>{sessionText[inSession ? 0 : 1]}</h2>
      </Animated>
      <Timer
        minutes={inSession ? sessionMinutes : breakMinutes}
        seconds={0}
        tabCheck={userTabbing}
        onTimerEnd={toggleSession}
      />
    </div>
  );
};

export default HomePage;
