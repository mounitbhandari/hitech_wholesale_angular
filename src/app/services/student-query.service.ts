import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonService} from "./common.service";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentQueryService {
  query :any;
  querySubject = new Subject<any[]>()

  constructor(private commonService: CommonService, private errorService: ErrorService,  private http: HttpClient) { }


  saveStudentQuery(queryData: any){
    return this.http.post<any>(this.commonService.getAPI() + '/dev/studentQuery' , queryData)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        this.query = response.data;
        console.log(this.query);
        this.querySubject.next([...this.query]);
      }));
  }
}
