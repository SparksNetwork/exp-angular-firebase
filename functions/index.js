/*
firebase-functions is a bastard and will only deploy from ./functions.
This bootstrap file just loads all the compiled functions from ./dist.
*/

"use strict";
const x = require('./fn/dist/fn/src');
Object.keys(x).forEach(function(k) { exports[k] = x[k] });
