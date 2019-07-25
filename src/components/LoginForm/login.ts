import gql from 'graphql-tag';

const MUTATION_LOGIN = gql`
  mutation Login($credentials: CredentialsInput!) {
    login(credentials: $credentials) {
      code
      success
      message
    }
  }
`;

export default MUTATION_LOGIN;
