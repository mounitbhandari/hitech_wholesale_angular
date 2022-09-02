import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-developer',
  templateUrl: './sidenav-developer.component.html',
  styleUrls: ['./sidenav-developer.component.scss']
})
export class SidenavDeveloperComponent implements OnInit {
  displayMaster: boolean = false;
  displayChart: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMaster(){
    this.displayMaster=!this.displayMaster;
  }

  toggleChart() {
    this.displayChart=!this.displayChart;
  }
}
