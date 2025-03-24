import { ProiezioneDTO } from './proiezione.dto';

export interface PagedResponse {
  content: ProiezioneDTO[]; // Contiene le proiezioni della pagina corrente
  totalElements: number; // Totale delle proiezioni nel database
  totalPages: number; // Numero totale di pagine disponibili
  size: number; // Quanti elementi per pagina
  number: number; // Numero della pagina corrente
}
