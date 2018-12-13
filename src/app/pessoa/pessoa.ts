import { Endereco } from "../endereco/endereco";
import { Document } from "../document/document";

export class Pessoa {
  id: number;
  nome: string;
  login: string;
  senha: string;
  endereco: Endereco;
  documents: Document[];
}
