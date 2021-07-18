import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name:'Vegata',
      power: 8000
    }
  ];

  get characters():Character[]{
    return [...this._characters];
  }

  constructor(){  }

  addCharacter(character:Character):void{
    this._characters.push(character);
  }
}
