import { Component, Input } from '@angular/core';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-client-view',
  imports: [],
  templateUrl: './client-view.component.html',
})
export class ClientViewComponent {

  @Input() client!: Client
}
