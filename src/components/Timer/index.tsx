import React from 'react';
import secondsToMinutes from '../../utils/secondsToMinutes';

interface TimerI {
  time: number;
}

const Timer: React.FC<TimerI> = ({ time }) => {
  return <div className="timer">{secondsToMinutes(time)}</div>;
};

export default Timer;
