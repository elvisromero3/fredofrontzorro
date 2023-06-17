import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { CategoryService, ProductService } from 'src/app/services/api/fredob2b/services';
import { CreateComponent } from '../create/create.component';
import { CategoryDto } from 'src/app/services/api/fredob2b/models';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
categoryList:CategoryDto[]=[];
isSpinning:boolean= true;
/**
 *
 */
constructor(
  private categoryServices:CategoryService,
  private productServices:ProductService,
  private drawerService: NzDrawerService,
  private modal: NzModalService

) {
  
  
}
  ngOnInit(): void {
    
    this.getData();
  }

  getData():void {
    this.categoryServices.apiCategoryGet$Json()
    .subscribe(resp =>{
      this.categoryList = resp;
      this.isSpinning = false;
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
    drawerRef.afterClose.subscribe(() => {
      this.getData();
    });
  }
  edit(data: CategoryDto): void {
    console.log(data);
    const drawerRef = this.drawerService.create<CreateComponent, { value: string }, string>({
      nzTitle: 'New Category',
      nzFooter: '',
      nzExtra: '',
      nzContent: CreateComponent,
      nzContentParams: {
        Id: data.id
      }
    });
    drawerRef.afterClose.subscribe(() => {
      this.getData();
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this?',
      nzContent: '<b style="color: red;">Category</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}

export interface Category {
  categoryName: string;
  description: string;
}

