import * as express from 'express'
import * as bodyparser from 'body-parser'
import {
  BaseCollection,
  Command,
  ValuesCommand,
  KeyValuesCommand,
  KeyCommand,
} from '../../shared'

import { CollectionReference } from '../CollectionReference'

type Handler = (cmd: Command) => any

export class RESTResource<
  TCmdCreate extends ValuesCommand,
  TCmdReplace extends KeyValuesCommand,
  TCmdUpdate extends KeyValuesCommand,
  TCmdDelete extends KeyCommand> {
  public router: express.Router

  constructor(public apiRoot: string, public collectionRef: CollectionReference) {
    this.router = express.Router()
    this.router.use(bodyparser.json())
    this.router.route(`**${this.apiRoot}`)
      .post((req, res, next) => this.handle(req, res, next, cmd => this.create(cmd as TCmdCreate)))
    // "Real" REST - this simplifies by sharing Cmd types between client and server
    // this.router.route(`**${this.apiRoot}/:id`)
      .put((req, res, next) => this.handle(req, res, next, cmd => this.replace(cmd as TCmdReplace)))
      .patch((req, res, next) => this.handle(req, res, next, cmd => this.update(cmd as TCmdUpdate)))
      .delete((req, res, next) => this.handle(req, res, next, cmd => this.delete(cmd as TCmdDelete)))
  }

  public async handle(req: express.Request, res, next, handler: Handler) {
    try {
      console.log('Command:' + JSON.stringify(req.body, null, 2))
      const returned = await handler(req.body)
      res.status(200).send(JSON.stringify(returned))
    } catch (e) {
      res.status(e.status || 501).send((e.message + e.stack) || 'API Error')
    }
  }

  public create(cmd: TCmdCreate) {
    return this.collectionRef.push(cmd.values).then(ref => ref.key)
  }
  public replace(cmd: TCmdReplace) {
    return this.collectionRef.set(cmd.key, cmd.values)
  }
  public update(cmd: TCmdUpdate) {
    return this.collectionRef.update(cmd.key, cmd.values)
  }
  public delete(cmd: TCmdDelete) {
    return this.collectionRef.delete(cmd.key)
  }
}
