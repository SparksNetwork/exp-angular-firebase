# Experimental monorepo for client & server components

Goal: to have a single repo that includes:

* Angular2 app that can be compiled and rendered on server
* Firebase-functions that can both serve the compiled app, as well as backend API consumed by client

## Requirements

- [ ] Firebase-hosted app that does server-side rendering of an angular app
- [X] Firebase-functions and angular app can share code
- [X] Typescript for firebase-functions
- [ ] Single package.json that includes all dependencies for client and server build and deployment
- [ ] Angular app supports i18n

# Creation Steps

1. `mkdir $PROJECT && cd $_`
1. `firebase init` use defaults and pick a firebase project to connect to
1. copy firebase-function dependencies from package.json
1. `ng new $PROJECT -dir ./functions` to initialize ng2 project, overwrite package.json
1. `cd functions`
1. paste firebase-function dependencies back into package.json
1. update version of all angular packages from ^4.0.0 to ^4.2.4
1. perform steps in [this handy blog post](https://medium.com/@evertonrobertoauler/angular-4-universal-app-with-angular-cli-db8b53bba07d) to make angular app universal
1. create separate `/functions/fn` with `src` and `dist` to hold actual firebase-functions
1. replace `/functions/index.js` firebase-functions entry point so it just re-exports `/functions/fn/dist`
1. create separate `tsconfig.functions.json` for ts compiler options for firebase-functions

# File Structure

```
/
  firebase.json # firebase settings
  database.rules.json # firebase settings
  /functions # directory deployed to firebase-functions
    package.json # packages referenced by client & server build
    index.js # functions entry point re-exports functions/
    tsconfig.json # used by client build process
    tsconfig.functions.json # used by server build process
    /node_modules
    /src # client source
    /dist # client build
    /fn # where the actual firebase-functions live
      /src # functions source
      /dist # functions build
    /shared # ts code used in both client and server
  /public # static assets served by firebase hosting

```
