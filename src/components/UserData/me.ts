import gql from 'graphql-tag';

const QUERY_ME = gql`
  query Me {
    me {
      username
      firstName
      lastName
      email
      role
      active
    }
  }
`;

export default QUERY_ME;
