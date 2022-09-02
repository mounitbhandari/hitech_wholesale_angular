import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-excel-basic',
  templateUrl: './excel-basic.component.html',
  styleUrls: ['./excel-basic.component.scss'],
  providers: [MessageService]
})
export class ExcelBasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
