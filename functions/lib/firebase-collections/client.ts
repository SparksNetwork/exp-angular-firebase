import { Http, Headers } from '@angular/http'
import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable,
} from 'angularfire2/database'

export * from './shared'
import {
  KeyValuesCommand,
  KeyCommand,
  ValuesCommand,
  BaseCollection,
} from './shared'

const JSON_HEADERS = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}

export class BaseClientService<
  TRecord,
  TCmdCreate extends ValuesCommand,
  TCmdReplace extends KeyValuesCommand,
  TCmdUpdate extends KeyValuesCommand,
  TCmdDelete extends KeyCommand> {

  public url: string

  constructor(public http: Http, public db: AngularFireDatabase, public collection: BaseCollection) {
    this.url = this.collection.apiRoot
  }

  public by(orderByChild: string, equalTo: string): FirebaseListObservable<TRecord[]> {
    return this.db.list(this.collection.firebasePath, { query: { orderByChild, equalTo } })
  }

  public one(key: string): FirebaseObjectObservable<TRecord> {
    return this.db.object(`${this.collection.firebasePath}/${key}`)
  }

  public create(cmd: TCmdCreate) {
    return this.http.post(this.url, JSON.stringify(cmd), JSON_HEADERS)
  }

  public replace(cmd: TCmdReplace) {
    return this.http.put(this.url, JSON.stringify(cmd), JSON_HEADERS)
  }

  public update(cmd: TCmdUpdate) {
    return this.http.patch(this.url, JSON.stringify(cmd), JSON_HEADERS)
  }

  public delete(cmd: TCmdDelete) {
    return this.http.delete(this.url, JSON_HEADERS)
  }

// "Real" REST
  // public create(cmd: TCmdCreate) {
  //   return this.http.post(this.collection.apiRoot, cmd.values)
  // }

  // public replace(cmd: TCmdReplace) {
  //   return this.http.put(`${this.collection.apiRoot}/${cmd.key}`, cmd.values)
  // }

  // public update(cmd: TCmdUpdate) {
  //   return this.http.patch(`${this.collection.apiRoot}/${cmd.key}`, cmd.values)
  // }

  // public delete(cmd: TCmdDelete) {
  //   return this.http.delete(`${this.collection.apiRoot}/${cmd.key}`)
  // }
}
