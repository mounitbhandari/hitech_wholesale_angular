import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import * as fileSaver from 'file-saver';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {saveAs} from "file-saver";
import {DownloadService} from "../../../../services/download.service";
@Component({
  selector: 'app-msexcel-basic-introduction',
  templateUrl: './msexcel-basic-introduction.component.html',
  styleUrls: ['./msexcel-basic-introduction.component.scss']
})
export class MSExcelBasicIntroductionComponent implements OnInit {
  fileUrl: SafeResourceUrl;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private downloadService: DownloadService) {
    const data = 'some text';
    // const blob = new Blob([data], { type: 'application/octet-stream' });
    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    this.fileUrl = "https://ynpvg-my.sharepoint.com/:x:/g/personal/sukanta_ynpvg_onmicrosoft_com/EZm_m70NB6xIulVaSYhtyJoB-YYqTelyaoyYymxKeQuuNQ?e=IiSVBJ";

  }

  ngOnInit(): void {
  }
  download2(file: string) {
    this.downloadService
      .download('assets/excels/'+file)
      .subscribe((blob: string | Blob) => saveAs(blob, file));
  }

}
