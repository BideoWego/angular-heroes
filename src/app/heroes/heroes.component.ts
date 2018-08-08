import { Component, OnInit } from '@angular/core';
import { Hero } from '../lib/hero';
import { HeroService } from '../services/hero.service';

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

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.all()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

}
