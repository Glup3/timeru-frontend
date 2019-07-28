import gql from 'graphql-tag';

const MUTATION_REGISTER = gql`
  mutation Register($credentials: CredentialsInput!, $personalInfo: PersonalInfoInput!) {
    register(credentials: $credentials, personalInfo: $personalInfo) {
      code
      success
      message
    }
  }
`;

export default MUTATION_REGISTER;
