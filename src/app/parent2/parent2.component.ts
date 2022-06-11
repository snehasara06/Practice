import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit {

  public name="Sneha";
  public message='';
  constructor() { }

  ngOnInit(): void {
  }

}
