# sample-data-graph

A sample [Apollo server](https://www.apollographql.com/docs/apollo-server/) ([GraphQL](https://graphql.org/)) with a [Users service](https://github.com/gurunate/users-service) REST data source.

## Setup

### Install

```bash
$ npm i
```

### Run

```bash
$ npm start
```

#### Playground (GraphiQL)

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

### Related Resources

-   [data-graph-demo](https://github.com/gurunate/data-graph-demo)
-   [sample-web-app](https://github.com/gurunate/sample-web-app)
-   [users-service](https://github.com/gurunate/users-service)

### External Links

-   [GraphQL](https://www.graphql.com/)
-   [Apollo](https://www.apollographql.com/)
