import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.thing = this.route.params
      .map((params: Params) => ({id: params['id']}))
  }
}
