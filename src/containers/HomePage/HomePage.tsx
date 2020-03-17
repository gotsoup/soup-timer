import React, { useEffect, useState } from 'react';
import Timer from '../../components/Timer/Timer';
import sessionImg from '../../assets/images/session-image.svg';
import breakImg from '../../assets/images/break-image.svg';

const HomePage = () => {
  const [inSession, setInSession] = useState(true);
  const sessionMinutes = 0;
  const breakMinutes = 0;

  return (
    <div>
      <img
        src={inSession ? sessionImg : breakImg}
        alt={
          inSession
            ? 'Person working on laptop'
            : 'Person relaxing and drinking tea.'
        }
      />
      <Timer
        minutes={inSession ? sessionMinutes : breakMinutes}
        seconds={5}
        setInSession={setInSession}
        inSession={inSession}
      />
    </div>
  );
};

export default HomePage;
