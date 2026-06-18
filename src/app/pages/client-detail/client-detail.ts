import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { Cliente } from '../../../models/client';
import { ClientFormComponent } from '../../components/client-form-component/client-form-component';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { DeleteBanner } from '../../components/delete-banner/delete-banner';

@Component({
  selector: 'app-client-detail',
  imports: [ClientFormComponent, DeleteBanner],
  templateUrl: './client-detail.html',
  styleUrl: './client-detail.css',
})
export class ClientDetailPage {
  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
  ) {}
  client: Cliente | undefined = undefined;
  editClient: boolean = false;
  confirmDelete: boolean = false;
  userDeleted: boolean = false;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClientById(Number(id)).subscribe((value) => {
      if (value) {
        this.client = value;
      }
    });
  }

  deleteClient(client: Cliente) {
    const isEliminated = this.clientService.deleteClient(client);
    if (isEliminated) {
      this.userDeleted = true;
    }
  }

  updateClient(client: Cliente) {
    this.clientService.updateClient(client);
    this.client = client;
    this.editClient = false;
  }

  activateEdit() {
    this.editClient = !this.editClient;
    if (this.confirmDelete) {
      this.confirmDelete = !this.confirmDelete;
    }
  }

  activateDelete() {
    this.confirmDelete = !this.confirmDelete;
    if (this.editClient) {
      this.editClient = false;
    }
  }
}
