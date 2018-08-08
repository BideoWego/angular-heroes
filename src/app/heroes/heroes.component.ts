import { Component, OnInit } from '@angular/core';
import Hero from '../lib/hero';
import HEROES from '../data/heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[] = HEROES;

  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

}
