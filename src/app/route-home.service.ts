import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouteHomeService {

  route = inject(Router)
  routeHome() {
    this.route.navigate(['home'])
  }
}
