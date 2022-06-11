import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public childEvent=new EventEmitter();

  outputEvent(){
    this.childEvent.emit('Hey Sneha!');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
