import { Component, Input } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Meta } from '@angular/platform-browser'
import { FirebaseListObservable } from 'angularfire2/database'

import {
  ThingRecord,
  ThingService
} from '../../../shared/thing/client'

@Component({
  selector: 'thing-list',
  template: `
<div>
  <div *ngFor="let thing of allThings | async">
    <thing-row [thing]="thing"></thing-row>
  </div>
</div>
`
})
export class ThingListComponent {
  public allThings: FirebaseListObservable<ThingRecord[]>

  constructor(public thing: ThingService) {
    this.allThings = thing.all()
  }

}
