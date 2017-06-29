import { Component } from '@angular/core';
import { foo } from '../../shared/foo';

@Component({
  selector: 'app-root',
  template: `
<div style="text-align:center">
  <h1>
    exp-angular-firebase
  </h1>
  <h4>
    Generated at: {{createdAt}}
  </h4>
</div>
<div style='text-align:center'>
  <a routerLink='/home'>Home</a> |
  <a routerLink='/thing/1'>Thing 1</a> |
  <a routerLink='/thing/2'>Thing 2</a>
</div>
<router-outlet></router-outlet>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createdAt = foo();
}
