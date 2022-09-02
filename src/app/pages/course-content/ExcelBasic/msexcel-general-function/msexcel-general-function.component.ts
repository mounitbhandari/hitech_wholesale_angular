import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-msexcel-general-function',
  templateUrl: './msexcel-general-function.component.html',
  styleUrls: ['./msexcel-general-function.component.scss'],
  providers: [MessageService]

})
export class MsexcelGeneralFunctionComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onTabOpen(event: any) {
    const tabNames: string[] = ['CONCATENATE Function', 'SUM Function','SUMIF Function','IF Function', 'COUNTIF Function', 'COUNT Function',  'COUNTA Function'];
    this.messageService.add({key: 'myKey1', severity:'info', summary:'VENV Explaining', detail: 'Function: ' + tabNames[event.index]});
  }

  onReject() {
    this.messageService.clear();
  }

}
