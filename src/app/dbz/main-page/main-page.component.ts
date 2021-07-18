import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  new: Character = {
    name: '',
    power: 0
  };
  constructor(){  }

    // get characters():Character[]{
  //   return this.dbzService.characters;
  // }

  // addNewCharacter(character : Character ):void{
  //   this.characters.push(character);
  // }

  // constructor(private dbzService: DbzService){  }
}
