import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas

import { APP_ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { CamposComponent } from './pages/campos/campos.component';
import { VariedadesComponent } from './pages/variedades/variedades.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { from } from 'rxjs';
import { PagesComponent } from './pages/pages.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LotesComponent } from './pages/lotes/lotes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    CamposComponent,
    VariedadesComponent,
    EventosComponent,
    PagesComponent,
    PerfilComponent,
    LotesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
