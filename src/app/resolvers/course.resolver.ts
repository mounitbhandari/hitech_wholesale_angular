import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable,forkJoin } from 'rxjs';
import {StudentService} from "../services/student.service";
import {map} from "rxjs/operators";
import {CourseService} from "../services/course.service";

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<boolean> {
  constructor(private courseService: CourseService ){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    // const a = this.jobTaskService.getAll();
    const b = this.courseService.fetchAllCourses();
    const c = this.courseService.fetchAllDurationType();
    const join = forkJoin(b,c).pipe(map((allResponses) => {
      return {
        courses: allResponses[0],
        durationTypes: allResponses[1]
      };
    }));
    return join;
  }
}
