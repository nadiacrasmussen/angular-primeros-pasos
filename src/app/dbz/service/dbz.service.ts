import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import{ v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {


  public characters: Character[] = [
    {id:uuid(),  name: 'klilin', power: 1000 },
    {id:uuid(),  name: 'goku', power: 1500 },
    {id:uuid(),  name: 'vulma', power: 150 },
    { id:uuid(), name: 'goku2', power: 300 }
  ];
  addCharacter(character: Character):void{
  const NewCharacter :Character ={id: uuid(), ...character};
  this.characters.push(character);
  }
 deleteCharacterById(id:string){
  this.characters = this.characters.filter (character => character.id !== id);
 }
   }

