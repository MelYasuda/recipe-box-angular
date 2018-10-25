import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Pipe({
  name: "coocked",
  pure: false
})

export class CoockedPipe implements PipeTransform {
  transform(input: Recipe[], desiredCoocked) {
    if (desiredCoocked === "non-coocked"){
      var output: Recipe[] = [];
      for(var i = 0; i < input.length; i++){
        if (input[i].coocked === false){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCoocked === "coocked") {
      var output: Recipe[] = [];
      for(var i = 0; i < input.length; i++){
        if (input[i].coocked === true){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
