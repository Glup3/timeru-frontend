import gql from 'graphql-tag';

const MUTATION_STOP_TIMER = gql`
  mutation StopTimer($end: Date!) {
    stopTimer(end: $end) {
      code
      success
      message
    }
  }
`;

export default MUTATION_STOP_TIMER;
