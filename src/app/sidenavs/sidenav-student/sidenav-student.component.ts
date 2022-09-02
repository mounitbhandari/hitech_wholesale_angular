import { Component, OnInit } from '@angular/core';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav-student',
  templateUrl: './sidenav-student.component.html',
  styleUrls: ['./sidenav-student.component.scss']
})
export class SidenavStudentComponent implements OnInit {

  faAddressBook = faAddressBook;
  displayDigitalElectronic=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDigitalElectronics(){
    this.displayDigitalElectronic=!this.displayDigitalElectronic;
  }

}
