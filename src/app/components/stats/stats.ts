import { Component, Input } from '@angular/core';
import { Cliente } from '../../../models/client';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  @Input()
  clients!: Cliente[];

  get leadCount(): number {
    return this.clients.filter((c) => c.status === 'lead').length;
  }

  get contactadoCount(): number {
    return this.clients.filter((c) => c.status === 'contactado').length;
  }

  get propuestaCount(): number {
    return this.clients.filter((c) => c.status === 'propuesta').length;
  }

  get clienteCount(): number {
    return this.clients.filter((c) => c.status === 'cliente').length;
  }

  get perdidoCount(): number {
    return this.clients.filter((c) => c.status === 'perdido').length;
  }
}
