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

#### Examples

##### Queries

```javascript
query {
  users {
    id
    firstName
    lastName
    email
  }
}
```

##### Mutations
```javascript
mutation saveUpate($user: SaveUserInput!) {
  saveUser(input: $user) {
    firstName
    lastName
    email
  }
}
```
###### Variables

```json
{
  "user": {
    "firstName": "Guy", 
    "lastName": "gieri", 
    "email": "guy.fieri@flavortown.com"
  }
}
```

```javascript
mutation {
  removeUser(input: { id: 16 })
}
```

## References

-   [GraphQL](https://www.graphql.com/)
-   [Apollo](https://www.apollographql.com/)
