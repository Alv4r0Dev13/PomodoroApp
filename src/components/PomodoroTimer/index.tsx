import React, { useState } from 'react';
import { useInterval } from '../../hooks/use-interval';
import Button from '../Button';
import Timer from '../Timer';

interface TimerComponentI {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const PomodoroTimer: React.FC<TimerComponentI> = ({
  pomodoroTime,
  // shortRestTime,
  // longRestTime,
  // cycles,
}) => {
  const [mainTime, setMainTime] = useState(pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer time={mainTime} />
      <Button text={'test'} />
    </div>
  );
};

export default PomodoroTimer;
