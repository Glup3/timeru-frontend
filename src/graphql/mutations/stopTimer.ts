import gql from 'graphql-tag';

const MUTATION_STOP_TIMER = gql`
  mutation StopTimer {
    stopTimer {
      code
      success
      message
    }
  }
`;

export default MUTATION_STOP_TIMER;
