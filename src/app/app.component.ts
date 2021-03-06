import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-binding';
  currentItem = { name: 'LOGO'};
  
  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }
}
