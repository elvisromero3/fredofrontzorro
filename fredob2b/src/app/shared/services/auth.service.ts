import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, first, of } from 'rxjs';
import { LoginViewModel, ResponseCode } from 'src/app/services/api/fredob2b/models';
import { UserService, ValuesService } from 'src/app/services/api/fredob2b/services';
import { AccountDto } from '../models/Account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: string ="";
  //private userAccount: AuthDto | undefined;
  private isLoggenIn: boolean;

  public accountSubject: BehaviorSubject<AccountDto | null>;
 // public account: Observable<AccountDto | null>;


  constructor(
    private userService: UserService,
    private router:Router
  ) {
    this.accountSubject = new BehaviorSubject<AccountDto | null>(null);
   // this.account = this.accountSubject.asObservable();

    this.isLoggenIn = false;
   }


  public get accountValue(){
    return this.accountSubject.value;
  } 

  get isUserLoggenIn(): boolean {
    console.log('pase por aqui isUserLoggenIn' ); 
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log("User encontrado:",user);
    return user !== null ? true : false;
  }


  login(username: string, password:string) {
    const loginView:LoginViewModel ={
      email: username,
      password: password
    }

      this.userService.apiUserLoginPost$Json({body: loginView})
        .pipe(first())
        .subscribe(resp =>{
          const value:any = resp;
          console.log("Value:", value);
          
          const userAuth:AccountDto = {
            responseCode: value.responseCode,
            responseMenssage: value.responseMessage,

            fullName: value.dataSet?.fullName,
            email: value.dataSet?.email,
            userName: value.dataSet?.userName,
            dateCreated: value.dataSet?.dateCreated,
            token: value.dataSet?.token,
            roles: value.dataSet?.roles
          }
          this.accountSubject.next(userAuth);
          console.log(userAuth);
        }
      );
    return this.accountSubject ;
    
  }

  signOut(){
    //call remove token
    localStorage.removeItem('user');
    this.router.navigate(['account']);

  }
}

