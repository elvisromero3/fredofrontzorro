import { Component, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/api/fredob2b/services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  @Input() Id: number | undefined;
  selectedValue = null;
  customerOption:Array<{ value: string; text: string }> = [];
  nzFilterOption = (): boolean => true;
  salesOrderList:any[]=[];
  isSpinning:boolean= false;


  constructor(private customerService:CustomerService){

  }



  searchCustomer(value: string): void {
    console.log("Value:", value);
    this.customerService.apiCustomerGet$Json()
    .subscribe(resp => {
      console.log(resp);
      const listOfOption: Array<{ value: string; text: string }> = [];
        resp.forEach(item => {
          listOfOption.push({
            value: item.id as unknown as string,
            text: item.customerName as unknown as string
          });
        })
      this.customerOption = listOfOption;
    })
  }

changeCustomer(value: {value:string; text:string}):void {
  console.log(value);
}

edit(): void {
  // console.log(data);
  // const drawerRef = this.drawerService.create<CreateComponent, { value: string }, string>({
  //   nzTitle: 'New Customer',
  //   nzFooter: '',
  //   nzExtra: '',
  //   nzContent: CreateComponent,
  //   nzContentParams: {
  //     Id: data.id
  //   }
  // });
  // drawerRef.afterClose.subscribe(() => {
  //   this.getData();
  // });
}

showDeleteConfirm(): void {
  // this.modal.confirm({
  //   nzTitle: 'Are you sure delete this?',
  //   nzContent: '<b style="color: red;">Customer</b>',
  //   nzOkText: 'Yes',
  //   nzOkType: 'primary',
  //   nzOkDanger: true,
  //   nzOnOk: () => console.log('OK'),
  //   nzCancelText: 'No',
  //   nzOnCancel: () => console.log('Cancel')
  // });
}




}
