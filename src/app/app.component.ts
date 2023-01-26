import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day32Lecture';

  items = [
    {name:'AirPod', id: 1, price: 250},
    {name:'Laptop', id: 2, price: 350},
    {name:'Bottle', id: 3, price: 450},
    {name:'Mouse', id: 4, price: 550},
]

selectedItem: any;
//Parent receiving from the child and keeping the data
OnItemReceive(item:any) {
  this.selectedItem= item;
}
}
