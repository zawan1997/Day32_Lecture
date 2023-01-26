import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  //Input is parent towards child
  @Input() itemList :any[] = [];
  
  @Output() newItemEvent = new EventEmitter<any>();


  //Creating method to emit data back to parent
  //Configured the Child component in item.html to allow click
  onItemClick(item:any) {
    this.newItemEvent.emit(item);
  }
}
