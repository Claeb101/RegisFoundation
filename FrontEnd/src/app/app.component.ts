import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Regis';
  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    navEndEvents.subscribe((event : NavigationEnd) => { 
      gtag('config', 'UA-167359120-1', {
        'page_path': event.urlAfterRedirects
      });
    })
  }
  ngOnInit(): void {
    AOS.init();
  }
}
