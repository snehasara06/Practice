import{Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'SquareRoot'
   
})
export class CustomPipe implements PipeTransform {
    transform(value:number):number {
        return Math.sqrt(value);
        
    }
   

}
