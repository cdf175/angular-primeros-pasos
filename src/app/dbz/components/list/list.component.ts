import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


    @Input()
    public characterList: Character[] = [
      {
        id: "",
        name:"Trunks",
        power:10
      },
    ];

    @Output()
    public onDeleteId= new EventEmitter<string>();

    onDeleteCharacter(index?:string):void{
      //TODO: emitir id personaje 

      if(!index) return

      this.onDeleteId.emit(index);

      console.log({index});
    };

}
