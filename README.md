# basic-express-server

## Author

Antoine Charette

## Summary of Problem Domain

## Links to Application Deployment

[Heroku](https://code401-basic-express-server.herokuapp.com/)

[Actions Page](https://github.com/DevAOC/basic-express-server/actions/new)

### Lab 2

[PR](https://github.com/DevAOC/basic-express-server/pull/1)

#### UML

<img src="./images/lab2-uml.png" alt="lab2-uml" />

### Lab 3

[PR](https://github.com/DevAOC/basic-express-server/pull/7)

#### UML

<img src="./images/lab3-uml.png" alt="lab3-uml" />

### Lab 4

[PR](https://github.com/DevAOC/basic-express-server/pull/10)

#### UML

Same UML as the lab 3 UML.

## Routes

- HTTP POST

  - Path: /:model
    - Responds with the person input into the database

- HTTP GET

  - Path: /:model and /:model/:id
    - Responds with one or more JSON objects.

- HTTP PUT

  - Path: /:model
    - Updates the information of a person in the database

- HTTP DELETE
  - Path: /:model
    - Responds with null (indicating that the record has been deleted)
