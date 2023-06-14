import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { CreateCategoryRequest } from 'src/app/services/api/fredob2b/models';
import { CategoryService } from 'src/app/services/api/fredob2b/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    validateForm!: FormGroup;

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
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);

      this.categoryService.apiCategoryPost({body: this.validateForm.value})
      .subscribe(resp => {
        this.drawerRef.close();
      });


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
