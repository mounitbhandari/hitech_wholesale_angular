import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {ConfirmationService, MenuItem, MessageService, PrimeNGConfig} from "primeng/api";
import { CommonService } from 'src/app/services/common.service';
import { TransactionServicesService } from 'src/app/services/transaction-services.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-fees-received',
  templateUrl: './fees-received.component.html',
  styleUrls: ['./fees-received.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class FeesReceivedComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  hiddenInput: boolean = false ;
  showBox:boolean=true;
  isShown: boolean = false ; // hidden by default
  isPopupButton:boolean=false;
  isCashReceived:boolean=false;
  referenceTransactionMasterId:number=0;
  students: any[] = [];
  studentToCourseId:any;
  studentNameList: any[] = [];
  FeesReceivedFormGroup : FormGroup | any;
  BankReceivedFormGroup : FormGroup | any;
  feesNameList:any[]=[];
  courseNameList:any=[];
  transactionList:any=[];
  tempFeesArray:any=[];
  feesReceivedArray:any=[];
  tempItemObj!:object;
  tempSaveItemObj!:object;
  tempObj!:object;
  tempChargeObj!:object;
  tempCashChargeObj!:object;
  courses: any[] = [];
  popUpRestultArray:any[]=[];
  ledgerId:number=0;
  amount:number=0;
  event:number=0;
  tempTotalAmount:number=0;
  totalAmount:number=0;
  removeTotalAmount:number=0;
  showErrorMessage: boolean | undefined;
  errorMessage: any;
  msgs: { severity: string; summary: string; detail: string; }[] | undefined;
  animal: any;
  datepipe!: DatePipe;
 


  constructor(private transactionServicesService: TransactionServicesService,
    private confirmationService: ConfirmationService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    public commonService: CommonService,
    public dialog: MatDialog) {
    this.activatedRoute.data.subscribe((response: any) => {
      this.studentNameList = response.feesReceivedResolver.students.data;
      this.feesNameList = response.feesReceivedResolver.feesNames.data;
    });
    }

  ngOnInit(): void {
    const now = new Date();
    let val = formatDate(now, 'yyyy-MM-dd', 'en');
    this.FeesReceivedFormGroup = new FormGroup({

      studentId : new FormControl(1, [Validators.required]),
      transactionId : new FormControl(0, [Validators.required]),
      comment : new FormControl(),
      amount : new FormControl(null, [Validators.required]),
      transactionDate : new FormControl(val),
      studentToCourseId:new FormControl(1, [Validators.required]),
      ledgerId : new FormControl(7, [Validators.required]),
    })

    this.BankReceivedFormGroup = new FormGroup({
      accountNo : new FormControl(null, [Validators.required]),
      ifscNo : new FormControl(null, [Validators.required]),
      branch : new FormControl(null, [Validators.required])
    })

    // this.transactionServicesService.fetchAllFeesName().subscribe(response=>{
    //   this.feesNameList=response.data;
    // })

    this.getAllReceivedFees();

  }
  active=0;
  onTabChanged(event:any){
    this.event=event;
    //console.log("Tab id:",event.tab);
    console.log("Tab id:",this.event)
    //if(event===1)
  }
  onClickedOutside(e: Event) {
    if(this.showBox===false){
    this.showBox = !this.showBox;}
  else{
    this.showBox = false;}
  }
  getAllReceivedFees(){
    this.transactionServicesService.fetchAllFeesReceived().subscribe(response=>{
      this.feesReceivedArray=response.data;
    })
  }


  onAddFees(){
    this.ledgerId=this.FeesReceivedFormGroup.get('ledgerId')?.value;
    this.amount=this.FeesReceivedFormGroup.get('amount')?.value;
    this.totalAmount=Number(this.totalAmount)+Number(this.amount);
    const tempItem=this.FeesReceivedFormGroup.value;
    let index=this.feesNameList.findIndex((x:{id:any;})=>x.id===tempItem.ledgerId);
    this.tempItemObj={
      ledgerId:this.ledgerId,
      transactionTypeId:2,
      feesName:this.feesNameList[index].ledger_name,
      amount:this.amount
    }
    this.tempFeesArray.push(this.tempItemObj);
    this.tempTotalAmount= this.totalAmount;
  }
  onDelete(index: any){

    const x=this.tempFeesArray[index];
    this.totalAmount=this.totalAmount-x.amount;
    this.tempTotalAmount= this.totalAmount;
    this.tempFeesArray.splice(index,1);

  }
  clearFeesReceived(){
    this.isShown = false;
    const now = new Date();
    let val = formatDate(now, 'yyyy-MM-dd', 'en');
    this.FeesReceivedFormGroup = new FormGroup({
      transactionId : new FormControl(0, [Validators.required]),
      studentId : new FormControl(1, [Validators.required]),
      comment : new FormControl(null, [Validators.required]),
      amount : new FormControl(null, [Validators.required]),
      transactionDate : new FormControl(val),
      studentToCourseId:new FormControl(1, [Validators.required]),
      ledgerId : new FormControl(7, [Validators.required])
    })
    this.BankReceivedFormGroup = new FormGroup({
      accountNo : new FormControl(null, [Validators.required]),
      ifscNo : new FormControl(null, [Validators.required]),
      branch : new FormControl(null, [Validators.required])
    })
    this.tempFeesArray=[];
    this.totalAmount=0;
  }
  changeCourseId(){
    let studentId = this.FeesReceivedFormGroup.get('studentId')?.value;
    this.courseNameList=[];
    this.transactionServicesService.fetchAllStudentToCourses(studentId).subscribe(response=>{
      this.courseNameList=response.data;
    })
  }

  editFeesReceived(feeDetails:any){
    console.log("id:",feeDetails.id);
    this.event=0;
    this.onTabChanged(this.event);
    this.isShown = true;
    this.tempFeesArray=[];
    this.totalAmount=0;
    this.transactionServicesService.fetchAllTransaction(feeDetails.id).subscribe(response=>{
      this.transactionList=response.data;
      console.log("array",this.transactionList);
      this.transactionServicesService.fetchAllStudentToCourses(response.data[0].student_id).subscribe(response=>{
        this.courseNameList=response.data;
      })
      this.FeesReceivedFormGroup.patchValue({transactionId: response.data[0].id});
      this.FeesReceivedFormGroup.patchValue({studentId: response.data[0].student_id});
      this.FeesReceivedFormGroup.patchValue({studentToCourseId: response.data[0].student_course_registration_id});
      this.FeesReceivedFormGroup.patchValue({comment: response.data[0].comment});
      this.FeesReceivedFormGroup.patchValue({transactionDate: response.data[0].transaction_date});

      for(let val of this.transactionList){
        this.tempItemObj={
          ledgerId:val.ledger_id,
          transactionTypeId:2,
          feesName:val.ledger_name,
          amount:val.amount

        }
        this.tempFeesArray.push(this.tempItemObj);
        this.totalAmount=Number(this.totalAmount)+Number(val.amount);
      }
      
    })
  }

  onUpdate(){

     this.confirmationService.confirm({
      message: 'Do you want to Save this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        
       
        let transactionId=this.FeesReceivedFormGroup.get('transactionId')?.value;
        let studentId = this.FeesReceivedFormGroup.get('studentId')?.value;
        let studentToCourseId = this.FeesReceivedFormGroup.get('studentToCourseId')?.value;
        let tr_date=this.FeesReceivedFormGroup.get('transactionDate')?.value;
        let transactionDate = formatDate(tr_date, 'yyyy-MM-dd', 'en');
        let comment=this.FeesReceivedFormGroup.get('comment')?.value;
        let feesYear=new Date().getFullYear();
        let feesMonth=new Date().getMonth().toString();
        this.tempChargeObj={
          ledgerId:studentId,
          transactionTypeId:1,
          amount:this.totalAmount
        }
        this.tempFeesArray.push(this.tempChargeObj);

        this.tempObj={
            transactionMaster:{
            userId:1,
            studentCourseRegistrationId:studentToCourseId,
            transactionDate:transactionDate,
            comment:comment,
            feesYear:feesYear,
            feesMonth:feesMonth
          },
          transactionDetails: Object.values(this.tempFeesArray)
        }
        console.log("tran:",transactionId);
        this.transactionServicesService.updateFeesCharge(transactionId,this.tempObj).subscribe(response => {
          if (response.success === 1){
            this.getAllReceivedFees();
            this.tempFeesArray=[];
            this.totalAmount=0;
            this.clearFeesReceived();
            this.showSuccess("Record Updated successfully");
          }

        },error=>{
          this.showErrorMessage = true;
          this.errorMessage = error.message;

          setTimeout(()=>{
            this.showErrorMessage = false;
          }, 20000);

        })

      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });

  }
 
  

  onBankReceived(){
    this.confirmationService.confirm({
      message: 'Do you want to Save this record?',
      header: 'Save Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        let studentId = this.FeesReceivedFormGroup.get('studentId')?.value;
        let transactionDate=this.FeesReceivedFormGroup.get('transactionDate')?.value;
        let comment=this.FeesReceivedFormGroup.get('comment')?.value;
        this.tempChargeObj=[{
          ledgerId:2,
          transactionTypeId:1,
          amount:this.tempTotalAmount
        },
        {
          ledgerId:studentId,
          transactionTypeId:2,
          amount:this.tempTotalAmount
        }];
       // this.tempFeesArray.push(this.tempChargeObj);

        this.tempObj={
          transactionMaster:{
          userId:1,
          referenceTransactionMasterId: this.referenceTransactionMasterId,
          transactionDate:transactionDate,
          comment:comment
            },
          transactionDetails: Object.values(this.tempChargeObj)
        }
        this.transactionServicesService.saveFeesReceive(this.tempObj).subscribe(response => {
         this.referenceTransactionMasterId=response.data.transactionMasterId;
         this.isCashReceived=false;
            if (response.success === 1){
              //this.getAllReceivedFees();
              this.tempFeesArray=[];
              this.tempTotalAmount=0;
              this.clearFeesReceived();
              this.showSuccess("Record added successfully");
            }

        },error=>{
          this.showErrorMessage = true;
          this.errorMessage = error.message;

          setTimeout(()=>{
            this.showErrorMessage = false;
          }, 20000);

        })

      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });


  }
  onCashReceived(){
    this.confirmationService.confirm({
      message: 'Do you want to Save this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        let studentId = this.FeesReceivedFormGroup.get('studentId')?.value;
        let transactionDate=this.FeesReceivedFormGroup.get('transactionDate')?.value;
        let comment=this.FeesReceivedFormGroup.get('comment')?.value;
        this.tempChargeObj=[{
          ledgerId:1,
          transactionTypeId:1,
          amount:this.tempTotalAmount
        },
        {
          ledgerId:studentId,
          transactionTypeId:2,
          amount:this.tempTotalAmount
        }];
       // this.tempFeesArray.push(this.tempChargeObj);

        this.tempObj={
          transactionMaster:{
          userId:1,
          referenceTransactionMasterId: this.referenceTransactionMasterId,
          transactionDate:transactionDate,
          comment:comment
            },
          transactionDetails: Object.values(this.tempChargeObj)
        }
        this.transactionServicesService.saveFeesReceive(this.tempObj).subscribe(response => {
         this.referenceTransactionMasterId=response.data.transactionMasterId;
         this.isCashReceived=false;
            if (response.success === 1){
              //this.getAllReceivedFees();
              this.tempFeesArray=[];
              this.tempTotalAmount=0;
              this.clearFeesReceived();
              this.showSuccess("Record added successfully");
            }

        },error=>{
          this.showErrorMessage = true;
          this.errorMessage = error.message;

          setTimeout(()=>{
            this.showErrorMessage = false;
          }, 20000);

        })

      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });


  }
  onSave(){

     this.confirmationService.confirm({
      message: 'Do you want to Save this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        let studentId = this.FeesReceivedFormGroup.get('studentId')?.value;
        let studentToCourseId = this.FeesReceivedFormGroup.get('studentToCourseId')?.value;
        let transactionDate=this.FeesReceivedFormGroup.get('transactionDate')?.value;
        let comment=this.FeesReceivedFormGroup.get('comment')?.value;
        let feesYear=new Date().getFullYear();
        let feesMonth=new Date().getMonth().toString();
        this.tempChargeObj={
          ledgerId:studentId,
          transactionTypeId:1,
          amount:this.totalAmount
        }
        this.tempFeesArray.push(this.tempChargeObj);

        this.tempObj={
          transactionMaster:{
          userId:1,
          studentCourseRegistrationId:studentToCourseId,
          transactionDate:transactionDate,
          comment:comment,
          feesYear:feesYear,
          feesMonth:feesMonth
        },
          transactionDetails: Object.values(this.tempFeesArray)
        }
        this.transactionServicesService.feesCharge(this.tempObj).subscribe(response => {
         this.referenceTransactionMasterId=response.data.transactionMasterId;
            if (response.success === 1){

              this.isCashReceived=true;
              this.getAllReceivedFees();
              this.tempFeesArray=[];
              this.totalAmount=0;
              this.clearFeesReceived();
              this.showSuccess("Record added successfully");
            }

        },error=>{
          this.showErrorMessage = true;
          this.errorMessage = error.message;

          setTimeout(()=>{
            this.showErrorMessage = false;
          }, 20000);

        })

      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });

  }
  showSuccess(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
