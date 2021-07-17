import { Component } from "@angular/core";

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})

export class HeroComponent{
 name: string = 'Arce';
 age: number = 25;

 get nameToUpperCase():string{
   return this.name.toUpperCase();
 }

 getName(): string{
  return `${this.name} - ${this.age}`;
 }

 changeName(): void{
   this.name = 'Francisco';
 }

 changeAge():void{
   this.age = 30;
 }
}
