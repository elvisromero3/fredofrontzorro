import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { forkJoin } from 'rxjs';
import { CategoryDto, ProductDto, ShopingCardAddViewModel, ShopingCardDetailDto, ShopingCardSummaryDto } from 'src/app/services/api/fredob2b/models';
import { ShopingCardService, UserService } from 'src/app/services/api/fredob2b/services';
import { AccountDto } from 'src/app/shared/models/Account';
import { ShopingCardBasket } from 'src/app/shared/models/ShopingCardBasket';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NotificationEventService } from 'src/app/shared/services/notification-event.service';
import { ShopingCardBasketService } from 'src/app/shared/services/shoping-card-basket.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
   token: string = "";
   sessionId: string ="";
   categories:CategoryDto[] | undefined; 
   productList:ProductDto[] | undefined;
   productCount:number =0;
   shopingCardDetail: ShopingCardDetailDto[] | undefined;
   shopingCardSummary: ShopingCardSummaryDto | undefined ;

   private productTotal:number=0;

   contentLoaded:boolean=true;

  constructor(private cookieService: CookieService, 
              private userServices: UserService,
              private authServices: AuthService,
              private shopingCardServices: ShopingCardService,
              private shopingCardBasketService$: ShopingCardBasketService,
              private notificationEventService: NotificationEventService  

              ){

  }
  ngOnInit(): void {
    const cookieExists: boolean = this.cookieService.check('fredo-session-id');

    if(cookieExists === false){
      const isoStr = new Date().toISOString();
      const dateCopy = new Date()
      dateCopy.setTime(dateCopy.getTime() + 3 *60 *60 *1000);
      const newSessionId = uuidv4();
      this.cookieService.set('fredo-session-id',newSessionId,{ expires: dateCopy, sameSite: 'Strict'});
      this.sessionId = newSessionId;
    }else{
      this.sessionId = this.cookieService.get('fredo-session-id');
    }


    this.userServices.apiUserAnonymousPost$Json({sessionId: this.sessionId})
        .subscribe(resp => {
          this.token = resp;
          const userAuth:AccountDto = {
            responseCode: 1,
            responseMenssage: '',

            fullName: 'anonimous',
            email: 'ano@anonymous.test',
            userName: '',
            dateCreated: '',
            token: resp,
            roles: ['public']
          }
          this.authServices.updateAccount(userAuth);
          this.getInitialCategories();
          this.getInitialProducts();
          this.getShopingCardDetail();

        });
       ///DELETE PRODUCT 
       this.shopingCardBasketService$.getnotifiDeleteProduct().subscribe(resp =>
        {

          this.deleteProductShopingCard(resp);
        })

        this.notificationEventService.subscribeEvent().subscribe(resp => {

          this.shopingCardServices.apiShopingCardProductByNameNameGet$Json({name: resp?.data})
            .subscribe(resp => {
              this.productList = resp;
              this.productCount = this.productList.length;
            });
        });
  }

  getInitialCategories(){
   
    this.shopingCardServices.apiShopingCardCategoriesGet$Json()
    .subscribe(resp => {
      this.categories = resp;

     
    });
  }

  getInitialProducts(){
  this.shopingCardServices.apiShopingCardProductByCategoryIdIdGet$Json({id: 2})
    .subscribe(resp => {
      this.productList = resp;
      this.productCount = this.productList.length;
 
      this.contentLoaded = false;
    })
  }


  getShopingCardDetail(){
    this.shopingCardServices.apiShopingCardGet$Json()
    .subscribe(resp => {
      this.shopingCardSummary = resp;
   
       const shopingcarDetail: ShopingCardBasket ={
        products: resp.products!,
         cardSubTotal: resp.cardSubTotal!,
         shipping: 0,
         tax: 0,
         cardTotal: resp.cardTotal!,
         lineItems: resp.lineItems!
       }
       this.shopingCardBasketService$.setShopingCardDetail(shopingcarDetail);
    }
     

    )
  }


  changeCategory(categoryItem: any){

    this.shopingCardServices.apiShopingCardProductByCategoryIdIdGet$Json({id: categoryItem.id })
    .subscribe(resp => {
      this.productList = resp;
      this.productCount = this.productList.length;
      
    })
  }

  addProductShopingCard(productitem:any){

   const addproductItem: ShopingCardAddViewModel = {
    productId:productitem.id,
    quantity:1
   };
    this.shopingCardServices.apiShopingCardPost$Json({body: addproductItem})
      .subscribe(resp => {
       
        this.getShopingCardDetail();
       
      })
  }

  deleteProductShopingCard(id: number){
  
    this.shopingCardServices.apiShopingCardIdDelete({id: id})
      .subscribe(reps => {
     
  
        this.getShopingCardDetail();
      })
  }
}
