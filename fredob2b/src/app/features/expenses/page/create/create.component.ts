import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { CreateExpenseRequest, UpdateExpenseRequest } from 'src/app/services/api/fredob2b/models';
import { ExpenseService } from 'src/app/services/api/fredob2b/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  validateForm!: FormGroup;
  @Input() Id: number | undefined;


  constructor(private fb: FormBuilder, 
              private expenseService:ExpenseService,
              private drawerRef: NzDrawerRef<string>
    ){}

    ngOnInit():void {
      this.validateForm = this.fb.group({
        amount: [null, [Validators.required]],
        category: [null, [Validators.required]],
        dateOperation:  [null, [Validators.required]],
        description: [null, [Validators.required]],
        truck:  [null, [Validators.required]],
      })

      if(this.Id !== -1){
        this.expenseService.apiExpenseIdGet$Json({id: this.Id as number})
        .subscribe( resp => {
          this.validateForm.patchValue({
            amount: resp.amount,
            category: resp.category,
            dateOperation: resp.dateOperation,
            description: resp.description,
            truck: resp.truck
          })
        });
      }

    }

submitForm():void {
  if (this.validateForm.valid){

    if(this.Id == -1) {
      const createExpenseRequest:CreateExpenseRequest = {
        amount: this.validateForm.get('amount')?.value,
        category: this.validateForm.get('category')?.value,
        dateOperation: this.validateForm.get('dateOperation')?.value,
        description: this.validateForm.get('description')?.value,
        truck: this.validateForm.get('truck')?.value,
      }
      this.expenseService.apiExpensePost$Json({body: createExpenseRequest})
      .subscribe( resp => {
        this.drawerRef.close();
      })
    }else {
      const updateExpenseRequest:UpdateExpenseRequest = {
        amount: this.validateForm.get('amount')?.value,
        category: this.validateForm.get('category')?.value,
        dateOperation: this.validateForm.get('dateOperation')?.value,
        description: this.validateForm.get('description')?.value,
        truck: this.validateForm.get('truck')?.value,
      }
      this.expenseService.apiExpenseIdPut$Json({id: this.Id as number, body: updateExpenseRequest})
      .subscribe(resp => {
        this.drawerRef.close();
      })
    }

  }else {
    Object.values(this.validateForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }
}


}

