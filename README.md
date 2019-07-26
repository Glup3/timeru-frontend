# Timeru Frontend

Web Application in React for Timeru.

## Usefull commands

- run the app: `yarn start`
- generate graphql types: `yarn codegen`

## How does authentication work?

The server generates a JsonWebToken through the Login Mutation and the client
has to send this token via the Authorization header.
