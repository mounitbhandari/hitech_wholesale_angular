import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-msexcel-basic-financial-function',
  templateUrl: './msexcel-basic-financial-function.component.html',
  styleUrls: ['./msexcel-basic-financial-function.component.scss'],
  providers: [MessageService]
})
export class MSExcelBasicFinancialFunctionComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onTabOpen(event: any) {
    const tabNames: string[] = ['FV Function', 'PMT Function', 'IPMT Function', 'PPMT Function', 'NPER Function'];
    this.messageService.add({key: 'myKey1', severity:'info', summary:'VENV Explaining', detail: 'Function: ' + tabNames[event.index]});
  }

  onReject() {
    this.messageService.clear();
  }

  onConfirm() {

  }
}
