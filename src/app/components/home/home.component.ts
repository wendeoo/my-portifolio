import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public selectedSection: string = 'home';

  constructor() { }

  public changeSection(section: string) {
    this.selectedSection = section; 
  }
}
