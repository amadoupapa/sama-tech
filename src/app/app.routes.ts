import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppDevComponent } from './pages/services/app-dev/app-dev.component';
import { IaComponent } from './pages/services/ia/ia.component';
import { DetailsProjetComponent } from './pages/details-projet/details-projet.component';
import { HomeDashComponent } from './components/admin/dash/home-dash/home-dash.component';
import { GestionOffresComponent } from './components/admin/dash/gestion-offres/gestion-offres.component';
import { AuthGuard } from './guards/role.guard';
import { LoginComponent } from './components/admin/login/login.component';

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
  {
    path: 'admin/login',
    component: LoginComponent,
  },

  {
    path: 'admin/dash',
    component: HomeDashComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:'admin/gestion-offres',
    component: GestionOffresComponent,
    canActivate:[AuthGuard]
  }
];
