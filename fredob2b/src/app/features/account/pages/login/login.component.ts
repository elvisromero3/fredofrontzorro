import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { first } from 'rxjs';
import { LoginViewModel } from 'src/app/services/api/fredob2b/models';
import { UserService } from 'src/app/services/api/fredob2b/services';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  validateForm!: FormGroup;
  isSpinning = false;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private accountService: AuthService,
              private message: NzMessageService
              ){
    
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      // userName: [null, [Validators.required]],
      // password: [null, [Validators.required]]
      userName: ['tets@test.com', [Validators.required]],
      password: ['Test123456*', [Validators.required]]
    });
  }

  submitForm(){
     if (this.validateForm.invalid){
       return;
     }
    this.isSpinning = true
    const loginView:LoginViewModel ={
      email: this.validateForm.get('userName')?.value,
      password: this.validateForm.get('password')?.value
    }
   
     this.accountService.login(this.validateForm.get('userName')?.value,
              this.validateForm.get('password')?.value).subscribe(resp =>{
                if(resp?.responseCode == 1 ){
                  this.router.navigate(['dashboard']);
               
                }else if(resp?.responseCode == 2){
                }

                if(resp != null){
                  this.isSpinning = false
               }
                
              }) 
                
              
    

  }
  createMessage(type: string): void {
    this.message.create(type, `User or Password Incorrect`);
  }
}

