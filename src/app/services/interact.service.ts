import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractService {

  constructor() { }

  private msg=new Subject<string>();
  teacherMsg=this.msg.asObservable();

  send(message:string){
    this.msg.next(message);
  }
}
