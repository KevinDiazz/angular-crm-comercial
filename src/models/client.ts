export interface Cliente {
  id:number;
    nombre: string;
  dni: string;
  email: string;
  empresa: string;
  telefono: string;
  tipoEmpresa: TipoEmpresa;
  status: Status;
}

export type TipoEmpresa = 'marketing' | 'construcion' | 'restauracion' | 'limpieza' | 'agricultura';

export type Status = 'lead' | 'contactado' | 'propuesta' | 'cliente' | 'perdido';
