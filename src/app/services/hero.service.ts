import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../lib/hero';
import { HEROES } from '../data/heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  all(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
