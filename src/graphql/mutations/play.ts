import gql from 'graphql-tag';

const MUTATION_START_TIMER = gql`
  mutation StartTimer($timerInput: StartTimerInput!) {
    startTimer(timerInput: $timerInput) {
      code
      success
      message
      timeEntry {
        title
        start
      }
    }
  }
`;

export default MUTATION_START_TIMER;
