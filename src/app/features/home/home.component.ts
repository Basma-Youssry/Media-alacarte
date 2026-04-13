import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { ServiceComponent } from "./components/service/service.component";
import { SolutionsComponent } from './components/solutions/solutions.component';
import { PrinciplesComponent } from './components/principles/principles.component';
import { ReservationComponent } from './components/reservation/reservation.component';

@Component({
  selector: 'app-home',
  imports: [ServiceComponent, SolutionsComponent, PrinciplesComponent, ReservationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
