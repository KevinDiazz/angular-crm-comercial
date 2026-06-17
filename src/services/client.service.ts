import { Observable, of } from 'rxjs';
import { MOCK_CLIENTS } from '../app/mocks/mock-clients';
import { Cliente } from '../models/client';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  getClients(): Observable<Cliente[]> {
    return of(MOCK_CLIENTS);
  }
  getClientById(id: number): Observable<Cliente | undefined> {
    const client = MOCK_CLIENTS.find((cliente) => cliente.id === id);

    return of(client);
  }

  addClient() {}

  updateClient(client: Cliente) {
    const index = MOCK_CLIENTS.findIndex((cliente) => cliente.id === client.id);
    if (index !== -1) {
      MOCK_CLIENTS[index] = {
        ...client
      };
    }
  }

  deleteClient() {}
}
