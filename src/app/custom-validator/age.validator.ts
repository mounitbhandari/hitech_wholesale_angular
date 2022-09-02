import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

// export function AgeValidator(control: AbstractControl): { [key: string]: boolean } | null {
//   console.log(control);
//   // var dateParts = control.value.split("/");
//   // var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
//   // var timeDiff = Math.abs(Date.now() - new Date(dateObject).getTime());
//   // var age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
//   var age=3;
//
//   if (age < 4) {
//     return { 'age': true };
//   }
//   return null;
// }



export function ageGTE(val: number): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {

    let v: any = control.value;
    var age=0;
    if(v){
      const timeDiff = Math.abs(Date.now() - v.getTime());
      age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      if (age <= val) {
        return { 'ageGTE': true, 'requiredValue': val, 'currentAge': age }
      }
    }
    if (isNaN(v)) {
      return { 'ageGTE': true, 'requiredValue': val, 'currentAge': age }
    }


    return null;

  }

}
