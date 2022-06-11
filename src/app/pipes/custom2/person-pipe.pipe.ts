import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personPipe'
})
export class PersonPipePipe implements PipeTransform {

  // transform(value: string, city:string): any {

  //   return `<div style="background-color:#ffffcc">' +city+'</div>`
    // if(cityCode==='NYC'){
    //   return "New York City!!!";
    // }
    // else{
    //   return "India!";
    // }
    // return 'City Name: '+city;
  // }
  transform(value: number, ...args: number[]): unknown {
    const [price]=args;
    return value*price;
  }

}
