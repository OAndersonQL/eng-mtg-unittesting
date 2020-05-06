import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-hero-search',
  template: ''
})
export class HeroSearchStubComponent {

  // Public properties and methods are still initialized,
  // in case components under test try to use them.

  heroes$ = of();

  search(): void { return; }
}
