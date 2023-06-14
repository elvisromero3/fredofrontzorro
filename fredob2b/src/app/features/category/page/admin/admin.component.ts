import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { CategoryService, ProductService } from 'src/app/services/api/fredob2b/services';
import { CreateComponent } from '../create/create.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
categoryList:any;
/**
 *
 */
constructor(
  private categoryServices:CategoryService,
  private productServices:ProductService,
  private drawerService: NzDrawerService

) {
  
  
}
  ngOnInit(): void {
    
    this.categoryServices.apiCategoryGet()
    .subscribe(resp =>{

      this.categoryList = resp;
      console.log(this.categoryList);

    })
    this.productServices.apiProductGet$Json()
    .subscribe(resp => {
      console.log(resp);
    })


  }


  new(): void {
    const drawerRef = this.drawerService.create<CreateComponent, { value: string }, string>({
      nzTitle: 'New Category',
      nzFooter: '',
      nzExtra: '',
      nzContent: CreateComponent,
      nzContentParams: {
        Id: -1
      }
    });
  }


}

export interface Category {
  categoryName: string;
  description: string;
}

