import { Component, OnInit } from '@angular/core';
import { MemberListService } from 'src/app/shared/services/member-list.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/shared/models/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  public id: number;
  public member: Member = new Member;

  constructor(private memberListService: MemberListService, private serviceRouter: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  parseInt(this.route.snapshot.paramMap.get('id'));
    this.member = this.memberListService.getById(this.id);

    if (!(this.member)) {
      this.serviceRouter.navigate(["/members"]);
    }
  }

  public onDelete(): void {
    this.memberListService.delete(this.member);
    this.serviceRouter.navigate(["/members"]);
  }

}
