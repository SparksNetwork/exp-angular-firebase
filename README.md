# Experimental monorepo for client & server components

[NOW SERVING WIP HERE](https://sparks-development-sd.firebaseapp.com/)

Goal: to have a single repo that includes:

* Angular2 app that can be compiled and rendered on server
* Firebase-functions that can both serve the compiled app, as well as backend API consumed by client

## Use

`npm run serve` to run local development server with hot reload

`npm start` to build and run compiled app locally

`npm run deploy` to build and deploy to cloud

## Requirements

- [X] Firebase-functions http handler that does server-side rendering of an angular app
- [X] Firebase-hosting that redirects to that firebase-functions http hander
- [X] Firebase-functions and angular app can share code
- [X] Typescript for firebase-functions
- [X] Single package.json that includes all dependencies for client and server build and deployment
- [ ] API functions exposed via firebase-hosting on same domain as client
- [X] dynamic opengraph tags included in ssr'd client (incl in angular 4)
- [ ] Angular app supports i18n
- [X] npm commands that manage development and deployment

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
1. create separate `tsconfig.functions.json` for ts compiler options for firebase-functions
1. replace `/functions/index.js` firebase-functions entry point so it just re-exports `/functions/fn/dist/fn/src`
1. create `/functions/shared` directory for ts used by client and server build, NOTE: must have code here otherwise prev step re-exports differently
1. remove `/public/index.html` to prevent default page from being served by hosting
1. update `/firebase.json` to include rule to redirect to `client` function

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
