import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  public show: boolean = false;
  
  public showContent(): void {
    setInterval(() => {
      this.show = true;
    }, 100);
  }

  ngOnInit(): void {
    this.showContent();
  }

}
