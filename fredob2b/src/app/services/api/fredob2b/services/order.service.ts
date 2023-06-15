/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateSalesOrderDetailRequest } from '../models/create-sales-order-detail-request';
import { CreateSalesOrderRequest } from '../models/create-sales-order-request';
import { SalesOrderDetailDto } from '../models/sales-order-detail-dto';
import { SalesOrderHeaderDto } from '../models/sales-order-header-dto';
import { UpdateSalesOrderDetailRequest } from '../models/update-sales-order-detail-request';
import { UpdateSalesOrderRequest } from '../models/update-sales-order-request';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOrderGet
   */
  static readonly ApiOrderGetPath = '/api/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SalesOrderHeaderDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SalesOrderHeaderDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<SalesOrderHeaderDto>> {

    return this.apiOrderGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SalesOrderHeaderDto>>) => r.body as Array<SalesOrderHeaderDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SalesOrderHeaderDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SalesOrderHeaderDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<SalesOrderHeaderDto>> {

    return this.apiOrderGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SalesOrderHeaderDto>>) => r.body as Array<SalesOrderHeaderDto>)
    );
  }

  /**
   * Path part for operation apiOrderPost
   */
  static readonly ApiOrderPostPath = '/api/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPost$Plain$Response(params?: {
    body?: CreateSalesOrderRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesOrderHeaderDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesOrderHeaderDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPost$Plain(params?: {
    body?: CreateSalesOrderRequest
  },
  context?: HttpContext

): Observable<SalesOrderHeaderDto> {

    return this.apiOrderPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesOrderHeaderDto>) => r.body as SalesOrderHeaderDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPost$Json$Response(params?: {
    body?: CreateSalesOrderRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesOrderHeaderDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesOrderHeaderDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderPost$Json(params?: {
    body?: CreateSalesOrderRequest
  },
  context?: HttpContext

): Observable<SalesOrderHeaderDto> {

    return this.apiOrderPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesOrderHeaderDto>) => r.body as SalesOrderHeaderDto)
    );
  }

  /**
   * Path part for operation apiOrderIdGet
   */
  static readonly ApiOrderIdGetPath = '/api/Order/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesOrderHeaderDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesOrderHeaderDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<SalesOrderHeaderDto> {

    return this.apiOrderIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesOrderHeaderDto>) => r.body as SalesOrderHeaderDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesOrderHeaderDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesOrderHeaderDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<SalesOrderHeaderDto> {

    return this.apiOrderIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesOrderHeaderDto>) => r.body as SalesOrderHeaderDto)
    );
  }

  /**
   * Path part for operation apiOrderIdPut
   */
  static readonly ApiOrderIdPutPath = '/api/Order/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderIdPut$Plain$Response(params: {
    id: number;
    body?: UpdateSalesOrderRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesOrderHeaderDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesOrderHeaderDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderIdPut$Plain(params: {
    id: number;
    body?: UpdateSalesOrderRequest
  },
  context?: HttpContext

): Observable<SalesOrderHeaderDto> {

    return this.apiOrderIdPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesOrderHeaderDto>) => r.body as SalesOrderHeaderDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderIdPut$Json$Response(params: {
    id: number;
    body?: UpdateSalesOrderRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesOrderHeaderDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesOrderHeaderDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderIdPut$Json(params: {
    id: number;
    body?: UpdateSalesOrderRequest
  },
  context?: HttpContext

): Observable<SalesOrderHeaderDto> {

    return this.apiOrderIdPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesOrderHeaderDto>) => r.body as SalesOrderHeaderDto)
    );
  }

  /**
   * Path part for operation apiOrderDetailIdGet
   */
  static readonly ApiOrderDetailIdGetPath = '/api/Order/detail/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDetailIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderDetailIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SalesOrderDetailDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDetailIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SalesOrderDetailDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderDetailIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderDetailIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<SalesOrderDetailDto>> {

    return this.apiOrderDetailIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SalesOrderDetailDto>>) => r.body as Array<SalesOrderDetailDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDetailIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderDetailIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SalesOrderDetailDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDetailIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SalesOrderDetailDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderDetailIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderDetailIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<SalesOrderDetailDto>> {

    return this.apiOrderDetailIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SalesOrderDetailDto>>) => r.body as Array<SalesOrderDetailDto>)
    );
  }

  /**
   * Path part for operation apiOrderDetailIdPut
   */
  static readonly ApiOrderDetailIdPutPath = '/api/Order/detail/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDetailIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDetailIdPut$Plain$Response(params: {
    id: number;
    body?: UpdateSalesOrderDetailRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesOrderDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDetailIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesOrderDetailDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderDetailIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDetailIdPut$Plain(params: {
    id: number;
    body?: UpdateSalesOrderDetailRequest
  },
  context?: HttpContext

): Observable<SalesOrderDetailDto> {

    return this.apiOrderDetailIdPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesOrderDetailDto>) => r.body as SalesOrderDetailDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDetailIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDetailIdPut$Json$Response(params: {
    id: number;
    body?: UpdateSalesOrderDetailRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesOrderDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDetailIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesOrderDetailDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderDetailIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDetailIdPut$Json(params: {
    id: number;
    body?: UpdateSalesOrderDetailRequest
  },
  context?: HttpContext

): Observable<SalesOrderDetailDto> {

    return this.apiOrderDetailIdPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesOrderDetailDto>) => r.body as SalesOrderDetailDto)
    );
  }

  /**
   * Path part for operation apiOrderDetailIdDelete
   */
  static readonly ApiOrderDetailIdDeletePath = '/api/Order/detail/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDetailIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderDetailIdDelete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDetailIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderDetailIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderDetailIdDelete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiOrderDetailIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiOrderDetailPost
   */
  static readonly ApiOrderDetailPostPath = '/api/Order/detail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDetailPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDetailPost$Plain$Response(params?: {
    body?: CreateSalesOrderDetailRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesOrderDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDetailPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesOrderDetailDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderDetailPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDetailPost$Plain(params?: {
    body?: CreateSalesOrderDetailRequest
  },
  context?: HttpContext

): Observable<SalesOrderDetailDto> {

    return this.apiOrderDetailPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesOrderDetailDto>) => r.body as SalesOrderDetailDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDetailPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDetailPost$Json$Response(params?: {
    body?: CreateSalesOrderDetailRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalesOrderDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDetailPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SalesOrderDetailDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOrderDetailPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDetailPost$Json(params?: {
    body?: CreateSalesOrderDetailRequest
  },
  context?: HttpContext

): Observable<SalesOrderDetailDto> {

    return this.apiOrderDetailPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalesOrderDetailDto>) => r.body as SalesOrderDetailDto)
    );
  }

}
