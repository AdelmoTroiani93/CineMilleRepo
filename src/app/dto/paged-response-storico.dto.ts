import { StoricoDTO } from './storico.dto';

export interface PagedResponse {
  content: StoricoDTO[]; // Contiene le proiezioni della pagina corrente
  totalElements: number; // Totale delle proiezioni nel database
  totalPages: number; // Numero totale di pagine disponibili
  size: number; // Quanti elementi per pagina
  number: number; // Numero della pagina corrente
}
