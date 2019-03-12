import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MessagesComponent } from './messages/messages.component';
import { SolarComponent } from './solar/solar.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { MaterialTestComponent } from './material-test/material-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'new', component: HeroFormComponent},
  { path: 'buttons', component: ButtonsComponent},
  { path: 'messages', component: MessagesComponent},
  { path: 'solar', component: SolarComponent},
  { path: 'scroll', component: ScrollingComponent},
  { path: 'material', component: MaterialTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
