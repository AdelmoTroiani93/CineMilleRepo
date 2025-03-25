import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PagedResponse } from '../../dto/paged-response-storico.dto';

@Injectable({
  providedIn: 'root',
})
export class StoricoService {
  private dbUrl = `http://localhost:8080/api/storicos`;

  constructor(private http: HttpClient) {}

  getAllStorico(
    page: number,
    dataInizio: string,
    dataFine: string
  ): Observable<PagedResponse> {
    let params = new HttpParams();
    if (dataInizio) {
      params = params.set('dataInizio', dataInizio);
    }
    if (dataFine) {
      params = params.set('dataFine', dataFine);
    }
    return this.http.get<PagedResponse>(
      `${this.dbUrl}` + '?page=' + page + '&size=10&sort=id,asc',
      { params }
    );
  }
}
