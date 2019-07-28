import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { useStartTimerMutation, useStopTimerMutation, useIsTimerRunningQuery } from '../../generated/graphql';

const PlayPause = () => {
  const [startTimer, { loading: startLoading }] = useStartTimerMutation({
    variables: {
      timerInput: {
        start: new Date(),
      },
    },
  });
  const [stopTimer, { loading: stopLoading }] = useStopTimerMutation({
    variables: {
      end: new Date(),
    },
  });
  const { data, error } = useIsTimerRunningQuery({
    pollInterval: 500,
  });

  if (error) {
    console.log(error);
  }

  if (data && data.isTimerRunning) {
    return (
      <button
        onClick={() => stopTimer()}
        disabled={stopLoading}
        className={`${stopLoading ? 'cursor-not-allowed' : ''}`}
      >
        <FontAwesomeIcon icon={faStopCircle} size="lg" className="text-blue-300 hover:text-blue-800" />
      </button>
    );
  }

  return (
    <button
      onClick={() => startTimer()}
      disabled={startLoading}
      className={`${startLoading ? 'cursor-not-allowed' : ''}`}
    >
      <FontAwesomeIcon icon={faPlay} size="lg" className="text-blue-300 hover:text-blue-800" />
    </button>
  );
};

export default PlayPause;
