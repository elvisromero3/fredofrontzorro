import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { CreateCustomerRequest, UpdateCustomerRequest } from 'src/app/services/api/fredob2b/models';
import { CustomerService } from 'src/app/services/api/fredob2b/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  validateForm!: FormGroup;

@Input() Id: number | undefined

constructor(private fb: FormBuilder,
            private customerService:CustomerService,
            private drawerRef: NzDrawerRef<string>

){



}



  ngOnInit(): void {

    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      customerName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });

    if(this.Id !== -1){
      this.customerService.apiCustomerIdGet$Json({id: this.Id as number})
      .subscribe(resp => {
        this.validateForm.patchValue({
          address: resp.address,
          customerName: resp.customerName,
          email: resp.email,
          phone: resp.phone
        })
      })
    }
   
  }

  submitForm(): void {
    if (this.validateForm.valid) {

      console.log('submit', this.validateForm.value);


      if(this.Id == -1){
        const createCustomerRequest:CreateCustomerRequest ={
          address: this.validateForm.get('address')?.value,
          customerName:this.validateForm.get('customerName')?.value,
          email:this.validateForm.get('email')?.value,
          phone:this.validateForm.get('phone')?.value,
        }
        this.customerService.apiCustomerPost$Json({body: createCustomerRequest})
      .subscribe(resp => {
        this.drawerRef.close();
      });
      }else {
        const updateCustomerRequest:UpdateCustomerRequest ={
          address: this.validateForm.get('address')?.value,
          customerName:this.validateForm.get('customerName')?.value,
          email:this.validateForm.get('email')?.value,
          phone:this.validateForm.get('phone')?.value,
          id: this.Id
        }
        this.customerService.apiCustomerIdPut$Json({id: this.Id as number ,body: updateCustomerRequest})
          .subscribe(resp => {
            this.drawerRef.close();
          })

      }
      

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }



}
