# sample-data-graph

A sample Apollo GraphQL server with a [Users service](https://github.com/gurunate/users-service) REST data source.

## Setup

### Install

```bash
$ npm i
```

### Run

```bash
$ npm start
```

#### Playground

-   http://localhost:4000

##### GraphQL Examples

###### Query

```
query {
  users {
    id
    firstName
    lastName
    email
  }
}
```

###### Mutation
```
mutation saveUpate($user: UserInput!) {
  saveUser(input: $user) {
    firstName
    lastName
    email
  }
}
```
###### Variables

```
{
  "user": {
    "firstName": "Guy", 
    "lastName": "gieri", 
    "email": "guy.fieri@flavortown.com"
  }
}
```

## References

-   [GraphQL](https://www.graphql.com/)
-   [Apollo](https://www.apollographql.com/)
