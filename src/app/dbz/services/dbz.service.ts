import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id:uuid(),
      name:'Krillin',
      power: 1000
    },
    {
      id:uuid(),
      name:'Goku',
      power: 9500
    },
    {
      id:uuid(),
      name:'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character:Character): void {
    //console.log('MainPage');
    //console.log(character);
    // PRIMERO PONER EL SPREAD Y LUEGO LO QUE SE QUIERE SOBREESCRIBIR
    const newCharacter:Character = {
      id: uuid(),...character}
    this.characters.push(newCharacter);
  }

  // HACER ALGO AQUI CUANDO SE RECIBA EL ONDELETE
  onDeleteCharacter(index:number):void{
    //this.characters.splice
    console.log('mainpage index: '+index);
    this.characters.splice(index,1);
  }

  // TODO
  deleteCharacterById(id: string){
    console.log('ID ELIMINADO '+id);
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
