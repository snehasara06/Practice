import { Component, OnInit } from '@angular/core';
import { InteractService } from '../services/interact.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.scss']
})
export class GreetComponent implements OnInit {

  constructor( public interctService:InteractService) { }

  ngOnInit(): void {
    this.interctService.teacherMsg.subscribe(message=>{
      if(message==="Good morning!"){
        alert("Good morning Mam.");
      }
      else if(message==="Great Work"){
        alert("Thank you mam!");
      }
    })
  }
 

}
