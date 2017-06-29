import * as express from 'express';

const app = express();

// NOTE: you need the ** prefix because there is different behavior when the functions
// are emulated locally using `firebase server --only functions` and when they are
// deployed in cloud.  Locally, the url that express sees is `/thing`, but in cloud,
// express sees `/api/thing`
app.route('**/thing')
  .post((req,res,next) => {
    res.send('OK')
  })

app.route('**/thing/:id')
  .put((req,res,next) => {
    res.send('OK')
  })
  .patch((req,res,next) => {
    res.send('OK')
  })
  .delete((req,res,next) => {
    res.send('OK')
  })

app.all('*', (req, res) => {
  res.json(req.url)
})

import * as functions from 'firebase-functions'

export const api = functions.https.onRequest((req,res) => {
  // NOTE: You need to add a trailing slash to the root URL becasue of this issue: https://github.com/firebase/firebase-functions/issues/27
  // without trailing "/", req.path = null, req.url = null
  // won't match to your app.get('/', ...) route
  // open issue: https://github.com/firebase/firebase-functions/issues/27
  if (!req.path) { req.url = `/${req.url}` }
  return app(req,res)
});
