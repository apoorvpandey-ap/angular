import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
=======
import { Hero } from '../hero';
import { LIST_OF_HERO } from '../mock-heroes';
import { HeroService } from '../hero.service';
>>>>>>> 3354aa5fce28777fba45c5de3a21ad935ddf895f

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
<<<<<<< HEAD

  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
=======
  hero: Hero = {
    id: 1,
    name: 'Apoorv'
    
  };
  heroes_list_for_html = LIST_OF_HERO ;
  selectedHero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
  constructor() { }

  ngOnInit() {
  }

>>>>>>> 3354aa5fce28777fba45c5de3a21ad935ddf895f
}