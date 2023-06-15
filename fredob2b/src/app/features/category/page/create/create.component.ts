import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { Subscription } from 'rxjs';
import { CreateCategoryRequest } from 'src/app/services/api/fredob2b/models';
import { CategoryService } from 'src/app/services/api/fredob2b/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    validateForm!: FormGroup;
    subscription$!: Subscription;
  @Input() Id: number | undefined;

  /**
   *
   */
  constructor(private fb: FormBuilder,
              private categoryService:CategoryService,
              private drawerRef: NzDrawerRef<string>
              ) {
    
    
  }
  ngOnInit(): void {

    this.validateForm = this.fb.group({
      categoryName:[null, [Validators.required]],
      description: [null, [Validators.required]]
    });

    if(this.Id !== -1){

    this.subscription$ = this.categoryService.apiCategoryIdGet$Json({id: this.Id as number})
        .subscribe(resp => {
          this.validateForm.patchValue({
            categoryName: resp.categoryName,
            description: resp.description
          })
        })
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {

      console.log('submit', this.validateForm.value);

      if(this.Id == -1){
        this.categoryService.apiCategoryPost$Json({body: this.validateForm.value})
      .subscribe(resp => {
        this.drawerRef.close();
      });
      }else {
        
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
