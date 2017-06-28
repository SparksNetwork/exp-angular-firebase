import { Component } from '@angular/core';
import { foo } from '../../shared/foo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = foo();
}
