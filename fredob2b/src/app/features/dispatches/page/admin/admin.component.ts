import { Component, OnInit } from '@angular/core';
import { CreateComponent } from '../create/create.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';


interface Dispache {
  load: string;
  pickup: string;
  delivery: string;
  driver: string;
  truck:string;
  customer:string;
  from:string;
  to:string;
  bol:string;
  total: string;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isSpinning:boolean= true;
  dispatchesList:Dispache[]=[
    {
      load: '1053',
      pickup: '04/03/12',
      delivery: '04/06/12',
      driver: 'Doe',
      truck: '0101',
      customer: 'Best Customer',
      from: 'Canton, OH',
      to: 'San Antonio, TX',
      bol: 'zx9876654',
      total:'$3630.75'
    },
    {
      load: '1055',
      pickup: '04/0/12',
      delivery: '04/01/12',
      driver: 'DCampbel',
      truck: '0102',
      customer: 'Customer',
      from: 'New York, NY',
      to: 'Los Angeles, CA',
      bol: 'zx9876300',
      total:'$4500.75'
    }
  ];

  constructor(
    private drawerService: NzDrawerService,
    private modal: NzModalService
  ){}

  ngOnInit( ): void {
   this.isSpinning = false;
  }

  new(): void {
    const drawerRef = this.drawerService.create<CreateComponent, { value: string }, string>({
      nzTitle: 'Add a Dispatch',
      nzFooter: '',
      nzExtra: '',
      nzWidth: 600,
      nzContent: CreateComponent,
      nzContentParams: {
        Id: -1
      }
    });
    drawerRef.afterClose.subscribe(() => {
     // this.getData();
    });
  }
  edit(data: Dispache): void {
    console.log(data);
    const drawerRef = this.drawerService.create<CreateComponent, { value: string }, string>({
      nzTitle: 'Edit Product',
      nzFooter: '',
      nzExtra: '',
      nzContent: CreateComponent,
      nzContentParams: {
       // Id: data.
      }
    });
    drawerRef.afterClose.subscribe(() => {
     // this.getData();
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
