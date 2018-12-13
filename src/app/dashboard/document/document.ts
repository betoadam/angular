import { Categoria } from "../../categoria/categoria";
import { Keyword } from "../../keyword/keyword";

export class Document {
  id: number;
  description: string;
  date: Date;
  lastUpdate: Date;
  fileName: string;
  categoria: Categoria;
  keywords: Keyword[];
}
