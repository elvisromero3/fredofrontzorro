/* tslint:disable */
/* eslint-disable */
import { ShopingCardDetailDto } from './shoping-card-detail-dto';
export interface ShopingCardSummaryDto {
  cardSubTotal?: number;
  cardTotal?: number;
  lineItems?: number;
  products?: null | Array<ShopingCardDetailDto>;
  shipping?: number;
  tax?: number;
}
