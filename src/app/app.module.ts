import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
=======

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
>>>>>>> 3354aa5fce28777fba45c5de3a21ad935ddf895f

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
<<<<<<< HEAD
    HeroDetailComponent,
    MessagesComponent
=======
    HeroDetailComponent
>>>>>>> 3354aa5fce28777fba45c5de3a21ad935ddf895f
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
<<<<<<< HEAD
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [ AppComponent ]
=======
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> 3354aa5fce28777fba45c5de3a21ad935ddf895f
})
export class AppModule { }