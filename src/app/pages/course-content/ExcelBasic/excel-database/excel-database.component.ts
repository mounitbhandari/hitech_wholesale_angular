import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-excel-database',
  templateUrl: './excel-database.component.html',
  styleUrls: ['./excel-database.component.scss'],
  providers: [MessageService]
})
export class ExcelDatabaseComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onTabOpen(event: any) {
    const tabNames: string[] = ['DGET Function', 'DSUM Function','DAVERAGE Function','DCOUNT Function'];
    this.messageService.add({key: 'myKey1', severity:'info', summary:'VENV Explaining', detail: 'Function: ' + tabNames[event.index]});
  }

  onReject() {
    this.messageService.clear();
  }

}
