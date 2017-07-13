import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ThingListComponent } from './thing-list.component'
import { ThingDetailComponent } from './thing-detail.component'
import { ThingRowComponent } from './thing-row.component'
import { ThingRoutingModule } from './thing-routing.module'

import {
  ThingService
} from '../../../shared/thing/client'

@NgModule({
  imports: [
    CommonModule,
    ThingRoutingModule,
  ],
  providers: [
    ThingService,
  ],
  declarations: [
    ThingListComponent,
    ThingRowComponent,
    ThingDetailComponent,
  ],
})
export class ThingModule {}
