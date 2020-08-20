import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';

import { SharedModule } from '../shared/shared.module';
import { MembersRoutingModule } from './members-routing.module';
import { MemberComponent } from './member/member.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MemberListComponent } from './member-list/member-list.component';


@NgModule({
  declarations: [MembersComponent, MemberComponent, MemberCreateComponent, MemberUpdateComponent, MemberListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
