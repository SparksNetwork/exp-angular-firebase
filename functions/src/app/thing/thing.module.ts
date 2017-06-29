import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ThingDetailComponent } from './thing-detail.component';
 
import { ThingRoutingModule } from './thing-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    ThingRoutingModule
  ],
  declarations: [
    ThingDetailComponent
  ],
})
export class ThingModule {}
