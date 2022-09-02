import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-excel-date-function',
  templateUrl: './excel-date-function.component.html',
  styleUrls: ['./excel-date-function.component.scss'],
  providers: [MessageService]
})
export class ExcelDateFunctionComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onTabOpen(event: any) {
    const tabNames: string[] = ['NOW Function', 'Today Function', 'Year Function', 'MONTH Function', 'DATE Function', 'EDATE Function', 'EOMONTH Function'];
    this.messageService.add({key: 'myKey1', severity:'info', summary:'VENV Explaining', detail: 'Function: ' + tabNames[event.index]});
  }

  onReject() {
    this.messageService.clear();
  }

}
