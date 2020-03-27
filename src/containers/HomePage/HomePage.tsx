import React, { useState } from 'react';
import { Animated } from 'react-animated-css';
import './HomePage.scss';
import Timer from '../../components/Timer/Timer';
import SettingsModal from '../../components/SettingsModal/SettingsModal';
import IconButton from '../../components/IconButton/IconButton';
import sessionImg from '../../assets/images/session-image.svg';
import breakImg from '../../assets/images/break-image.svg';
import settingsIcon from '../../assets/images/settings.svg';

const HomePage = () => {
  const [inSession, setInSession] = useState(true);
  const [fading, setFading] = useState(false);
  const [userTabbing, setUserTabbing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [sessionMinutes, setSessionMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const sessionText = ['Session', 'Break'];

  const toggleSession = () => {
    setFading(true);
    setTimeout(() => {
      setInSession(!inSession);
      setFading(false);
    }, 875);
  };

  const changeTime = (addTime: boolean, isSessionTime: boolean) => {
    if (isSessionTime) {
      if (addTime) setSessionMinutes(sessionMinutes + 5);
      else setSessionMinutes(sessionMinutes - 5);
    } else {
      if (addTime) setBreakMinutes(breakMinutes + 5);
      else setBreakMinutes(breakMinutes - 5);
    }
  };

  window.addEventListener('keydown', e =>
    e.keyCode === 9 ? setUserTabbing(true) : null
  );

  return (
    <div id="content-container">
      {modalOpen && (
        <SettingsModal
          modifyTime={changeTime}
          closeModal={() => setModalOpen(false)}
          sessionMinutes={sessionMinutes}
          breakMinutes={breakMinutes}
          tabCheck={userTabbing}
        />
      )}

      <header>
        <IconButton
          image={settingsIcon}
          alt="open settings icon"
          tabCheck={userTabbing}
          onClick={() => setModalOpen(true)}
        />
      </header>

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
        inSession={inSession}
        tabCheck={userTabbing}
        onTimerEnd={toggleSession}
      />
    </div>
  );
};

export default HomePage;
