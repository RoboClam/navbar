import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.scss']
})
export class SolarComponent implements OnInit {
  splitMe:String[];
  sunrise:Date = new Date();
  sunset: Date = new Date();
  
  constructor(private solarService: ApiService) { 
    // To set a date use this at the end of the api: &date=2019-03-18
  }

  ngOnInit() {
    this.getSunriseSunset();
  }

  getSunriseSunset() {
    this.solarService.getSunriseSunset()
      .then((result) => {
        this.sunrise = new Date(result.results.sunrise);
        this.sunset = new Date(result.results.sunset);
      })
      .catch((err) => {
        console.log("There is no sun today.");
      });
  }
}
