import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {name:'',power:0};

  emitCharacter():void{
    //console.log(this.character);

    if(this.character.name.length == 0) return;

    // EN JAVASCRIPT TODO PASA POR REFERENCIA, POR LO QUE PODEMOS
    // HACERLO EN MODO SPREAD... AUNQUE ANGULAR SE PUEDE ENCARGAR
    // DE ESO TAMBIEN {...this.character}
    this.onNewCharacter.emit(this.character);

    //this.character.name = '';
    //this.character.power = 0;

    this.character = {name: '', power: 0}

  }

}
