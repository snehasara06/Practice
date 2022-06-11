import { Component, OnInit } from '@angular/core';
import { InteractService } from '../services/interact.service';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.scss']
})
export class Parent4Component implements OnInit {

  constructor(public interactService: InteractService) { }

  ngOnInit(): void {
  }
  msg1: string = "Good morning!"
  msg2: string = "Great Work";
  greet() {
    this.interactService.send(this.msg1);
  }
  applaude() {
    this.interactService.send(this.msg2);
  }
}
