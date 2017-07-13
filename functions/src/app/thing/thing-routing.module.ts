import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ThingListComponent } from './thing-list.component'
import { ThingDetailComponent } from './thing-detail.component'

const routes: Routes = [
  {
    path: 'thing',
    component: ThingListComponent
  },
  {
    path: 'thing/:id',
    component: ThingDetailComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ThingRoutingModule { }
