import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {ContainerComponent} from "../container/container.component";

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [
    ContainerComponent
  ],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

  route = inject(Router)

  routeContainer() {
    this.route.navigate(['container'])
  }
  routeBasicGrid() {
    this.route.navigate(['basic-grid'])
  }
  routeText() {
    this.route.navigate(['text'])
  }
}
