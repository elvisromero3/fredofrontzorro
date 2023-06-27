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

import { CreateExpenseRequest } from '../models/create-expense-request';
import { ExpenseDto } from '../models/expense-dto';
import { UpdateExpenseRequest } from '../models/update-expense-request';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiExpenseGet
   */
  static readonly ApiExpenseGetPath = '/api/Expense';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ExpenseDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseService.ApiExpenseGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ExpenseDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiExpenseGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<ExpenseDto>> {

    return this.apiExpenseGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ExpenseDto>>) => r.body as Array<ExpenseDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ExpenseDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseService.ApiExpenseGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ExpenseDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiExpenseGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<ExpenseDto>> {

    return this.apiExpenseGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ExpenseDto>>) => r.body as Array<ExpenseDto>)
    );
  }

  /**
   * Path part for operation apiExpensePost
   */
  static readonly ApiExpensePostPath = '/api/Expense';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpensePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpensePost$Plain$Response(params?: {
    body?: CreateExpenseRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ExpenseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseService.ApiExpensePostPath, 'post');
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
        return r as StrictHttpResponse<ExpenseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiExpensePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpensePost$Plain(params?: {
    body?: CreateExpenseRequest
  },
  context?: HttpContext

): Observable<ExpenseDto> {

    return this.apiExpensePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ExpenseDto>) => r.body as ExpenseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpensePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpensePost$Json$Response(params?: {
    body?: CreateExpenseRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ExpenseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseService.ApiExpensePostPath, 'post');
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
        return r as StrictHttpResponse<ExpenseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiExpensePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpensePost$Json(params?: {
    body?: CreateExpenseRequest
  },
  context?: HttpContext

): Observable<ExpenseDto> {

    return this.apiExpensePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ExpenseDto>) => r.body as ExpenseDto)
    );
  }

  /**
   * Path part for operation apiExpenseIdGet
   */
  static readonly ApiExpenseIdGetPath = '/api/Expense/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ExpenseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseService.ApiExpenseIdGetPath, 'get');
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
        return r as StrictHttpResponse<ExpenseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiExpenseIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<ExpenseDto> {

    return this.apiExpenseIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ExpenseDto>) => r.body as ExpenseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ExpenseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseService.ApiExpenseIdGetPath, 'get');
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
        return r as StrictHttpResponse<ExpenseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiExpenseIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<ExpenseDto> {

    return this.apiExpenseIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ExpenseDto>) => r.body as ExpenseDto)
    );
  }

  /**
   * Path part for operation apiExpenseIdPut
   */
  static readonly ApiExpenseIdPutPath = '/api/Expense/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpenseIdPut$Plain$Response(params: {
    id: number;
    body?: UpdateExpenseRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ExpenseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseService.ApiExpenseIdPutPath, 'put');
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
        return r as StrictHttpResponse<ExpenseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiExpenseIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpenseIdPut$Plain(params: {
    id: number;
    body?: UpdateExpenseRequest
  },
  context?: HttpContext

): Observable<ExpenseDto> {

    return this.apiExpenseIdPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ExpenseDto>) => r.body as ExpenseDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpenseIdPut$Json$Response(params: {
    id: number;
    body?: UpdateExpenseRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ExpenseDto>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseService.ApiExpenseIdPutPath, 'put');
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
        return r as StrictHttpResponse<ExpenseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiExpenseIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExpenseIdPut$Json(params: {
    id: number;
    body?: UpdateExpenseRequest
  },
  context?: HttpContext

): Observable<ExpenseDto> {

    return this.apiExpenseIdPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ExpenseDto>) => r.body as ExpenseDto)
    );
  }

  /**
   * Path part for operation apiExpenseIdDelete
   */
  static readonly ApiExpenseIdDeletePath = '/api/Expense/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExpenseIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseIdDelete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExpenseService.ApiExpenseIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiExpenseIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExpenseIdDelete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiExpenseIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
