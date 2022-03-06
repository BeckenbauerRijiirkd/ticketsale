export interface Evento {
  id: number;
  nome: string;
  data: Date;
  valor: number;
  status: string;
  url:string;
}

export type Eventos = Array<Evento>;
