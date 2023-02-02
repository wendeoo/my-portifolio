import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public section: string = 'home';

  @Output() public selectedSection: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public selectSection(section: string): void {
    this.section = section;
    this.selectedSection.emit(section);         
  }

}
