import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  localURL: string = "http://localhost";
  localPort: number = 3000;
  myApiURI: string = this.localURL + ':' + this.localPort.toString() + '/hero';
  catFactsURI: string = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1';
  solarURI: string = 'https://api.sunrise-sunset.org/json?lat=29.732942&lng=-95.371762&formatted=0';
  httpOptions: {} = {};

  getHeroes(): Promise<Hero[]> {
    return this.http.get(`${this.myApiURI}`, this.httpOptions)
      .toPromise().then(result => {
        this.messageService.add("HeroService: Fetched Heroes.");
        return result;
      }).catch(err => {
        this.messageService.add("HeroSerivce: Failed to get Heroes");
        return this.handleError(err);
      });
  }

  getHero(id: number): Promise<Hero> {
    return this.http.get(`${this.myApiURI}/${id}`, this.httpOptions)
    .toPromise().then((result) => {
      this.messageService.add("HeroSerivce: Fetched Hero: " + (result as Hero).name);
        return result;
      }).catch((err) => {
        this.messageService.add("HeroSerivce: Failed to get Hero id: " + id);
        return this.handleError(err);
      });
  }

  getSunriseSunset(): Promise<any> {
    return this.http.get(this.solarURI, this.httpOptions)
    .toPromise().then((result) => {
      this.messageService.add("https://sunrise-sunset.org/api called for today's information.");
        return result;
      }).catch((err) => {
        this.messageService.add("Sunrise-Sunset: Failed to get today's information.");
        return this.handleError(err);
      });
  }

  getCatFact():Promise<any> {
    return this.http.get(this.catFactsURI, this.httpOptions)
    .toPromise().then((result) => {
      this.messageService.add("Cat Facts called for today's fact.");
        return result;
      }).catch((err) => {
        this.messageService.add("Cat Facts: Failed to get today's fact.");
        return this.handleError(err);
      });
  }
  

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
