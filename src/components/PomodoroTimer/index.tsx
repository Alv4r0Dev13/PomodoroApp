import React, { useState } from 'react';
import { useInterval } from '../../hooks/use-interval';

interface TimerComponentI {
  defaultPomodoroTime: number;
}

const PomodoroTimer: React.FC<TimerComponentI> = ({ defaultPomodoroTime }) => {
  const [mainTime, setMainTime] = useState(defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Hello World! {mainTime}</div>;
};

export default PomodoroTimer;
