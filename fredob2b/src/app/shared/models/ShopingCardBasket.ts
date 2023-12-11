import { ShopingCardDetailDto } from "src/app/services/api/fredob2b/models";

export interface ShopingCardBasket {
    products: ShopingCardDetailDto[];
    cardSubTotal:number;
    shipping:number;
    tax:number;
    cardTotal:number;
    lineItems:number;

}