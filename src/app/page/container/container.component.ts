import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {RouteHomeService} from "../../route-home.service";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  routeHomeService = inject(RouteHomeService)

  routeHome() {
    this.routeHomeService.routeHome()
  }
}
