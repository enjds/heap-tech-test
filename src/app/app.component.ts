import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heap-tech-test';
  brands = [
    'assets/brands/mit.svg', 
    'assets/brands/iit.svg', 
    'assets/brands/imperial.svg', 
    'assets/brands/eth.svg'
  ]
}
