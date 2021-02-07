# Todo Web App
Automation of todo web application using Cypress

## Structure

```
cypress
  |____ Fixtures
  |____ Integration
  |____ positive (Contains positive test cases)
  |____ negative (Contains negative test cases)
  |____ plugins
  |____ support
          |____ commands (Contains custom commands)

```

## How to RUN

Please follow below steps to run the test cases

```
Pre-requisites:

- Node

Steps:

- RUN command "npm install"
- To execute test cases via cypress UI manually

  RUN command "$(npm bin)/cypress open"

- To execute test cases automated without cypress UI

  RUN command "npm t"

  The above commmand will start the server, execute all end to end tests and then will close the server.
  After the tests get executed it will show a results table in the terminal,
  In case any errors the screenshots gets stored in the below path

  "path_to_the_project/cypress/screenshots"

  And the error videos are stored in the below path with .mp4 extension

  "path_to_the_project/cypress/videos" 

```

## Positive Test Cases

Contains below positive test cases for create, edit, delete and complete todo task.

- Before each scenario create a todo task as a pre-requirement.
- Test case to checks user "should be able to edit a todo task".
- Test case to checks user "should be able to complete a todo task".
- Test case to checks user "should be able to delete a todo task".


## Negative Test Cases

Contains below negative test cases.

- Test case to checks user "should not be able to create a todo task with only spaces".
- Test case to checks user "should not be able to feed blank spaces while todo edit".
- Test case to checks user "should not be able to create multiple todos of same name".
- Test case to checks user "should not be able to create a todo with same title as a completed todo task".

## Custom commands

Contains below custom commands.

### randomString()

```
Supported params :

title (Type String) : If passed, it will just return the same string.

tlen (Type number) : If passed it will just return a random string of length as {tlen}.

```

### createToDo()

```
Supported params :

title (Type String) : If passed, it will create a todo task with title as {title}.

tlen (Type number) : If passed it will create a todo task with title as a random string of length {tlen}.

```
