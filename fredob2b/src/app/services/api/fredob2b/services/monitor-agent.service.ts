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

import { CreateMonitorAgentRequest } from '../models/create-monitor-agent-request';
import { MonitorAgentDto } from '../models/monitor-agent-dto';

@Injectable({
  providedIn: 'root',
})
export class MonitorAgentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMonitorAgentGet
   */
  static readonly ApiMonitorAgentGetPath = '/api/MonitorAgent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMonitorAgentGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMonitorAgentGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<MonitorAgentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MonitorAgentService.ApiMonitorAgentGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MonitorAgentDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMonitorAgentGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMonitorAgentGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<MonitorAgentDto>> {

    return this.apiMonitorAgentGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<MonitorAgentDto>>) => r.body as Array<MonitorAgentDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMonitorAgentGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMonitorAgentGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<MonitorAgentDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MonitorAgentService.ApiMonitorAgentGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MonitorAgentDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMonitorAgentGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMonitorAgentGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<MonitorAgentDto>> {

    return this.apiMonitorAgentGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<MonitorAgentDto>>) => r.body as Array<MonitorAgentDto>)
    );
  }

  /**
   * Path part for operation apiMonitorAgentPost
   */
  static readonly ApiMonitorAgentPostPath = '/api/MonitorAgent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMonitorAgentPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMonitorAgentPost$Plain$Response(params?: {
    body?: CreateMonitorAgentRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MonitorAgentDto>> {

    const rb = new RequestBuilder(this.rootUrl, MonitorAgentService.ApiMonitorAgentPostPath, 'post');
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
        return r as StrictHttpResponse<MonitorAgentDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMonitorAgentPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMonitorAgentPost$Plain(params?: {
    body?: CreateMonitorAgentRequest
  },
  context?: HttpContext

): Observable<MonitorAgentDto> {

    return this.apiMonitorAgentPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<MonitorAgentDto>) => r.body as MonitorAgentDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMonitorAgentPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMonitorAgentPost$Json$Response(params?: {
    body?: CreateMonitorAgentRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<MonitorAgentDto>> {

    const rb = new RequestBuilder(this.rootUrl, MonitorAgentService.ApiMonitorAgentPostPath, 'post');
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
        return r as StrictHttpResponse<MonitorAgentDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMonitorAgentPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMonitorAgentPost$Json(params?: {
    body?: CreateMonitorAgentRequest
  },
  context?: HttpContext

): Observable<MonitorAgentDto> {

    return this.apiMonitorAgentPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<MonitorAgentDto>) => r.body as MonitorAgentDto)
    );
  }

  /**
   * Path part for operation apiMonitorAgentIdGet
   */
  static readonly ApiMonitorAgentIdGetPath = '/api/MonitorAgent/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMonitorAgentIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMonitorAgentIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, MonitorAgentService.ApiMonitorAgentIdGetPath, 'get');
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
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMonitorAgentIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMonitorAgentIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.apiMonitorAgentIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMonitorAgentIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMonitorAgentIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, MonitorAgentService.ApiMonitorAgentIdGetPath, 'get');
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
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMonitorAgentIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMonitorAgentIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.apiMonitorAgentIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiMonitorAgentIdPut
   */
  static readonly ApiMonitorAgentIdPutPath = '/api/MonitorAgent/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMonitorAgentIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMonitorAgentIdPut$Response(params: {
    id: number;
    body?: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MonitorAgentService.ApiMonitorAgentIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiMonitorAgentIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMonitorAgentIdPut(params: {
    id: number;
    body?: string
  },
  context?: HttpContext

): Observable<void> {

    return this.apiMonitorAgentIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiMonitorAgentIdDelete
   */
  static readonly ApiMonitorAgentIdDeletePath = '/api/MonitorAgent/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMonitorAgentIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMonitorAgentIdDelete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MonitorAgentService.ApiMonitorAgentIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiMonitorAgentIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMonitorAgentIdDelete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiMonitorAgentIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
