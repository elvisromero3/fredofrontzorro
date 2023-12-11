import { Component,ElementRef,ViewChild } from '@angular/core';
import { ShopingCardEvents } from 'src/app/shared/models/ShopingCardEvents';
import { NotificationEventService } from 'src/app/shared/services/notification-event.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
showSuggestion:Boolean = false;




constructor(private notificationEvent: NotificationEventService){

}

onSearchBlurEvent(event: any){
  //this.showSuggestion = false;
}
onSearchFocusEvent(event: any){
  //this.showSuggestion = true;
}


searchProduct(text: string){
 // console.log("Buscando Producto");
  if(text){
    console.log("Buscando Producto 2");
    console.log(text);

    const term:ShopingCardEvents ={
      eventName : 'search',
      data: text
    };

    this.notificationEvent.sendEvent(term);
  }
}

}
