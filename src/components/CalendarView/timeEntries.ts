import gql from 'graphql-tag';

const QUERY_TIME_ENTRIES = gql`
  query TimeEntries($start: Date!, $end: Date!) {
    timeEntries(start: $start, end: $end) {
      id
      title
      description
      start
      end
      valuable
      project {
        color
        codename
      }
      category {
        title
      }
    }
  }
`;

export default QUERY_TIME_ENTRIES;
