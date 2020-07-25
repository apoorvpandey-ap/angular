import { Injectable } from '@angular/core';
<<<<<<< HEAD

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
=======
import { Hero } from './hero';
import { LIST_OF_HERO } from './mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}
>>>>>>> 3354aa5fce28777fba45c5de3a21ad935ddf895f
