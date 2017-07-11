import * as admin from 'firebase-admin'

export class CollectionReference {
  public ref: admin.database.Reference

  constructor(public db: admin.database.Database, public firebasePath: string) {
    this.ref = this.db.ref(this.firebasePath)
  }

  public by(orderByChild: string, equalTo: string) {
    return this.ref
      .orderByChild(orderByChild)
      .equalTo(equalTo)
      .once('value')
  }

  public one(key: string) {
    return this.ref
      .child(key)
      .once('value')
  }

  public push(values: Object) {
    return this.ref
      .push(values)
  }

  public set(key: string, values: Object) {
    return this.ref
      .child(key)
      .set(values)
  }

  public update(key: string, values: Object) {
    return this.ref
      .child(key)
      .update(values)
  }

  public delete(key: string) {
    return this.ref
      .child(key)
      .remove()
  }
}
