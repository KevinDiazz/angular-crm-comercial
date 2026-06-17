import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { Cliente } from '../../../models/client';
import { ClientFormComponent } from '../../components/client-form-component/client-form-component';

@Component({
  selector: 'app-client-detail',
  imports: [ClientFormComponent],
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
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClientById(Number(id)).subscribe((value) => {
      if (value) {
        this.client = value;
      }
    });
  }

  updateClient(client: Cliente) {
    this.clientService.updateClient(client);
  }

  activateEdit(){
    this.editClient=!this.editClient
  }
}
