import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
