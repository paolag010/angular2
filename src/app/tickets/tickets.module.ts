import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsComponent } from './tickets.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TicketsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule { }
