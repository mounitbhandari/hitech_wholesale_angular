import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-content-excel',
  templateUrl: './course-content-excel.component.html',
  styleUrls: ['./course-content-excel.component.scss']
})
export class CourseContentExcelComponent implements OnInit {
  activeState: boolean[] = [true, false, false];
  constructor() { }

  ngOnInit(): void {
  }

}
