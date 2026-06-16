import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cliente } from '../../../models/client';
import { ClientService } from '../../../services/client.service';
import { ClientListComponent } from '../../components/client-list/client-list';
@Component({
  selector: 'app-dashboard',
  imports: [ClientListComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardPage {
  clients: Cliente[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((value) => (this.clients = value));
  }
}
