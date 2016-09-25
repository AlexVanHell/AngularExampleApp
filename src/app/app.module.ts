import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WeafomeComponent } from './weafome/weafome.component';
import { Componente3Component } from './componente3/componente3.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifyService } from './spotify/spotify.service';
import { APP_ROUTES } from './app.routes';
import { AlumnosApiComponent } from './alumnos-api/alumnos-api.component';

@NgModule({
  declarations: [
    AppComponent,
    WeafomeComponent,
    Componente3Component,
    SpotifyComponent,
    AlumnosApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
