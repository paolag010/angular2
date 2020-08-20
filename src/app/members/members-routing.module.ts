import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersComponent } from './members.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberComponent } from './member/member.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberUpdateComponent } from './member-update/member-update.component';


const routes: Routes = [
  {
    path: "members",
    component: MembersComponent,
    children : [
      {
        path: "list",
        component : MemberListComponent
      },
      {
        path: "create",
        component : MemberCreateComponent
      },
      {
        path: ":id/update",
        component : MemberUpdateComponent
      },
      {
        path: ":id",
        component : MemberComponent
      }
    ]
  },
  //{
  //  path: "members/list",
  //  component: MemberListComponent
  //},
  //{
  //  path: "members/create",
  //  component: MemberCreateComponent
  //},
  //{
  //  path: "members/:id",
  //  component: MemberComponent
  //},
  //{
  //  path: "members/:id/update",
  //  component: MemberUpdateComponent
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
