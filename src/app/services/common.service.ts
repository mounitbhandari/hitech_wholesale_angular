import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject, timer} from 'rxjs';
import {ProjectData} from '../models/project-data.model';
import {HttpClient} from '@angular/common/http';
import {formatDate} from '@angular/common';
import {ServerResponse} from '../models/ServerResponse.model';
import {environment} from '../../environments/environment';
import {concatMap, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import {MediaChange} from "@angular/flex-layout";


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class CommonService {


  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  value$ = new BehaviorSubject(20);
  currentValue = 0;
  headerVisibleFlag = true;
  isDeviceXs = false;
  projectData: ProjectData | undefined;
  public currentTime: object | undefined;
  projectDataSubject = new Subject<ProjectData>();
  private pictures: any;
  private BASE_API_URL = environment.BASE_API_URL;
  route: string | undefined;
  actual_base_api_url="";
  private actual_base_public_url: string;
  private BASE_PUBLIC_URL=environment.BASE_PUBLIC_URL;
  constructor() {



    setInterval(() => {
      this.currentValue += 10;
      this.value$.next(this.currentValue);
      // just testing if it is working
    }, 1000);
    let project_url =window.location.origin;
    let firstArray =  project_url.split("/");
    let secondArray =  firstArray[2].split(":");
    this.actual_base_api_url = (firstArray[0]+"//"+secondArray[0]+this.BASE_API_URL);
    this.actual_base_public_url = (firstArray[0]+"//"+secondArray[0]+this.BASE_PUBLIC_URL);
  }
  getAPI(){
    return this.actual_base_api_url;
  }
  getPublic(){
    return this.actual_base_public_url;
  }
  getProjectData(){
    return {...this.projectData};
  }
  getVariableSettingsListener(){
    return this.projectDataSubject.asObservable();
  }
  isHeaderVisible(){
    return this.headerVisibleFlag;
  }
  setIsHeaderVisible(choice: boolean){
    this.headerVisibleFlag=choice;
  }
  updateVariableSettings(projectData: ProjectData){
    this.projectData = projectData;
    this.projectDataSubject.next({...this.projectData});
  }
  setDeviceXs(dx: boolean){
    this.isDeviceXs = dx;
    console.log('deviceXs changed', this.isDeviceXs);
  }
  getDeviceXs(): boolean{
    return this.isDeviceXs;
  }
  getCurrentDate(){
    const now = new Date();
    const currentDate = formatDate(now, 'dd-MM-yyyy', 'en');
    return currentDate;
  }

  getSQLDate(datePickerDate: any){
    const dateArray = datePickerDate.split("/");
    const month= ("00" + dateArray[1]).slice(-2);
    const day= ("00" + dateArray[0]).slice(-2);
    const sqlDate = dateArray[2]+'-'+month+'-'+day;
    return sqlDate;
  }

  getCurrentTime(){
    console.log('time in func', this.currentTime);
    const now = new Date();
    const hour = now.getHours();
    let meridiem = '';
    if (hour >= 12){
      meridiem = 'PM';
    }else{
      meridiem = 'AM';
    }
    const currentTime = formatDate(now, 'hh:mm:ss', 'en') + ' ' + meridiem;
    return currentTime;
  }

  loadValue(i: number) {
    this.currentValue += i;
    this.value$.next(this.currentValue);
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  exportToExcel(tableId: string, fileName: string, except_col=255 ,sheetName = 'Sheet1'): void
  {
    const currentTimeInSeconds=Math.floor(Date.now()/1000);
    /* table id is passed over here */
    let element = document.getElementById(tableId);
    let ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    ws['!cols'] = [];
    ws['!cols'][except_col] = { hidden: true };
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    /* save to file */
    XLSX.writeFile(wb, fileName+'_'+currentTimeInSeconds);

  }


  // **********************************

    public arrayToExcel(jsonData: any[], fileName: string): void {

      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
      const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      this.saveExcelFile(excelBuffer, fileName);
    }

    private saveExcelFile(buffer: any, fileName: string): void {
      const data: Blob = new Blob([buffer], {type: this.fileType});
      FileSaver.saveAs(data, fileName + this.fileExtension);
    }

  // ***********************************
}
