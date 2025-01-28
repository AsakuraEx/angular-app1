import { Component, Input } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'tr[row-item]',
  imports: [],
  templateUrl: './row-item.component.html',
})
export class RowItemComponent {

  @Input() item!: Item
}
