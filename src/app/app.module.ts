import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContatoComponent } from './views/contato/contato.component';
import { JogadorComponent } from './views/jogador/jogador.component';
import { HomeComponent } from './views/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { LoginComponent } from './services/login/login.component';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './views/contato/contato.component';
import { FooterComponent } from './views/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    JogadorComponent,
    HomeComponent,
    ContatoComponent,
    FooterComponent,
   // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
