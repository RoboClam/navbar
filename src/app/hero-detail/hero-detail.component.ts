import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  constructor(private route: ActivatedRoute,
    private heroService: ApiService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);

    let temp = this.route.params['id'];

    console.log(temp);

    this.heroService.getHero(id)
      .then((result) => this.hero = result)
      .catch(err => {
        console.log("There are no heroes.");
      });
  }

  goBack(): void {
    this.location.back();
  }

}
