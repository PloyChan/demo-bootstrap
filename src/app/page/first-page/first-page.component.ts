import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {
  route = inject(Router)
  activatedRoute = inject(ActivatedRoute)


  routeContainer() {
    this.route.navigate(['container'])
  }
}
