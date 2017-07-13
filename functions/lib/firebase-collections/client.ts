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

  public all(): FirebaseListObservable<TRecord[]> {
    return this.db.list(this.collection.firebasePath)
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

  public replace(key: string, cmd: TCmdReplace) {
    return this.http.put(`${this.url}/${key}`, JSON.stringify(cmd), JSON_HEADERS)
  }

  public update(key: string, cmd: TCmdUpdate) {
    return this.http.patch(`${this.url}/${key}`, JSON.stringify(cmd), JSON_HEADERS)
  }

  public delete(key: string) {
    return this.http.delete(`${this.url}/${key}`, JSON_HEADERS)
  }

}
