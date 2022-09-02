import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {StudentQueryService} from "../../services/student-query.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {DatePipe} from "@angular/common";

interface Alert {
  type: string;
  message: string;
}
@Component({
  selector: 'app-student-query',
  templateUrl: './student-query.component.html',
  styleUrls: ['./student-query.component.scss'],
  providers: [ConfirmationService, MessageService,DatePipe]
})
export class StudentQueryComponent implements OnInit {

  myControl = new UntypedFormControl();
  //
  studentQueryForm : any;

  savedQuery: any[] = [];
  showErrorMessage: boolean = false;
  errorMessage: any;
  queryData : {
    id?: any;
    studentName?:string;
    address?:string;
    fatherName?:string;
    motherName?:string;
    guardianName?:string;
    relationToGuardian?:string;
    educationalInstitution?:string;
    phoneNumber?:string;
    query?:string;
  }={};

  msgs: { severity: string; summary: string; detail: string }[] = [];

  constructor(private studentQueryService : StudentQueryService, private confirmationService: ConfirmationService
              , private messageService: MessageService
  ) {

    this.studentQueryForm = new UntypedFormGroup({
      studentName : new UntypedFormControl(),
      fatherName : new UntypedFormControl(null),
      motherName : new UntypedFormControl(null),
      address : new UntypedFormControl(null),
      guardianName : new UntypedFormControl(null),
      relationToGuardian : new UntypedFormControl(null,[Validators.required]),
      educationalInstitution : new UntypedFormControl(null,[Validators.required]),
      phoneNumber : new UntypedFormControl(null,[Validators.required]),
      query : new UntypedFormControl(null,[Validators.required])
    });
  }

  ngOnInit(): void {
  }
  showSuccess(successMessage: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: successMessage});
  }
  showError(message: string) {
    this.messageService.add({severity:'error', summary: 'Success', detail: message});
  }
  saveQuery(){

    // this.confirmationService.confirm({
    //   message: 'Do you want to delete this record?',
    //   header: 'Delete Confirmation',
    //   icon: 'pi pi-info-circle',
    //   accept: () => {
        this.queryData.studentName = this.studentQueryForm.value.studentName;
        console.log("studentName", this.queryData.studentName);
        this.queryData.address = this.studentQueryForm.value.address;
        this.queryData.fatherName = this.studentQueryForm.value.fatherName;
        this.queryData.motherName = this.studentQueryForm.value.motherName;
        this.queryData.guardianName = this.studentQueryForm.value.guardianName;
        this.queryData.relationToGuardian = this.studentQueryForm.value.relationToGuardian;
        this.queryData.educationalInstitution = this.studentQueryForm.value.educationalInstitution;
        this.queryData.phoneNumber = this.studentQueryForm.value.phoneNumber;
        this.queryData.query = this.studentQueryForm.value.query;


        this.studentQueryService.saveStudentQuery(this.queryData).subscribe(response => {
          this.savedQuery = response;
          console.log(this.savedQuery);
          if (response.status === true){
            this.showSuccess("Record added successfully");
          }
        // }, error=>{
        //   this.showErrorMessage = true;
        //   this.errorMessage = error.message;
        //   const alerts: Alert[] = [{
        //     type: 'success',
        //     message: this.errorMessage,
        //   }]
        //   setTimeout(()=>{
        //     this.showErrorMessage = false;
        //   }, 20000);
        //   this.showError(error.statusText);
        // })
  //     },
  //     reject: () => {
  //       this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
  //     }
    });
  }

}
