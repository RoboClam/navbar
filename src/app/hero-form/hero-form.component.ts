import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers: any[] = ['Really Smart', 'Super Flixible', 'Super Hot', 'Weather Changer'];
  model: Hero = new Hero(21, 'Dr. GoodYear', this.powers[0], 'Chuck Overstreet');
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model)};

}
