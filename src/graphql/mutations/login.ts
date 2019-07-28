import gql from 'graphql-tag';

const MUTATION_LOGIN = gql`
  mutation Login($credentials: CredentialsInput!) {
    login(credentials: $credentials) {
      code
      success
      message
      token
    }
  }
`;

export default MUTATION_LOGIN;
