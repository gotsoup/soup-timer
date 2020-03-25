import React, { useEffect, useState } from 'react';
import './Timer.scss';
import IconButton from '../IconButton/IconButton';
import playIcon from '../../assets/images/play.svg';
import pauseIcon from '../../assets/images/pause.svg';
import resetIcon from '../../assets/images/replay.svg';
import stopIcon from '../../assets/images/stop.svg';

type Props = {
  onTimerEnd: () => void;
  tabCheck: boolean;
  minutes: number;
  seconds: number;
};

const Timer = ({ minutes = 0, seconds = 0, tabCheck, onTimerEnd }: Props) => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(true);
  const [icon, setIcon] = useState(playIcon);
  const [time, setTime] = useState({
    minutes,
    seconds
  });
  
  const [audio] = useState(new Audio(process.env.REACT_APP_AUDIO_URL));

  const tick = () => {
    if (paused || over) return;

    if (time.minutes === 0 && time.seconds === 0) {
      setOver(true);
      onTimerEnd();
      togglePlayIcon();
      audio.play();
    } else if (time.seconds === 0) {
      setTime({
        minutes: time.minutes - 1,
        seconds: 59
      });
    } else {
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
    }
  };

  const reset = (isPause = false) => {
    setTime({
      minutes,
      seconds
    });

    isPause ? setPaused(true) : setPaused(false);
    setIcon(isPause ? playIcon : pauseIcon);
    setOver(false);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  useEffect(() => {
    reset(true);
  }, [minutes]);

  const togglePlayIcon = () => {
    setIcon(icon === playIcon ? pauseIcon : playIcon);
  };

  const togglePlayPause = (hasTimerFinished = false) => {
    hasTimerFinished ? reset(false) : setPaused(!paused);
    togglePlayIcon();
  };

  return (
    <div>
      <h1 id="timer">
        {`${time.minutes
          .toString()
          .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}
      </h1>

      <div id="button-container">
        <IconButton
          image={stopIcon}
          alt="a stop icon"
          tabCheck={tabCheck}
          onClick={() => reset(true)}
        />

        <IconButton
          image={icon}
          alt="A play icon"
          tabCheck={tabCheck}
          onClick={() => togglePlayPause(over)}
        />
        <IconButton
          image={resetIcon}
          alt="A restart icon"
          tabCheck={tabCheck}
          onClick={() => {
            reset(false);
          }}
        />
      </div>
    </div>
  );
};

export default Timer;
