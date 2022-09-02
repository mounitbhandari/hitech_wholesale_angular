import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-msexcel-basic-lookup-function',
  templateUrl: './msexcel-basic-lookup-function.component.html',
  styleUrls: ['./msexcel-basic-lookup-function.component.scss'],
  providers: [MessageService]
})
export class MsexcelBasicLookupFunctionComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }


  onTabOpen(event: any) {
    const tabNames: string[] = ['VLOOKUP', 'MATCH', 'INDEX'];
    this.messageService.add({key: 'myKey1', severity:'info', summary:'VENV Explaining', detail: 'Function: ' + tabNames[event.index]});
  }

  onReject() {
    this.messageService.clear();
  }
}
