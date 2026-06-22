import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cliente } from '../../../models/client';
import { ClientService } from '../../../services/client.service';
import { ClientListComponent } from '../../components/client-list/client-list';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ClientFormComponent } from '../../components/client-form-component/client-form-component';
import { Stats } from "../../components/stats/stats";
@Component({
  selector: 'app-dashboard',
  imports: [ClientListComponent, ClientFormComponent, Stats],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardPage {
  clients: Cliente[] = [];
  formActive: boolean = false;
  constructor(private clientService: ClientService) {}

  loadClients() {
    this.clientService.getClients().subscribe((value) => {
      this.clients = [...value];
      console.log(this.clients.length);
    });
  }
  ngOnInit() {
    this.loadClients();
  }
  showForm() {
    this.formActive = !this.formActive;
  }

  insertClient(client: Cliente) {
    this.clientService.addClient(client);
    this.loadClients();
    this.showForm();
  }
}
