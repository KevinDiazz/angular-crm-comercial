import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { Cliente } from '../../../models/client';

@Component({
  selector: 'app-client-detail',
  imports: [],
  templateUrl: './client-detail.html',
  styleUrl: './client-detail.css',
})
export class ClientDetailPage {
  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
  ) {}
  client: Cliente | undefined = undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClientById(Number(id)).subscribe((value) => {
      if (value) {
        this.client = value;
      }
    });
  }
}
