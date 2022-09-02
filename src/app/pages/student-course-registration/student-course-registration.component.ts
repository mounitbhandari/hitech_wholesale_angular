import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ConfirmationService, MenuItem, MessageService, PrimeNGConfig} from "primeng/api";
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Student } from 'src/app/models/student.model';
import { StudentToCourseService } from 'src/app/services/student-to-course.service';
import { StudentService } from 'src/app/services/student.service';
import { CommonService } from 'src/app/services/common.service';
import { StudentToCourse } from 'src/app/models/studenttocourse.model';
import { Table } from 'primeng/table/table';
import { formatDate } from '@angular/common';

interface Alert {
  type: string;
  message: string;
}
@Component({
  selector: 'app-student-course-registration',
  templateUrl: './student-course-registration.component.html',
  styleUrls: ['./student-course-registration.component.scss'],
  providers: [ConfirmationService, MessageService]
})

export class StudentCourseRegistrationComponent implements OnInit {
  //studentList: Student[] =[];
  
  hiddenInput: boolean = false ;
  isShown: boolean = false ; // hidden by default
  students: any[] = [];
  courses: Course[] = [];
  durationTypes: any[]=[];
  studentTocourses: StudentToCourse[] = [];
  ledger_id: any[] = [];
  course_id: any[]= [];
  studentToCourseFormGroup : FormGroup | any;
  tempItemValueObj!: object;
  studentTocourseData: {
    id?:number;
    reference_number?:number;
    studentId?:number;
			courseId?:number;
			baseFee?:number;
			discountAllowed?:number;
			joiningDate?: string;
			effectiveDate?: string;
			actual_course_duration?:number;
			duration_type_id?:number;
      isStarted?:number;


      ledger_id?:number;
      course_id?:number;
			base_fee?:number;
			discount_allowed?:number;
			joining_date?: string;
      is_started?:number;
			effective_date?: string;
  }={};
  showErrorMessage: boolean | undefined;
  errorMessage: any;
  msgs: { severity: string; summary: string; detail: string; }[] | undefined;

  constructor(private studentToCourseService: StudentToCourseService,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public commonService: CommonService)
    {
      this.activatedRoute.data.subscribe((response: any) => {
        console.log(response);
        this.students = response.studentCourseRegistrationResolverData.students.data;
        this.durationTypes = response.studentCourseRegistrationResolverData.durationTypes.data;
        this.courses = response.studentCourseRegistrationResolverData.courses.data;
        this.studentTocourses = response.studentCourseRegistrationResolverData.studentTocourses.data;
        console.log("studentToCourse:",this.studentTocourses);
      });
     }
  //studentToCourseFormGroup: FormGroup | undefined ;
  ngOnInit(): void {
    const now = new Date();
    let val = formatDate(now, 'yyyy-MM-dd', 'en');
    this.studentToCourseFormGroup = new FormGroup({
   
      ledger_id : new FormControl(1, [Validators.required]),
      course_id : new FormControl(1, [Validators.required]),
      base_fee : new FormControl(null, [Validators.required]),
      discount_allowed : new FormControl(0, [Validators.required]),
      joining_date : new FormControl(val),
      effective_date : new FormControl(val),
      actual_course_duration : new FormControl(null, [Validators.required]),
      duration_type_id : new FormControl(1, [Validators.required]),
      studentToCourseID: new FormControl(0, [Validators.required]),
      transactionMasterID: new FormControl(0, [Validators.required])
      })
  



    this.studentService.getStudentUpdateListener().subscribe((response: Student[]) =>{
      this.students = response;
      console.log("Student list:",this.students);
    });

    this.ledger_id = [
      {value:1, name: 'Nanda Gopal Sutradhar'},
      {value:2, name: 'Sukanta HUi'}
    ];
    this.course_id = [
      {value:1, name: 'CCIT'},
      {value:2, name: 'DCA'}
    ];
  }
  active=0;
  onTabChanged(event:any){
    console.log(event)
  }
  
   
  setEffectiveSQL(value: string) {
    this.studentToCourseFormGroup.patchValue({effective_date: this.commonService.getSQLDate(value)});
  }
  setJoiningSQL(value: string) {
    this.studentToCourseFormGroup.patchValue({joining_date: this.commonService.getSQLDate(value)});
  }
  cols: any[] = [
    {field: 'id',header: 'Student To Course ID', customExportHeader: 'Student To Course ID'},
    {field: 'ledger_id'},
    {field: 'course_id'},
    {field: 'base_fee'}

  ];
  isValidForm(){
    if(this.studentToCourseFormGroup.valid ){
      return true;

    }else{
      return false;

    }
  }
  saveStudentToCourse(){
 //alert("Testing");

 this.confirmationService.confirm({
  message: 'Do you want to Save this record?',
  header: 'Delete Confirmation',
  icon: 'pi pi-info-circle',
  accept: () => {
   /*  this.studentTocourseData.studentId=this.studentToCourseFormGroup.value.ledger_id;
    this.studentTocourseData.courseId=this.studentToCourseFormGroup.value.course_id;
    this.studentTocourseData.baseFee=this.studentToCourseFormGroup.value.base_fee;
    this.studentTocourseData.discountAllowed=this.studentToCourseFormGroup.value.discount_allowed;
    this.studentTocourseData.joiningDate=this.studentToCourseFormGroup.value.joining_date;
    this.studentTocourseData.effectiveDate=this.studentToCourseFormGroup.value.effective_date;
    this.studentTocourseData.actual_course_duration=this.studentToCourseFormGroup.value.actual_course_duration;
    this.studentTocourseData.duration_type_id=this.studentToCourseFormGroup.value.duration_type_id;
    this.studentTocourseData.isStarted=1; */

    this.tempItemValueObj = {
      studentId: this.studentToCourseFormGroup.value.ledger_id,
      courseId: this.studentToCourseFormGroup.value.course_id,
      baseFee: this.studentToCourseFormGroup.value.base_fee,
      discountAllowed: this.studentToCourseFormGroup.value.discount_allowed,
      joiningDate: this.studentToCourseFormGroup.value.joining_date,
      effectiveDate: this.studentToCourseFormGroup.value.effective_date,
      actual_course_duration: this.studentToCourseFormGroup.value.actual_course_duration,
      duration_type_id: this.studentToCourseFormGroup.value.duration_type_id,
      isStarted: 1,
      userId: 1,
      feesYear: new Date().getFullYear(),
      feesMonth: new Date().getMonth().toString(),
      transactionDetails: [
        {
          transactionTypeId:2,
          ledgerId:8,
          amount: this.studentToCourseFormGroup.value.base_fee
        },
         {
          transactionTypeId:1,
          ledgerId:this.studentToCourseFormGroup.value.ledger_id,
          amount: this.studentToCourseFormGroup.value.base_fee
        }
      ]
    }

    this.studentToCourseService.saveStudentToCourse(this.tempItemValueObj).subscribe(response => {
    console.log("Save data:",this.studentTocourseData);
      if (response.status === true){
        this.showSuccess("Record added successfully");
      }

    },error=>{
      this.showErrorMessage = true;
      this.errorMessage = error.message;
      const alerts: Alert[] = [{
        type: 'success',
        message: this.errorMessage,
      }]
      setTimeout(()=>{
        this.showErrorMessage = false;
      }, 20000);
      this.showError(error.statusText);
    })

  },
  reject: () => {
    this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
  }
});
  }
  editStudentToCourse(courseTostudentData:any){
    this.isShown = true;
    console.log(courseTostudentData);
    this.studentToCourseFormGroup.patchValue({transactionMasterID: courseTostudentData.transaction_masters_id});
    this.studentToCourseFormGroup.patchValue({studentToCourseID: courseTostudentData.id});
    this.studentToCourseFormGroup.patchValue({ledger_id: courseTostudentData.ledger_id});
    this.studentToCourseFormGroup.patchValue({course_id: courseTostudentData.course_id});
    this.studentToCourseFormGroup.patchValue({base_fee: courseTostudentData.base_fee});
    this.studentToCourseFormGroup.patchValue({discount_allowed: courseTostudentData.discount_allowed});
    this.studentToCourseFormGroup.patchValue({joining_date: courseTostudentData.joining_date});
    this.studentToCourseFormGroup.patchValue({effective_date: courseTostudentData.effective_date});
    this.studentToCourseFormGroup.patchValue({actual_course_duration: courseTostudentData.actual_course_duration});
    this.studentToCourseFormGroup.patchValue({duration_type_id: courseTostudentData.duration_type_id});

  }
  deleteStudentToCourse(courseTostudentData:any){
console.log("Delete data:",courseTostudentData);
 this.confirmationService.confirm({
      message: 'Do you want to Update this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        //const index: number = this.myArray.indexOf(value);
        //this.myArray.splice(index, 1);
        //const index: number = this.studentTocourses.indexOf(courseTostudentData.id);
        let index = this.studentTocourses.findIndex(x => x.id === courseTostudentData.id);
        
        console.log("Array: ",this.studentTocourses);
        console.log("courseTostudentData: ",courseTostudentData.id);
       
          this.studentToCourseService.deleteStudentToCourse(courseTostudentData.id).subscribe(response => {
           //this.showSuccess("Record Deleted successfully");
           //let index = this.courses.findIndex(x => x.courseId === courseTostudentData.id);
           
            if (index !== -1) {
              this.studentTocourses.splice(index, 1);
              this.showSuccess("Record added successfully");
              console.log("index...",index);
            }

        },error=>{
          this.showErrorMessage = true;
          this.errorMessage = error.message;
          const alerts: Alert[] = [{
            type: 'success',
            message: this.errorMessage,
          }]
          setTimeout(()=>{
            this.showErrorMessage = false;
          }, 20000);
          this.showError(error.statusText);
        }) 

      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }
  showError(statusText: any) {
    throw new Error('Method not implemented.');
  }
  showSuccess(arg0: string) {
    throw new Error('Method not implemented.');
  }

  updateStudentToCourse(){
    this.confirmationService.confirm({
      message: 'Do you want to Update this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
       /*  this.studentTocourseData.id=this.studentToCourseFormGroup.value.studentToCourseID;
        this.studentTocourseData.ledger_id=this.studentToCourseFormGroup.value.ledger_id;
        this.studentTocourseData.course_id=this.studentToCourseFormGroup.value.course_id;
        this.studentTocourseData.base_fee=this.studentToCourseFormGroup.value.base_fee;
        this.studentTocourseData.discount_allowed=this.studentToCourseFormGroup.value.discount_allowed;
        this.studentTocourseData.joining_date=this.studentToCourseFormGroup.value.joining_date;
        this.studentTocourseData.effective_date=this.studentToCourseFormGroup.value.effective_date;
        this.studentTocourseData.actual_course_duration=this.studentToCourseFormGroup.value.actual_course_duration;
        this.studentTocourseData.duration_type_id=this.studentToCourseFormGroup.value.duration_type_id;
        this.studentTocourseData.is_started=1; */
       
        this.tempItemValueObj = {
          studentToCourseID: this.studentToCourseFormGroup.value.studentToCourseID,
          studentId: this.studentToCourseFormGroup.value.ledger_id,
          transactionMasterId: this.studentToCourseFormGroup.value.transactionMasterID,
          courseId: this.studentToCourseFormGroup.value.course_id,
          baseFee: this.studentToCourseFormGroup.value.base_fee,
          discountAllowed: this.studentToCourseFormGroup.value.discount_allowed,
          joiningDate: this.studentToCourseFormGroup.value.joining_date,
          effectiveDate: this.studentToCourseFormGroup.value.effective_date,
          actual_course_duration: this.studentToCourseFormGroup.value.actual_course_duration,
          duration_type_id: this.studentToCourseFormGroup.value.duration_type_id,
          isStarted: 1,
          userId: 1,
          feesYear: new Date().getFullYear(),
          feesMonth: new Date().getMonth().toString(),
          transactionDetails: [
            {
              transactionTypeId:2,
              ledgerId:8,
              amount: this.studentToCourseFormGroup.value.base_fee
            },
             {
              transactionTypeId:1,
              ledgerId:this.studentToCourseFormGroup.value.ledger_id,
              amount: this.studentToCourseFormGroup.value.base_fee
            }
          ]
        }
    
        this.studentToCourseService.updateStudentToCourse(this.tempItemValueObj).subscribe(response => {

          if (response.status === true){
            this.showSuccess("Record Updated successfully");
          }

        },error=>{
          this.showErrorMessage = true;
          this.errorMessage = error.message;
          const alerts: Alert[] = [{
            type: 'success',
            message: this.errorMessage,
          }]
          setTimeout(()=>{
            this.showErrorMessage = false;
          }, 20000);
          this.showError(error.statusText);
        })

      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });

  }
  clearStudentToCourse(){
    this.isShown = false;
    this.studentToCourseFormGroup = new FormGroup({
      ledger_id : new FormControl(1, [Validators.required]),
      course_id : new FormControl(1, [Validators.required]),
      base_fee : new FormControl(null, [Validators.required]),
      discount_allowed : new FormControl(null, [Validators.required]),
      joining_date : new FormControl(null, [Validators.required]),
      effective_date : new FormControl(null, [Validators.required]),
      actual_course_duration : new FormControl(null, [Validators.required]),
      duration_type_id : new FormControl(1, [Validators.required]),
      studentToCourseID: new FormControl(null, [Validators.required])
    })
  }
}

