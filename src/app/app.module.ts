import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


// Rutas

import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { CamposComponent } from './pages/campos/campos.component';
import { CreateCamposComponent } from './pages/create-campos/create-campos.component';
import { CreateEventosComponent } from './pages/create-eventos/create-eventos.component';
import { CreateLotesComponent } from './pages/create-lotes/create-lotes.component';
import { CreatePerfilComponent } from './pages/create-perfil/create-perfil.component';
import { CreateVariedadesComponent } from './pages/create-variedades/create-variedades.component';
import { DeleteCamposComponent } from './pages/delete-campos/delete-campos.component';
import { DeletePerfilComponent } from './pages/delete-perfil/delete-perfil.component';
import { DeleteVariedadesComponent } from './pages/delete-variedades/delete-variedades.component';
import { EditCamposComponent } from './pages/edit-campos/edit-campos.component';
import { EditEventosComponent } from './pages/edit-eventos/edit-eventos.component';
import { EditLotesComponent } from './pages/edit-lotes/edit-lotes.component';
import { EditPerfilComponent } from './pages/edit-perfil/edit-perfil.component';
import { EditVariedadesComponent } from './pages/edit-variedades/edit-variedades.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { from } from 'rxjs';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { LotesComponent } from './pages/lotes/lotes.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { VariedadesComponent } from './pages/variedades/variedades.component';
import { VariedadesService } from './services/variedades.service';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    CamposComponent,
    CreateCamposComponent,
    CreateEventosComponent,
    CreateLotesComponent,
    CreatePerfilComponent,
    CreateVariedadesComponent,
    DeleteCamposComponent,
    DeletePerfilComponent,
    DeleteVariedadesComponent,
    EditCamposComponent,
    EditEventosComponent,
    EditLotesComponent,
    EditPerfilComponent,
    EditVariedadesComponent,
    EventosComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LotesComponent,
    NopagefoundComponent,
    PagesComponent,
    PerfilComponent,
    SidebarComponent,
    VariedadesComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [
    VariedadesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
