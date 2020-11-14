import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { NomPipe } from './nom.pipe';
import { ListmaterielComponent } from './composants/informatique/listmateriel/listmateriel.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NomPipe,
    ListmaterielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
