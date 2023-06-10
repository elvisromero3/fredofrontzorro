import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginViewModel } from 'src/app/services/api/fredob2b/models';
import { UserService } from 'src/app/services/api/fredob2b/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  validateForm!: FormGroup;
  
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService){
    
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
      
    });
  }

  submitForm(){
    // if (this.validateForm.invalid){
    //   return;
    // }
    const loginView:LoginViewModel ={
      email: this.validateForm.get('userName')?.value,
      password: this.validateForm.get('password')?.value
    }
    console.log("Enviando");
     this.userService.apiUserLoginPost({body: loginView})
     .pipe(first())
     .subscribe({
        next: () => {
            this.router.navigateByUrl('/');
        },
        error: error => {

        }
     });
  }
}

