import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Meta } from '@angular/platform-browser';

import { ThingRecord, ThingService } from '../../../shared/thing/client'

@Component({
  selector: 'thing-row',
  template: `
<div>
  <h2>Thing {{thing.name}}</h2>
  <a [routerLink]="['/thing', thing.$key]" target="new">Detail</a>
  | <button (click)='things.delete(thing.$key)'>Delete</button>
</div>
`
})
export class ThingRowComponent {
  @Input() public thing: ThingRecord;

  constructor(public things: ThingService) {}
}
