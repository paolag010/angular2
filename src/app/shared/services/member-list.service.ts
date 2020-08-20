import { Injectable } from '@angular/core';
import {Member} from '../../shared/models/member.model';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import {jsonbin} from '../../../environments/jsonbin';
import {tap} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  public autoIncrement: number = 0;
  public memberList: Member [] = [];

  public url = jsonbin.bin.members;
  public options = { headers: new HttpHeaders(jsonbin.headers) }

  constructor(private http: HttpClient) { }

  post(member: Member): Observable<any>{
  
    this.memberList.push(member);

    return this.http.put<Member[]>(this.url,this.memberList,this.options);

  }

  get() : Observable<Member[]>{
    //return this.memberList;
    return this.http.get<Member[]>(
      this.url,
      this.options
    ).pipe(
      tap((data : Member[]) => {
          console.log("dans tap");
          this.memberList = data;
      })
    );
  }

  getById(id : number): Member | null{
    return this.memberList.find(x => x.id === id);
  }

  getAutoIncrement(): number{
    this.autoIncrement++;
    return this.autoIncrement;
  }

  deleteById(id : number){
    this.memberList = this.memberList.filter(x => x.id !== id);
  }

  delete(member : Member): Member{
    this.memberList.splice(this.memberList.indexOf(member), 1);
    return member;
  }
}
