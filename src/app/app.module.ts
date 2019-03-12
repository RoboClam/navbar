import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsComponent } from './buttons/buttons.component';
import { SolarComponent } from './solar/solar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { MaterialTestComponent } from './material-test/material-test.component';

import { MdcButtonModule, MdcIconModule} from '@angular-mdc/web';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroFormComponent,
    ButtonsComponent,
    SolarComponent,
    FooterComponent,
    ScrollingComponent,
    MaterialTestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    NgbCollapseModule,
    MdcButtonModule,
    MdcIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
