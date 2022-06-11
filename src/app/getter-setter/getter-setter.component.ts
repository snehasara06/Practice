import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-getter-setter',
  templateUrl: './getter-setter.component.html',
  styleUrls: ['./getter-setter.component.scss']
})
export class GetterSetterComponent implements OnInit {

  private logIn!: boolean;

  
  message!: string;

   public get loggedIn(): boolean {
    return this.logIn;
  }
  @Input()
   public set loggedIn(value: boolean){
    this.logIn = value;
    if (value === true) {
      this.message = "Hai Sneha:)";
    }
    else {
      this.message = "Logged out:("
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
