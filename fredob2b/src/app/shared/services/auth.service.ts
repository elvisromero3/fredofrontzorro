import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginViewModel } from 'src/app/services/api/fredob2b/models';
import { UserService } from 'src/app/services/api/fredob2b/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: string ="";
  private userAccount: AuthDto | undefined;
  private isLoggenIn: boolean;

  constructor(
    private userService: UserService,
    private router:Router
  ) {
    this.isLoggenIn = false;
   }



  get isUserLoggenIn(): boolean {
    console.log('pase por aqui isUserLoggenIn' ); 
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log("User encontrado:",user);
    return user !== null ? true : false;
  }


  login(username: string, password:string){
    const loginView:LoginViewModel ={
      email: username,
      password: password
    }

    this.userService.apiUserLoginPost({body: loginView})
    .pipe(first())
    .subscribe({
       next: value => {
        //this.userData = value;
        this.userAccount = JSON.parse(this.userData);
        console.log("Value from server:",value);
        console.log("Value from server 2:",this.userAccount);
    //  if (this.userAccount?["responseCode"] == 1){
          localStorage.setItem('user', JSON.parse(this.userData));
          this.router.navigate(['dashboard']);
          console.log("Ir A dashboards");
          
      //  }
        
       },
       error: error => { }
    });
    
  }

  signOut(){
    //call remove token
    localStorage.removeItem('user');
    this.router.navigate(['account']);

  }
}

export interface User {
  fullName:string;
  email:string;
  userName:string;
  dateCreated:string;
  token:string;
  roles:string[];
}

export interface AuthDto {
  responseCode: number;
  responseMenssage: string;
  dataSet?: User;
}