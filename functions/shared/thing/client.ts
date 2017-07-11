import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database'
import { BaseClientService } from '../../lib/firebase-collections/client'

export * from './shared'
import {
  ThingRecord,
  ThingCollection,
  ThingCmdCreate,
  ThingCmdUpdate,
  ThingCmdReplace,
  ThingCmdDelete,
} from './shared'

@Injectable()
export class ThingService extends BaseClientService<
  ThingRecord,
  ThingCmdCreate,
  ThingCmdUpdate,
  ThingCmdReplace,
  ThingCmdDelete> {
  constructor(public http: Http, public db: AngularFireDatabase) { super(http, db, ThingCollection) }
}
