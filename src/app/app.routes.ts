import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { CamposComponent } from "./pages/campos/campos.component";
import { VariedadesComponent } from "./pages/variedades/variedades.component";
import { EventosComponent } from "./pages/eventos/eventos.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import { PagesComponent } from "./pages/pages.component";
import { PerfilComponent } from "./pages/perfil/perfil.component";
import { LotesComponent } from "./pages/lotes/lotes.component";


const appRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'campos', component: CamposComponent },
      { path: 'variedades', component: VariedadesComponent },
      { path: 'eventos', component: EventosComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'lotes', component: LotesComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent}

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });


