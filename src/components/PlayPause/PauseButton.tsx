import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { useStopTimerMutation } from '../../generated/graphql';

const PauseButton = () => {
  const [stopTimer, { loading: stopLoading }] = useStopTimerMutation({
    update: cache => {
      cache.writeData({
        data: {
          isTimerRunning: false,
        },
      });
    },
  });

  return (
    <button onClick={() => stopTimer()} disabled={stopLoading} className={`${stopLoading ? 'cursor-not-allowed' : ''}`}>
      <FontAwesomeIcon icon={faStopCircle} size="lg" className="text-blue-300 hover:text-blue-800" />
    </button>
  );
};

export default PauseButton;
