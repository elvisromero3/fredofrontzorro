/* tslint:disable */
/* eslint-disable */
import { ResponseCode } from './response-code';
export interface ResponseModel {
  dataSet?: null | any;
  responseCode?: ResponseCode;
  responseMessage?: null | string;
}
