import React, { useCallback, useEffect, useState } from 'react';
import { useInterval } from '../../hooks/use-interval';
import Button from '../Button';
import Timer from '../Timer';
import secondsToTime from '../../utils/secondsToTime';

interface TimerComponentI {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

const PomodoroTimer: React.FC<TimerComponentI> = ({
  pomodoroTime,
  shortRestTime,
  longRestTime,
  cycles,
}) => {
  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [isCounting, setIsCounting] = useState(false);
  const [isWorking, setIsWorking] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [cyclesLeft, setCyclesLeft] = useState(cycles - 1);
  const [completeCycles, setCompleteCycles] = useState(0);
  const [fullWorkTime, setFullWorkTime] = useState(0);
  const [pomodoroNumber, setPomodoroNumber] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (isWorking) setFullWorkTime(fullWorkTime + 1);
    },
    isCounting ? 1000 : null,
  );

  const handleWork = useCallback(() => {
    setIsCounting(true);
    setIsWorking(true);
    setIsResting(false);
    setMainTime(pomodoroTime);
  }, [setIsCounting, setIsWorking, setIsResting, setMainTime, pomodoroTime]);

  const handleRest = useCallback(
    (isLong: boolean) => {
      setIsCounting(true);
      setIsWorking(false);
      setIsResting(true);

      if (isLong) setMainTime(longRestTime);
      else setMainTime(shortRestTime);
    },
    [
      setIsCounting,
      setIsWorking,
      setIsResting,
      setMainTime,
      longRestTime,
      shortRestTime,
    ],
  );

  useEffect(() => {
    if (isWorking) document.body.classList.add('working');
    if (isResting) document.body.classList.remove('working');

    if (mainTime > 0) return;

    if (isWorking) setPomodoroNumber(pomodoroNumber + 1);
    if (isResting) handleWork();

    if (isWorking && cyclesLeft > 0) {
      handleRest(false);
      setCyclesLeft(cyclesLeft - 1);
    } else if (isWorking && cyclesLeft <= 0) {
      handleRest(true);
      setCyclesLeft(cycles - 1);
      setCompleteCycles(completeCycles + 1);
    }
  }, [
    cycles,
    mainTime,
    isWorking,
    isResting,
    cyclesLeft,
    completeCycles,
    pomodoroNumber,
    handleWork,
    handleRest,
    setCyclesLeft,
  ]);

  return (
    <div className="pomodoro">
      <h2>
        {(isWorking || isResting) && !isCounting
          ? 'Timer paused'
          : isWorking
            ? 'You are: working'
            : isResting
              ? 'You are: resting'
              : 'Press Work to start'}
      </h2>
      <Timer time={mainTime} />
      <div className="controls">
        <Button text={'Work'} onClick={handleWork} />
        <Button text={'Rest'} onClick={() => handleRest(false)} />
        <Button
          className={!isWorking && !isResting ? 'hidden' : ''}
          text={isCounting ? 'Pause' : 'Play'}
          onClick={() => setIsCounting(!isCounting)}
        />
      </div>

      <div className="details">
        <p>Complete cycles: {completeCycles}</p>
        <p>Worktime: {secondsToTime(fullWorkTime)}</p>
        <p>Complete pomodoros: {pomodoroNumber}</p>
      </div>
    </div>
  );
};

export default PomodoroTimer;
