import { Injectable } from '@angular/core';
import {Student} from "../models/student.model";
import {CommonService} from "./common.service";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {of} from "rxjs";

class CommerService {
}

export interface StudentResponseData {
  status: boolean;
  message: string;
  data: {
    studentId: number;
		episodeId: string;
		studentName:string;
		billingName: string;
		fatherName: string;
		motherName: string;
		guardianName: string;
		relationToGuardian: string;
		dob: string;
		sex: string;
		address: string;
		city: string;
		district: string;
		stateId: number;
		pin: number,
  };
  error?: any;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: Student[] =[];
  stateList: any[] =[];
  studentSubject = new Subject<Student[]>();
  stateSubject = new Subject<Student[]>();
  constructor(private commonService: CommonService, private errorService: ErrorService, private http: HttpClient) { }

  fetchEducations() {
    return this.http.get<any>('assets/educations.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }



  fetchAllStudents(){
    return this.http.get<any>(this.commonService.getAPI() + '/students')
      .pipe(catchError(this.errorService.serverError), tap(((response: {success: number, data: Student[]}) => {
        this.studentList=response.data;
        this.studentSubject.next([...this.studentList]);
      })));
  }

  fetchAllStates(){
    return this.http.get<any>(this.commonService.getAPI() + '/states')
    .pipe(catchError(this.errorService.serverError), tap(((response: {success: number, data: any[]}) => {
      this.stateList=response.data;
      this.stateSubject.next([...this.stateList]);
    })));
  }

  getStudents(){
    return [...this.studentList];
  }
  getStudentUpdateListener(){
    return this.studentSubject.asObservable();
  }

  saveStudent(studentData:any){
    return this.http.post<any>(this.commonService.getAPI() + '/students', studentData)
    .pipe(catchError(this.errorService.serverError), tap(response => {
      console.log('at service',response);
      if (response.status === true){
        this.studentList.unshift(response.data);
        this.studentSubject.next([...this.studentList]);
      }
    }))

  }

  updateStudent(studentData:any){
    return this.http.patch<any>(this.commonService.getAPI() + '/students', studentData)
    .pipe(catchError(this.errorService.serverError), tap(response => {
      console.log('at service update:',response);
      if (response.status === true){
        this.studentList.unshift(response.data);
        this.studentSubject.next([...this.studentList]);
      }
    }))

  }

  deleteStudent(id:any){
    console.log("service id:",id);
    //return 0;
     return this.http.delete<any>(this.commonService.getAPI() + '/students/'+ id)
    .pipe(catchError(this.errorService.serverError), tap(response => {
     
     
    }))

  }
}
