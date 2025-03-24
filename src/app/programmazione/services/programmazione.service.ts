import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PagedResponse } from '../../dto/paged-response-proiezione.dto';

@Injectable({
  providedIn: 'root',
})
export class ProgrammazioneService {
  private dbUrl = `http://localhost:8080/api/proieziones`;

  constructor(private http: HttpClient) {}

  getAllProiezione(
    page: number,
    dataProiezione: string,
    dataFine: string
  ): Observable<PagedResponse> {
    let params = new HttpParams();
    if (dataProiezione) {
      params = params.set('dataProiezione', dataProiezione);
    }
    if (dataFine) {
      params = params.set('dataFine', dataFine);
    }
    return this.http.get<PagedResponse>(
      `${this.dbUrl}` + '?page=' + page + '&size=30&sort=id,asc',
      { params }
    );
  }
}
