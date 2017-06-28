# Experimental monorepo for client & server components

Goal: to have a single repo that includes:

* Angular2 app that can be compiled and rendered on server
* Firebase-functions that can both serve the compiled app, as well as backend API consumed by client

## Requirements

- [ ] Firebase-hosted app that does server-side rendering of an angular app
- [ ] Firebase-functions and angular app can share code
- [ ] Typescript for firebase-functions
- [ ] Single package.json that includes all dependencies for client and server build and deployment
- [ ] Angular app supports i18n

# Creation Steps

1. `mkdir $PROJECT && cd $_`
2. `firebase init` use defaults and pick a firebase project to connect to

# File Structure

```
/
  firebase.json # firebase settings
  database.rules.json # firebase settings
  /functions # directory deployed to firebase-functions
    package.json # currently just the 
    index.js # entry point for firebase-functions deployment
    /node_modules
  /public # static assets served by firebase hosting

```
