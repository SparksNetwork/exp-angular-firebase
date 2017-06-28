# Experimental monorepo for client & server components

Goal: to have a single repo that includes:

* Angular2 app that can be compiled and rendered on server
* Firebase-functions that can both serve the compiled app, as well as backend API consumed by client

## Requirements

* Firebase-hosted app that does server-side rendering of an angular app
* Firebase-functions and angular app can share code
* Typescript for firebase-functions
* Single package.json that includes all dependencies for client and server build and deployment
* Angular app supports i18n

