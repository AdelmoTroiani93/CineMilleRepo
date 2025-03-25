import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProiezioneDTO } from '../dto/proiezione.dto';
import { ProgrammazioneService } from '../programmazione/services/programmazione.service';

import { StoricoDTO } from '../dto/storico.dto';
import { PagedResponse } from '../dto/paged-response-storico.dto';
import { StoricoService } from './services/storico.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-storico',
  standalone: false,
  templateUrl: './storico.component.html',
  styleUrl: './storico.component.css',
})
export class StoricoComponent implements OnInit, OnDestroy {
  storico!: StoricoDTO[];
  currentPage: number = 0;
  pageMax: number = 0;
  pageArray: any;
  dataInizio: any = '';
  dataFine: any = '';
  private destroy$ = new Subject<void>();
  constructor(private storicoService: StoricoService) {}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.storicoService
      .getAllStorico(this.currentPage, this.dataInizio, this.dataFine)
      .pipe(takeUntil(this.destroy$))
      .subscribe((dataProiezioni: PagedResponse) => {
        this.pageMax = dataProiezioni.totalPages;
        this.pageArray = Array.from({ length: this.pageMax }, (_, i) => i);
        this.storico = dataProiezioni.content;
      });
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.ngOnInit();
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.ngOnInit();
    }
  }
  reset() {
    this.dataInizio = '';
    this.dataFine = '';
    this.ngOnInit();
  }

  filtraProiezioni() {
    this.ngOnInit();
  }

  nextPage() {
    if (this.currentPage < this.pageMax) {
      this.currentPage++;
      this.ngOnInit();
    }
  }
}
