import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { useStartTimerMutation } from '../../generated/graphql';
import TimeEntryContext from '../../context';

const PlayButton = () => {
  const timeEntryContext = useContext(TimeEntryContext);
  const [startTimer, { loading }] = useStartTimerMutation({
    update: cache => {
      cache.writeData({
        data: {
          isTimerRunning: true,
        },
      });
    },
  });

  return (
    <button
      onClick={() =>
        startTimer({
          variables: {
            timerInput: {
              title: timeEntryContext.title,
            },
          },
        })
      }
      disabled={loading}
      className={`${loading ? 'cursor-not-allowed' : ''}`}
    >
      <FontAwesomeIcon icon={faPlay} size="lg" className="text-blue-300 hover:text-blue-800" />
    </button>
  );
};

export default PlayButton;
