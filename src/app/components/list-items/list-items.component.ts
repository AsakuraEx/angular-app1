import { Component, Input } from '@angular/core';
import { Item } from '../../models/Item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'app-list-items',
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html',
})
export class ListItemsComponent {

  @Input() items: Item[] = []
}
