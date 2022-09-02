import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map,forkJoin, Observable, of } from 'rxjs';
import { CourseService } from '../services/course.service';
import { StudentToCourseService } from '../services/student-to-course.service';
import { StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseRegistrationResolver implements Resolve<boolean> {
  constructor(private studentService: StudentService,
    private courseService: CourseService,
    private studentToCourseServices: StudentToCourseService ){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    // const a = this.jobTaskService.getAll();
    const b = this.studentService.fetchAllStudents();
    const c = this.courseService.fetchAllDurationType();
    const d = this.courseService.fetchAllCourses();
    const e = this.studentToCourseServices.fetchAllStudentToCourses();
    console.log("fsadafsdf",e);
    const join = forkJoin(b,c,d,e).pipe(map((allResponses: any[]) => {
      return {
        students: allResponses[0],
        durationTypes: allResponses[1],
        courses: allResponses[2],
        studentTocourses: allResponses[3]
      };
    }));
    return join;
  }
}
