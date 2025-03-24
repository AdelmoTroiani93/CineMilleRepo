import { FilmDTO } from './film.dto';
import { SalaDTO } from './sala.dto';

export interface StoricoDTO {
  id: number;
  dataProiezione: Date;
  dataFine: Date;
  film: FilmDTO;
  sala: SalaDTO;
}
