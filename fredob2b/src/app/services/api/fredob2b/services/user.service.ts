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

import { LoginViewModel } from '../models/login-view-model';
import { RegisterUserViewModel } from '../models/register-user-view-model';
import { ResponseModel } from '../models/response-model';
import { RoleViewModel } from '../models/role-view-model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserRegisterUserPost
   */
  static readonly ApiUserRegisterUserPostPath = '/api/User/RegisterUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRegisterUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterUserPost$Plain$Response(params?: {
    body?: RegisterUserViewModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRegisterUserPostPath, 'post');
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
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRegisterUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterUserPost$Plain(params?: {
    body?: RegisterUserViewModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiUserRegisterUserPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserRegisterUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterUserPost$Json$Response(params?: {
    body?: RegisterUserViewModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserRegisterUserPostPath, 'post');
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
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserRegisterUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserRegisterUserPost$Json(params?: {
    body?: RegisterUserViewModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiUserRegisterUserPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiUserGetAllUserGet
   */
  static readonly ApiUserGetAllUserGetPath = '/api/User/GetAllUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetAllUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllUserGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetAllUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetAllUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllUserGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiUserGetAllUserGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetAllUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllUserGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetAllUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetAllUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetAllUserGet$Json(params?: {
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiUserGetAllUserGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiUserAddRolePost
   */
  static readonly ApiUserAddRolePostPath = '/api/User/AddRole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAddRolePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAddRolePost$Plain$Response(params?: {
    body?: RoleViewModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAddRolePostPath, 'post');
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
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAddRolePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAddRolePost$Plain(params?: {
    body?: RoleViewModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiUserAddRolePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAddRolePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAddRolePost$Json$Response(params?: {
    body?: RoleViewModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAddRolePostPath, 'post');
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
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAddRolePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAddRolePost$Json(params?: {
    body?: RoleViewModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiUserAddRolePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiUserGetRolesGet
   */
  static readonly ApiUserGetRolesGetPath = '/api/User/GetRoles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetRolesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetRolesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetRolesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetRolesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetRolesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiUserGetRolesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetRolesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetRolesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetRolesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserGetRolesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetRolesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiUserGetRolesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * Path part for operation apiUserLoginPost
   */
  static readonly ApiUserLoginPostPath = '/api/User/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Plain$Response(params?: {
    body?: LoginViewModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLoginPostPath, 'post');
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
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Plain(params?: {
    body?: LoginViewModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiUserLoginPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Json$Response(params?: {
    body?: LoginViewModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLoginPostPath, 'post');
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
        return r as StrictHttpResponse<ResponseModel>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserLoginPost$Json(params?: {
    body?: LoginViewModel
  },
  context?: HttpContext

): Observable<ResponseModel> {

    return this.apiUserLoginPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseModel>) => r.body as ResponseModel)
    );
  }

}
