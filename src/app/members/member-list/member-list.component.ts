import { Component, OnInit } from '@angular/core';
import { MemberListService } from 'src/app/shared/services/member-list.service';
import { Router } from '@angular/router';
import { Member } from 'src/app/shared/models/member.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  public membersList: Member [];

  constructor(private memberListService: MemberListService, private serviceRouter: Router) { }

  ngOnInit(): void {
    
    this.memberListService.get().subscribe(
      //sucess
      (data:Member[])=>{
        console.log("dans suscribe");
        this.membersList = data;
      },
      //error
      (error)=>{console.log(error);}
    );    
    
  }

  deleteMember(id: number) : void{
    this.memberListService.deleteById(id);
    this.serviceRouter.navigate(["/members/list"]);
  }

}
