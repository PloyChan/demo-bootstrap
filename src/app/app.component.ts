import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-bootstrap';
  route = inject(Router)
  activatedRoute = inject(ActivatedRoute)


  routeContainer() {
    this.route.navigate(['container'])
  }
}
