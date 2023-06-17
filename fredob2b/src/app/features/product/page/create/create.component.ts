import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { CreateProductRequest, UpdateProductRequest } from 'src/app/services/api/fredob2b/models';
import { ProductService } from 'src/app/services/api/fredob2b/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  validateForm!: FormGroup;
  isSpinning = true;
  @Input() Id : number | undefined ;

  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private drawerRef: NzDrawerRef<string>){

  }



  ngOnInit(): void {

     this.validateForm = this.fb.group({
      productCode:[null,[Validators.required]],
      productName: [null, [Validators.required]],
      categoryId: [null,[Validators.required]],
      unitPrice: [null,[Validators.required]],
      standardCost: [null,[Validators.required]]
     })
    
     if(this.Id !== -1){
      this.isSpinning = true;
      this.productService.apiProductIdGet$Json({id: this.Id as number})
        .subscribe( resp =>{

          this.validateForm.patchValue(resp)

          
        });
     }
    this.isSpinning = false;
  }

  submitForm(): void {
    if (this.validateForm.valid) {

      console.log('submit', this.validateForm.value);

      if(this.Id == -1){
        this.isSpinning = true;

        const createProductRequest:CreateProductRequest ={
          categoryId: this.validateForm.get('categoryId')?.value,
          color: '',
          finishedGoodsFlag: '',
          listPrice: 1,
          productCode: this.validateForm.get('productCode')?.value,
          productName: this.validateForm.get('productName')?.value,
          quantityPerUnit:1,
          reorderLevel:0,
          reorderPoint: 0,
          safetyStockLevel: 0,
          standardCost: this.validateForm.get('standardCost')?.value,
          unitPrice: this.validateForm.get('unitPrice')?.value,
          unitsInStock: 0,
          unitsOnOrder: 0,
        }

        this.productService.apiProductPost$Json({body: createProductRequest})
      .subscribe(resp => {
       // this.isSpinning = false;
        this.drawerRef.close();
      });
      }else { 
        console.log("Edit:", this.Id );
        const updateProductRequest:UpdateProductRequest ={
          id: this.Id,
          categoryId: this.validateForm.get('categoryId')?.value,
          color: '',
          finishedGoodsFlag: '',
          listPrice: 1,
          productCode: this.validateForm.get('productCode')?.value,
          productName: this.validateForm.get('productName')?.value,
          quantityPerUnit:1,
          reorderLevel:0,
          reorderPoint: 0,
          safetyStockLevel: 0,
          standardCost: this.validateForm.get('standardCost')?.value,
          unitPrice: this.validateForm.get('unitPrice')?.value,
          unitsInStock: 0,
          unitsOnOrder: 0,
        }
        this.productService.apiProductIdPut$Json({id:this.Id as number,body: updateProductRequest})
          .subscribe(resp => {
            this.drawerRef.close();
        });
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
