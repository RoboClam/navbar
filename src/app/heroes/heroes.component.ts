import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ApiService } from '../api.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  topHeroes: Hero[];

  constructor(private heroService: ApiService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {  
    this.heroService.getHeroes()
      .then((result) => {
        this.heroes = result;
        this.topHeroes = this.heroes.slice(1, 5);
      })
      .catch(err => {
        console.log("There are no heroes.");
      });
  }
}
