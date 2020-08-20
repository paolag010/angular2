import { Component, OnInit } from '@angular/core';

import {Member} from '../../shared/models/member.model';
import {MemberListService} from '../../shared/services/member-list.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {jsonbin} from '../../../environments/jsonbin';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})
export class MemberCreateComponent implements OnInit {

  public foo: string = "Hello Create Component";
  public memberForm: FormGroup;
  public member : Member;

  public url = jsonbin.bin.members;
  public options = { headers: new HttpHeaders(jsonbin.headers) }

  constructor(
    private fb: FormBuilder, 
    private memberListService: MemberListService, 
    private serviceRouter: Router, 
    private http: HttpClient
  ) { 
    //this.restGET();
    //this.restPUT();
  }

  ngOnInit(): void { 
    this.memberForm=this.fb.group( { 
      firstName: ['', [
                            Validators.required, 
                            Validators.minLength(3)
                 ]],
      lastName: ['', [
                  Validators.required, 
                  Validators.minLength(3)
       ]],
      role: ['', [
        Validators.required
      ]]
    }, {updateOn: "submit"});

    console.log(this.memberForm.controls.firstName.valid);
  }

  onCreate(e: MouseEvent): void { 
    console.log(e);
  }
                                                              
  create(): void {
    if(this.memberForm.valid){

      this.memberListService.post({
        id: this.memberListService.getAutoIncrement(),
        firstName: this.memberForm.controls.firstName.value,
        lastName: this.memberForm.controls.lastName.value,
        role: this.memberForm.controls.role.value,
      }).subscribe(
        //sucess
        (data)=>{
          console.log(data);
          this.serviceRouter.navigate(["/members/list"]);
        },
        //error
        (error)=>{
          console.log(error);
        }
      );
    }

    
  }

  restGET(){
    this.http.get(this.url,this.options).subscribe(
      //sucess
      (data)=>{console.log(data);},
      //error
      (error)=>{console.log(error);},
    )
  }

  restPUT(){
    const model = `{ "idClient": "222", "name": "Client XXX", "telephone": "072222222" }`;
    this.http.put(this.url,model,this.options).subscribe(
      //sucess
      (data)=>{console.log(data);},
      //error
      (error)=>{console.log(error);},
    )




  }

}
