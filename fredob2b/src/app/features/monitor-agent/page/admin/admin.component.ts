import { Component, OnInit } from '@angular/core';
import { MonitorAgentDto } from 'src/app/services/api/fredob2b/models';
import { MonitorAgentService } from 'src/app/services/api/fredob2b/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

monitorList:MonitorAgentDto[]=[];

/**
 *
 */
constructor(
  private monitorAgentService: MonitorAgentService
) {
  
  
}

ngOnInit(): void {
  this.getData();
}

getData(){
  this.monitorAgentService.apiMonitorAgentGet$Json()
  .subscribe(resp => {
    this.monitorList =resp;
  })
}

}
