import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CreateComponent } from '../create/create.component';
import { ExpenseService } from 'src/app/services/api/fredob2b/services';
import { ExpenseDto } from 'src/app/services/api/fredob2b/models';


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
export class AdminComponent implements OnInit {
    isSpinning:boolean= false;
    expenseList:ExpenseDto[]=[];

    constructor(
          private expenseService: ExpenseService, 
          private drawerService: NzDrawerService,
          private modal: NzModalService
    ){}

    ngOnInit(): void {
      
    }   
    getData(): void {
      this.expenseService.apiExpenseGet$Json()
      .subscribe(resp => {
        this.expenseList = resp;
        this.isSpinning = false;
      })
    }

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
       this.getData();
      });
    }
    edit(data: ExpenseDto): void {
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
