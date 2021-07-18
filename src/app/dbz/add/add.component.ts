import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})

export class AddComponent {

  @Input() new : Character = {
    name: '',
    power: 0
  }

  // @Output() onNewCharacter : EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService: DbzService){}

  addCharacter():void {
    if(this.new.name.trim().length ===0){
      return;
    }

    this.dbzService.addCharacter(this.new);
    // this.onNewCharacter.emit(this.new);
    this.new = {name:'',power:0};
  }

}
