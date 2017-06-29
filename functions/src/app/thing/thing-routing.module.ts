import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ThingDetailComponent } from './thing-detail.component'

const routes: Routes = [
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
