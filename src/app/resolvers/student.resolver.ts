import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {StudentService} from "../services/student.service";
import {forkJoin} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentResolver implements Resolve<boolean> {
  constructor(private studentService: StudentService ){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    // const a = this.jobTaskService.getAll();
    const b = this.studentService.fetchAllStudents();
    const c = this.studentService.fetchAllStates();
    const join = forkJoin(b,c).pipe(map((allResponses) => {
      return {
        students: allResponses[0],
        states: allResponses[1]
      };
    }));
    return join;
  }
}
