import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  /*
  @Output()
  public onDelete : EventEmitter<number> = new EventEmitter();
  */

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name:'',
    power: 0
  }];

  //EVENTO ONDELETEID, EMITIMOS EL INDEX VALUE


  /*
  onDeleteCharacter(index:number): void{
    // TODO: Emitir el ID del personaje
    //console.log({index});
    this.onDelete.emit(index);
  }*/

  onDeleteCharacter(id?:string): void{
    // TODO: Emitir el ID del personaje
    if(!id) return;
    //console.log({index});
    this.onDelete.emit(id);
  }

}
