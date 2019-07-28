import gql from 'graphql-tag';

const QUERY_IS_TIMER_RUNNING = gql`
  query IsTimerRunning {
    isTimerRunning
  }
`;

export default QUERY_IS_TIMER_RUNNING;
