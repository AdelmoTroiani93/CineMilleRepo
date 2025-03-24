import { Component, OnInit } from '@angular/core';
import { ProgrammazioneService } from './services/programmazione.service';
import { ProiezioneDTO } from '../dto/proiezione.dto';
import { PagedResponse } from '../dto/paged-response-proiezione.dto';

@Component({
  selector: 'app-programmazione',
  standalone: false,
  templateUrl: './programmazione.component.html',
  styleUrl: './programmazione.component.css',
})
export class ProgrammazioneComponent implements OnInit {
  proiezioni!: ProiezioneDTO[];
  currentPage: number = 0;
  pageMax: number = 0;
  pageArray: any;
  dataProiezione: any = '';
  dataFine: any = '';
  constructor(private programmazioneService: ProgrammazioneService) {}

  ngOnInit(): void {
    this.programmazioneService
      .getAllProiezione(this.currentPage, this.dataProiezione, this.dataFine)
      .subscribe((dataProiezioni: PagedResponse) => {
        this.pageMax = dataProiezioni.totalPages;
        this.pageArray = Array.from({ length: this.pageMax }, (_, i) => i);
        this.proiezioni = dataProiezioni.content;
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
    this.dataProiezione = '';
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
