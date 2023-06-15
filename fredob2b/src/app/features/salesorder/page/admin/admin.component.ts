import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SalesOrderHeaderDto } from 'src/app/services/api/fredob2b/models';
import { OrderService } from 'src/app/services/api/fredob2b/services';
import { CreateComponent } from '../create/create.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  salesOrderList:SalesOrderHeaderDto[]=[]

  constructor(private salesOrder:OrderService,
              private drawerService: NzDrawerService,
               private modal: NzModalService){

  }



  ngOnInit(): void {
    this.getData();
  }

  getData():void {
    this.salesOrder.apiOrderGet$Json()
    .subscribe(resp => {
      this.salesOrderList = resp;
    })

  }  
  new(): void {

  }
  edit(data: SalesOrderHeaderDto): void {
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



}
