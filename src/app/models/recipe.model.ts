export class Recipe {
  coocked: boolean = false;
  constructor(public name: string, public ingredients: string, public directions: string, public deliciousness: number) {}
}
