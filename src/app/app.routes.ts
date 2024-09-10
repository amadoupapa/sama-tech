import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppDevComponent } from './pages/services/app-dev/app-dev.component';
import { IaComponent } from './pages/services/ia/ia.component';
import { DetailsProjetComponent } from './pages/details-projet/details-projet.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'services/developement-applications',
    component: AppDevComponent,
  },

  {
    path: 'services/ia',
    component: IaComponent,
  },

  {
    path: 'details-projet/:idProjet',
    component: DetailsProjetComponent,
  },
];
