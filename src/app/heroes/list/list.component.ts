import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent  {

  heroes: string[] = ['Luffy', 'Zoro', 'Ussop', 'Chopper'];
  erasedHeroes: string[] = [];

  deleteHero():void{
    const heroErased = this.heroes.shift() || '';
    if(heroErased !== ''){
      this.erasedHeroes.push(heroErased);
    }
  }

}
