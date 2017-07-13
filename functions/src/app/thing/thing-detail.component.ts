import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Meta } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

import {
  ThingRecord,
  ThingService,
} from '../../../shared/thing/client'

@Component({
  selector: 'thing-detail',
  template: `
<div>
  <h2>Thing: {{(thing | async).name}}</h2>
</div>
`
})
export class ThingDetailComponent {
  public thing: Observable<ThingRecord>;

  constructor(private things: ThingService, private route: ActivatedRoute, private meta: Meta) {
    this.thing = route.params.flatMap(p => things.one(p.id))
  }

  ngOnInit() {
    this.thing.subscribe((thing: ThingRecord) => {
      this.meta.updateTag({
        content: 'Thing ' + thing.name,
      },
      'property="og:title"'
      )
      this.meta.updateTag({
        content: 'This is description for Thing ' + thing.name,
      },
      'property="og:description"'
      )
    })
  }
}
