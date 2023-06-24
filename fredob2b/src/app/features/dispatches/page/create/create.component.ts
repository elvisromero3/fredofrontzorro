import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  @Input() Id: number | undefined;
  dateFormat = 'yyyy/MM/dd';
}
