import * as admin from 'firebase-admin'
import { CollectionReference, RESTResource } from '../../lib/firebase-collections/server'
import {
  ThingCollection,
  ThingCmdCreate,
  ThingCmdReplace,
  ThingCmdUpdate,
  ThingCmdDelete,
} from './shared'

class Reference extends CollectionReference {
  public byFoo(equalTo: string) { return this.by('fooKey', equalTo) }
}
export const ThingReference = new Reference(admin.database(), ThingCollection.firebasePath)

export class Resource extends RESTResource<
  ThingCmdCreate,
  ThingCmdReplace,
  ThingCmdUpdate> {
  public create(cmd: ThingCmdCreate) {
    // auth and stuff
    return super.create(cmd)
  }
}
export const ThingResource = new Resource(ThingCollection.apiRoot, ThingReference)
