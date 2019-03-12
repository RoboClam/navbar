import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: ApiService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5))
      .catch(err => {
        console.log("There are no heroes.");
      });
  }
}