export interface Usuario {
  id?: number;
  name?: string;
  email?: string;
  tipo?: [UsuarioRole];
}

export interface UsuarioRole {
  authority: string;
  id: number;
  nome: string;
}
