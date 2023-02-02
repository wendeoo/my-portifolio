import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public showPicture: boolean = false;

  public skillName(): void {
    setInterval(() => {
      this.showPicture = true;
    }, 100);
  }

  ngOnInit(): void {
    this.skillName();
  }

}
