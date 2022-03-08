import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let gtag:Function;
declare let ga: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'manteio';
  constructor(private router: Router){
    // router.events.subscribe((y: NavigationEnd) => {
    //   if(y instanceof NavigationEnd){
    //     gtag('config','G-0C1B4ZE0XE',{'page_path' : y.url});
    //   }

    // })

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });

    
  }
}
