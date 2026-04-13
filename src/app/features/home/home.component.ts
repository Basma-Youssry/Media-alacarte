import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { ServiceComponent } from "./components/service/service.component";

@Component({
  selector: 'app-home',
  imports: [ServiceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
