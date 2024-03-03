import { gql } from "@apollo/client";

const AUTH_MUTATION = gql`
  mutation Auth($email: String!) {
    auth(email: $email) {
      email
      expired
      token
    }
  }
`;

const USER_MUTATION = gql`
  mutation User($tokenId: String!, $email: String!) {
    user(tokenId: $tokenId, email: $email) {
      name
      memberNo
      email
      post {
        amount
        memberNo
      }
    }
  }
`;

export { AUTH_MUTATION, USER_MUTATION };
