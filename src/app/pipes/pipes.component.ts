import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public name="Sara";
  public title="This is angular pipes";

  public person={
  "firstName":"Sneha",
  "lastName":"Saravanakumar"
}

public today=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
