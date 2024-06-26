import React from 'react';
import PomodoroTimer from './components/PomodoroTimer';

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
    </div>
  );
}

export default App;
