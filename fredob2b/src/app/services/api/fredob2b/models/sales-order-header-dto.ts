/* tslint:disable */
/* eslint-disable */
import { SalesOrderDetailDto } from './sales-order-detail-dto';
export interface SalesOrderHeaderDto {
  addressId?: number;
  comment?: null | string;
  createdBy?: number;
  createdDate?: string;
  currencyId?: number;
  customerId?: number;
  dueDate?: string;
  id?: number;
  modifiedBy?: number;
  modifiedDate?: string;
  orderDate?: string;
  purchaseOrderNumber?: null | string;
  salesOrderDetails?: null | Array<SalesOrderDetailDto>;
  salesOrderNumber?: null | string;
  salesPersonId?: number;
  shipDate?: string;
  status?: number;
  subTotal?: number;
  taxAmount?: number;
  territoryId?: number;
  total?: number;
}
