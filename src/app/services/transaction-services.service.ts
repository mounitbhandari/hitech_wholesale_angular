import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Subject } from 'rxjs/internal/Subject';
import { tap } from 'rxjs';
import { StudentToCourse } from '../models/studenttocourse.model';
import { CommonService } from './common.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionServicesService {
  studentToCourseList: StudentToCourse[] =[];
  feesNameList:any[]=[];
  studentNameList:any[]=[];
  feesReceivedList:any[]=[];
  transactionList:any[]=[];
  //feesReceivedList:any[]=[];
  studentToCourseSubject = new Subject<StudentToCourse[]>();
  feesNameSubject = new Subject<any[]>();
  studentNameSubject = new Subject<any[]>();
  feesReceivedSubject = new Subject<any[]>();
  transactionListSubject = new Subject<any[]>();
  constructor(private commonService: CommonService, private errorService: ErrorService, private http: HttpClient) {


  }


  fetchAllStudentToCourses($id: any){
    //return this.http.get<any>(this.commonService.getAPI() + '/students/studentId/'+$id+'/courses')
    return this.http.get<any>(this.commonService.getAPI() + '/students/studentToCourses/'+$id)
    .pipe(catchError(this.errorService.serverError), tap(((response: {success: number, data: StudentToCourse[]}) => {
      this.studentToCourseList=response.data;
      this.studentToCourseSubject.next([...this.studentToCourseList]);
    })));
  }

  fetchAllFeesName(){
    return this.http.get<any>(this.commonService.getAPI() + '/students/feesName')
    .pipe(catchError(this.errorService.serverError), tap(((response: {success: number, data: any[]}) => {
      this.feesNameList=response.data;
      this.feesNameSubject.next([...this.feesNameList]);
    })));
  }
  fetchAllStudentName(){
    return this.http.get<any>(this.commonService.getAPI() + '/students')
    .pipe(catchError(this.errorService.serverError), tap(((response: {success: number, data: any[]}) => {
      this.studentNameList=response.data;
      this.studentNameSubject.next([...this.studentNameList]);
    })));
  }
  fetchAllCourseName(){
    return this.http.get<any>(this.commonService.getAPI() + '/transactions/feesName')
    .pipe(catchError(this.errorService.serverError), tap(((response: {success: number, data: any[]}) => {
      this.feesNameList=response.data;
      this.feesNameSubject.next([...this.feesNameList]);
    })));
  }

  fetchAllFeesReceived(){
    return this.http.get<any>(this.commonService.getAPI() + '/transactions/allFeesCharged')
    .pipe(catchError(this.errorService.serverError), tap(((response: {success: number, data: any[]}) => {
      this.feesReceivedList=response.data;
      this.feesReceivedSubject.next([...this.feesReceivedList]);
    })));
  }
  fetchAllTransaction($id:any){
    return this.http.get<any>(this.commonService.getAPI() + '/transactions/getFeeCharge/'+$id)
    .pipe(catchError(this.errorService.serverError), tap(((response: {success: number, data: any[]}) => {
      this.transactionList=response.data;
      this.transactionListSubject.next([...this.transactionList]);
    })));
  }
  fetchAllActiveCourse(data:any){
    return this.http.post<any>(this.commonService.getAPI() + '/getRegisterCourseByStudentId', data)
    .pipe(catchError(this.errorService.serverError), tap(((response: {success: number, data: StudentToCourse[]}) => {
      this.studentToCourseList=response.data;
      console.log("Student to courseList:",this.studentToCourseList); 
      this.studentToCourseSubject.next([...this.studentToCourseList]);
    })));
  }
  fetchCourseId($id:any){
    return this.http.get<any>(this.commonService.getAPI() + '/getCourseId/'+$id)
    .pipe(catchError(this.errorService.serverError), tap(((response: {success: number, data: StudentToCourse[]}) => {
      this.studentToCourseList=response.data;
      console.log("Student to courseList:",this.studentToCourseList); 
      this.studentToCourseSubject.next([...this.studentToCourseList]);
    })));
  }
  feesCharge(feeChargeData:any){
    return this.http.post<any>(this.commonService.getAPI() + '/transactions/feesCharged', feeChargeData)
    .pipe(catchError(this.errorService.serverError), tap(response => {
      if (response.status === true){
        this.studentToCourseList.unshift(response.data);
        this.studentToCourseSubject.next([...this.studentToCourseList]);
      }
    }))
  }

  saveFeesReceive(feeReceivedData:any){
    return this.http.post<any>(this.commonService.getAPI() + '/transactions/feesReceived', feeReceivedData)
    .pipe(catchError(this.errorService.serverError), tap(response => {
      if (response.status === true){
        this.studentToCourseList.unshift(response.data);
        this.studentToCourseSubject.next([...this.studentToCourseList]);
      }
    }))
  }

  updateFeesCharge(id:any,updateFeeReceivedData:any){
    return this.http.patch<any>(this.commonService.getAPI() + '/transactions/updateFeesCharged/' +id, updateFeeReceivedData)
    .pipe(catchError(this.errorService.serverError), tap(response => {
      if (response.status === true){
        this.studentToCourseList.unshift(response.data);
        this.studentToCourseSubject.next([...this.studentToCourseList]);
      }
    }))
  }
}
