import { Component } from '@angular/core'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  constructor() {}

  scrollToGiftcard(elementId: string): void {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
