import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Pipe({
  name: "deliciousness",
  pure: true
})

export class DeliciousnessPipe implements PipeTransform {
  transform(input: Recipe[]) {
    var output: Recipe[] = [];
    for(var i = 0; i < input.length; i++){
      if (input[i].deliciousness === 1){
        output.push(input[i]);
      }
    }
    return output;
  }
}
