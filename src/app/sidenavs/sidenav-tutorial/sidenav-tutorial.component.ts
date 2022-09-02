import { Component, OnInit } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav-tutorial',
  templateUrl: './sidenav-tutorial.component.html',
  styleUrls: ['./sidenav-tutorial.component.scss']
})
export class SidenavTutorialComponent implements OnInit {

  faAddressBook = faAddressBook;
  displayDigitalElectronic=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDigitalElectronics(){
    this.displayDigitalElectronic=!this.displayDigitalElectronic;
  }

}
