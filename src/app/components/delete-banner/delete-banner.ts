import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../../../models/client';

@Component({
  selector: 'app-delete-banner',
  imports: [],
  templateUrl: './delete-banner.html',
  styleUrl: './delete-banner.css',
})
export class DeleteBanner {
  @Input()
  client!: Cliente | undefined;
  @Output()
  confirmDelete = new EventEmitter();

  @Output()
  deleteClient = new EventEmitter<Cliente>();

  @Output()
  closeBanner = new EventEmitter();

  deleteConfirm() {
    this.confirmDelete.emit();
  }

  deleteClientEmit(client: Cliente) {
    this.deleteClient.emit(client);
  }

  confirmDeleteEmit(){
    this.closeBanner.emit()
  }
}
