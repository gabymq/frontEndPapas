import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CamposComponent } from './pages/campos/campos.component';
import { VariedadesComponent } from './pages/variedades/variedades.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LotesComponent } from './pages/lotes/lotes.component';
import { CreateVariedadesComponent } from './pages/create-variedades/create-variedades.component';
import { EditVariedadesComponent } from './pages/edit-variedades/edit-variedades.component';
import { CreateEventosComponent } from './pages/create-eventos/create-eventos.component';
import { EditEventosComponent } from './pages/edit-eventos/edit-eventos.component';
import { EditLotesComponent } from './pages/edit-lotes/edit-lotes.component';
import { CreateLotesComponent } from './pages/create-lotes/create-lotes.component';
import { DeleteCamposComponent } from './pages/delete-campos/delete-campos.component';
import { EditCamposComponent } from './pages/edit-campos/edit-campos.component';
import { CreateCamposComponent } from './pages/create-campos/create-campos.component';
import { CreatePerfilComponent } from './pages/create-perfil/create-perfil.component';
import { EditPerfilComponent } from './pages/edit-perfil/edit-perfil.component';
import { DeletePerfilComponent } from './pages/delete-perfil/delete-perfil.component';
import { DeleteVariedadesComponent } from './pages/delete-variedades/delete-variedades.component';


const appRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },

      { path: 'campos', component: CamposComponent },
      { path: 'create_campos', component: CreateCamposComponent },
      { path: 'edit_campos', component: EditCamposComponent },
      { path: 'delete_campos', component: DeleteCamposComponent },

      { path: 'variedades', component: VariedadesComponent },
      { path: 'create_variedades', component: CreateVariedadesComponent },
      { path: 'edit_variedades/:id', component: EditVariedadesComponent },
      { path: 'delete_variedades/:id', component: DeleteVariedadesComponent },

      { path: 'eventos', component: EventosComponent },
      { path: 'create_eventos', component: CreateEventosComponent },
      { path: 'edit_eventos', component: EditEventosComponent },

      { path: 'perfil', component: PerfilComponent },
      { path: 'create_perfil', component: CreatePerfilComponent },
      { path: 'edit_perfil', component: EditPerfilComponent },
      { path: 'delete_perfil', component: DeletePerfilComponent },

      { path: 'lotes', component: LotesComponent },
      { path: 'create_lotes', component: CreateLotesComponent },
      { path: 'edit_lotes', component: EditLotesComponent },

      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent}

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });


