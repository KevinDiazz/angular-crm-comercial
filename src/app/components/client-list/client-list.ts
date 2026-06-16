import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Cliente } from '../../../models/client';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-list',
  imports: [RouterLink],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css',
})
export class ClientListComponent {
  @Input()
  clients: Cliente[] = [];

  // @Output()
  // delete = new EventEmitter<number>();

  // remove() {
  //   this.delete.emit(this.user.id);
  // }
}
