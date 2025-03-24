import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoricoComponent } from './storico/storico.component';
import { ProgrammazioneComponent } from './programmazione/programmazione.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Definisci il percorso di base che mostrerà il componente Home
  { path: 'storico', component: StoricoComponent }, // Definisci il percorso di base che mostrerà il componente Home
  { path: 'programmazione', component: ProgrammazioneComponent }, // Definisci il percorso di base che mostrerà il componente Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
