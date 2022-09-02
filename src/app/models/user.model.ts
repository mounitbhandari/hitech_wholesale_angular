

export class User{
  // tslint:disable-next-line:variable-name
  constructor(public uniqueId: number,
              public userName: string,
              public _authKey: string,
              public userTypeId: number,
              public userTypeName: string,
  ){}



  get authKey(){
    if (this._authKey){
      return this._authKey;
    }else {
      return null;
    }
  }
  get isAuthenticated(){
    if (this._authKey){
      return true;
    }else{
      return false;
    }
  }
  get isOwner(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 1;
  }
  get isDeveloper(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 2;
  }
  get isManagerSales(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 3;
  }
  get isManagerAccounts(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 4;
  }
  get isOfficeStaff(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 5;
  }
  get isWorker(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 6;
  }

  get isStudent(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 8;
  }
  get isPettyCash(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 10;
  }
  get isTutorial(){
    // tslint:disable-next-line:triple-equals
    return this.userTypeId == 100;
  }


}
