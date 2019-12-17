import React from 'react';
import { useIsTimerRunningQuery } from '../../generated/graphql';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

const PlayPause = () => {
  const { data, error } = useIsTimerRunningQuery({});

  if (error) {
    console.log(error);
  }

  if (data && data.isTimerRunning) {
    return <PauseButton />;
  }

  return <PlayButton />;
};

export default PlayPause;
