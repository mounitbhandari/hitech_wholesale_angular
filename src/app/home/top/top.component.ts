import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {of} from 'rxjs';
import {saveAs} from 'file-saver';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  arc = 'false';
  projectDetails: any;
  projectHeading: any;
  contact: any;
  private setting = {
    element: {
      dynamicDownload: null as unknown as HTMLElement
    }
  }

  constructor(private http: HttpClient) {
    this.http.get('assets/projectDetails.json').subscribe((data: any) => {
      this.projectDetails = data;
      this.projectHeading = this.projectDetails.projectHeading;
      this.contact = this.projectDetails.contact;

    });
  }

  ngOnInit(): void {

  }
  toggleBounce(){
    this.arc = this.arc === 'false' ? 'true' : 'false';
  }
  fakeValidateUserData() {
    return of({
      userDate1: 1,
      userData2: 2
    });
  }
  private dyanmicDownloadByHtmlTag(arg: {
    fileName: string,
    text: string
  }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    const event = new MouseEvent('click');
    element.dispatchEvent(event);
  }
  dynamicDownloadTxt() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'My Report',
        text: JSON.stringify(res)
      });
    });

  }

  dynamicDownloadJson() {
    this.fakeValidateUserData().subscribe((res) => {
      this.dyanmicDownloadByHtmlTag({
        fileName: 'My Report.json',
        text: JSON.stringify(res)
      });
    });
  }

}
