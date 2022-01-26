export interface Evento {
  id: number;
  nome: string;
  data: Date;
  valor: number;
  status: string;
}

export type Eventos = Array<Evento>;
