import React from 'react';
import secondsToTime from '../../utils/secondsToTime';

interface TimerI {
  time: number;
}

const Timer: React.FC<TimerI> = ({ time }) => {
  return <div className="timer">{secondsToTime(time)}</div>;
};

export default Timer;
