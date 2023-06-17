import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProductDto } from 'src/app/services/api/fredob2b/models';
import { ProductService } from 'src/app/services/api/fredob2b/services';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 productList:ProductDto[]=[];
 isSpinning:boolean= true;

  constructor(
    private productServices:ProductService,
    private drawerService: NzDrawerService,
    private modal: NzModalService
  ){}

  ngOnInit(): void {

    this.getData();
  }


  getData(): void {
    this.productServices.apiProductGet$Json()
    .subscribe(resp => {
      this.productList = resp;
      this.isSpinning = false;
    });
  }
  new(): void {
    const drawerRef = this.drawerService.create<CreateComponent, { value: string }, string>({
      nzTitle: 'New Product',
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
  edit(data: ProductDto): void {
    console.log(data);
    const drawerRef = this.drawerService.create<CreateComponent, { value: string }, string>({
      nzTitle: 'Edit Product',
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
      nzContent: '<b style="color: red;">Product</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }



}
