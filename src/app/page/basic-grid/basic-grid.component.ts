import {Component, inject} from '@angular/core';
import {RouteHomeService} from "../../route-home.service";

@Component({
  selector: 'app-basic-grid',
  standalone: true,
  imports: [],
  templateUrl: './basic-grid.component.html',
  styleUrl: './basic-grid.component.css'
})
export class BasicGridComponent {
  routeHomeService = inject(RouteHomeService)

  routeHome() {
    this.routeHomeService.routeHome()
  }
}
