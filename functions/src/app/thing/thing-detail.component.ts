import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Meta } from '@angular/platform-browser';

import { Thing } from './thing.model';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'thing-detail',
  template: `
<div>
  <h2>Thing: {{(thing | async).id}}</h2>
</div>
`
})
export class ThingDetailComponent {
  public thing: Observable<Thing>;

  constructor(private route: ActivatedRoute, private meta: Meta) {}

  ngOnInit() {
    this.thing = this.route.params
      .map((params: Params) => ({id: params['id']}))

    this.thing.subscribe((thing: Thing) => {
      this.meta.updateTag({
        content: 'Thing ' + thing.id,
      },
      "property='og:title'"
      )
      this.meta.updateTag({
        content: 'This is description for Thing ' + thing.id,
      },
      "property='og:description'"
      )
    })
  }
}
