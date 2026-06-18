import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente, Status, TipoEmpresa } from '../../../models/client';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  @Output()
  showForm = new EventEmitter();
  
  update() {
    const value = this.loginForm.getRawValue();
    if (value) {
      const cliente: Cliente = {
        ...value,
        id: Number(value.id),
        tipoEmpresa: value.tipoEmpresa as TipoEmpresa,
        status: value.status as Status,
      };
      this.updateClient.emit(cliente);
    }
  }
showDeleteBanner(){

}
  showFormEmit(){
 this.showForm.emit();
  }

  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    id: new FormControl('', { nonNullable: true }),
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    dni: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[0-9]{8}[A-Za-z]$/)],
    }),
    empresa: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    telefono: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern(/^[69][0-9]{8}$/),
      ],
    }),
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
