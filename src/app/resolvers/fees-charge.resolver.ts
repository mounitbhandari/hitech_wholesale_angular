import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map,forkJoin, Observable, of } from 'rxjs';
import {TransactionServicesService} from "../services/transaction-services.service";
@Injectable({
  providedIn: 'root'
})
export class FeesChargeResolver implements Resolve<boolean> {
  constructor(private transactionServicesService: TransactionServicesService ){
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const b = this.transactionServicesService.fetchAllStudentName();
    const c = this.transactionServicesService.fetchAllFeesName();
    const join= forkJoin(b,c).pipe(map((allResponses: any[]) => {
      return {
        studentsCharge: allResponses[0],
        feesNames: allResponses[1]
      };
    }));
    return join;
  }
}
