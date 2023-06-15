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

import { CreateCustomerRequest } from '../models/create-customer-request';
import { CustomerDto } from '../models/customer-dto';
import { UpdateCustomerRequest } from '../models/update-customer-request';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCustomerGet
   */
  static readonly ApiCustomerGetPath = '/api/Customer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CustomerDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CustomerDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<CustomerDto>> {

    return this.apiCustomerGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CustomerDto>>) => r.body as Array<CustomerDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CustomerDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CustomerDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<CustomerDto>> {

    return this.apiCustomerGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CustomerDto>>) => r.body as Array<CustomerDto>)
    );
  }

  /**
   * Path part for operation apiCustomerPost
   */
  static readonly ApiCustomerPostPath = '/api/Customer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerPost$Plain$Response(params?: {
    body?: CreateCustomerRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CustomerDto>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerPostPath, 'post');
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
        return r as StrictHttpResponse<CustomerDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerPost$Plain(params?: {
    body?: CreateCustomerRequest
  },
  context?: HttpContext

): Observable<CustomerDto> {

    return this.apiCustomerPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CustomerDto>) => r.body as CustomerDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerPost$Json$Response(params?: {
    body?: CreateCustomerRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CustomerDto>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerPostPath, 'post');
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
        return r as StrictHttpResponse<CustomerDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerPost$Json(params?: {
    body?: CreateCustomerRequest
  },
  context?: HttpContext

): Observable<CustomerDto> {

    return this.apiCustomerPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CustomerDto>) => r.body as CustomerDto)
    );
  }

  /**
   * Path part for operation apiCustomerIdGet
   */
  static readonly ApiCustomerIdGetPath = '/api/Customer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CustomerDto>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdGetPath, 'get');
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
        return r as StrictHttpResponse<CustomerDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<CustomerDto> {

    return this.apiCustomerIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CustomerDto>) => r.body as CustomerDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CustomerDto>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdGetPath, 'get');
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
        return r as StrictHttpResponse<CustomerDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<CustomerDto> {

    return this.apiCustomerIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CustomerDto>) => r.body as CustomerDto)
    );
  }

  /**
   * Path part for operation apiCustomerIdPut
   */
  static readonly ApiCustomerIdPutPath = '/api/Customer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerIdPut$Plain$Response(params: {
    id: number;
    body?: UpdateCustomerRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CustomerDto>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdPutPath, 'put');
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
        return r as StrictHttpResponse<CustomerDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerIdPut$Plain(params: {
    id: number;
    body?: UpdateCustomerRequest
  },
  context?: HttpContext

): Observable<CustomerDto> {

    return this.apiCustomerIdPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CustomerDto>) => r.body as CustomerDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerIdPut$Json$Response(params: {
    id: number;
    body?: UpdateCustomerRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CustomerDto>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdPutPath, 'put');
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
        return r as StrictHttpResponse<CustomerDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerIdPut$Json(params: {
    id: number;
    body?: UpdateCustomerRequest
  },
  context?: HttpContext

): Observable<CustomerDto> {

    return this.apiCustomerIdPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CustomerDto>) => r.body as CustomerDto)
    );
  }

  /**
   * Path part for operation apiCustomerIdDelete
   */
  static readonly ApiCustomerIdDeletePath = '/api/Customer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdDelete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCustomerIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdDelete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiCustomerIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
