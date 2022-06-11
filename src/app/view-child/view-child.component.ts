import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit,AfterViewInit{

 public name:string='';

@ViewChild('nameRef') nameElementRef!:ElementRef;

ngAfterViewInit(): void {
  this.nameElementRef.nativeElement.focus();
  console.log(this.nameElementRef);
}

  constructor() { }

  ngOnInit(): void {
  }

}
