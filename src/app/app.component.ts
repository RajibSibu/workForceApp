import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkActivate = true;
  title = 'workForceApp';
  activateLink(activate) {
    this.linkActivate = activate;
  }
}
