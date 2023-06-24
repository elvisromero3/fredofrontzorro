import { Component } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CreateComponent } from '../create/create.component';


interface Expense {
  date: string;
  category: string;
  truck:string;
  description:string;
  amount:string;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
   isSpinning:boolean= false;
    expenseList:Expense[]=[
      {
        date: '01/11/12',
        category: 'Fuel',
        truck: '0102 truck Freightliner',
        description: '',
        amount: '$700'
      },
      {
        date: '12/05/11',
        category: 'Office',
        truck: '0102 truck Freightliner',
        description: 'sample',
        amount: '$8000.00'
      },
      {
        date: '10/20/11',
        category: 'Insurance',
        truck: '0102 truck Freightliner',
        description: 'liability insurancee',
        amount: '$1400.00'
      }
    ]

    constructor(
          private drawerService: NzDrawerService,
          private modal: NzModalService
    ){}

    new(): void {
      const drawerRef = this.drawerService.create<CreateComponent, { value: string }, string>({
        nzTitle: 'Add Expense',
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
    edit(data: Expense): void {
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
