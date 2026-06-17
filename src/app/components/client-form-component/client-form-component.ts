import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../../../models/client';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './client-form-component.html',
  styleUrl: './client-form-component.css',
})
export class ClientFormComponent {
  @Input()
  client!: Cliente | undefined;
  @Output()
  updateClient = new EventEmitter<Cliente>();

  update() {
    const value = this.loginForm.getRawValue();
    if (value) {
      const cliente: Cliente = {
        ...value,
        id: Number(value.id),
      };
      this.updateClient.emit(cliente);
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    id: new FormControl('', { nonNullable: true }),
    nombre: new FormControl('', { nonNullable: true }),
    dni: new FormControl('', { nonNullable: true }),
    empresa: new FormControl('', { nonNullable: true }),
    telefono: new FormControl('', { nonNullable: true }),
    tipoEmpresa: new FormControl('', { nonNullable: true }),
    status: new FormControl('', { nonNullable: true }),
  });

  ngOnChanges() {
    this.loginForm.patchValue({
      email: this.client?.email,
      nombre: this.client?.nombre,
      dni: this.client?.dni,
      empresa: this.client?.empresa,
      status: this.client?.status,
      telefono: this.client?.telefono,
      tipoEmpresa: this.client?.tipoEmpresa,
      id: this.client?.id.toString(),
    });
  }
}
