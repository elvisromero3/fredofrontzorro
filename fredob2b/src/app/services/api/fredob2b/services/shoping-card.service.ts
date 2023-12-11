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

import { CategoryDto } from '../models/category-dto';
import { ProductDto } from '../models/product-dto';
import { ShopingCardAddViewModel } from '../models/shoping-card-add-view-model';
import { ShopingCardDetailDto } from '../models/shoping-card-detail-dto';
import { ShopingCardSummaryDto } from '../models/shoping-card-summary-dto';

@Injectable({
  providedIn: 'root',
})
export class ShopingCardService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiShopingCardCategoriesGet
   */
  static readonly ApiShopingCardCategoriesGetPath = '/api/ShopingCard/Categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardCategoriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardCategoriesGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CategoryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardCategoriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardCategoriesGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<CategoryDto>> {

    return this.apiShopingCardCategoriesGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>) => r.body as Array<CategoryDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardCategoriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardCategoriesGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<CategoryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardCategoriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardCategoriesGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<CategoryDto>> {

    return this.apiShopingCardCategoriesGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>) => r.body as Array<CategoryDto>)
    );
  }

  /**
   * Path part for operation apiShopingCardProductByCategoryIdIdGet
   */
  static readonly ApiShopingCardProductByCategoryIdIdGetPath = '/api/ShopingCard/ProductByCategoryId/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardProductByCategoryIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByCategoryIdIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ProductDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardProductByCategoryIdIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<ProductDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardProductByCategoryIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByCategoryIdIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<ProductDto>> {

    return this.apiShopingCardProductByCategoryIdIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ProductDto>>) => r.body as Array<ProductDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardProductByCategoryIdIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByCategoryIdIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ProductDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardProductByCategoryIdIdGetPath, 'get');
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
        return r as StrictHttpResponse<Array<ProductDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardProductByCategoryIdIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByCategoryIdIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Array<ProductDto>> {

    return this.apiShopingCardProductByCategoryIdIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ProductDto>>) => r.body as Array<ProductDto>)
    );
  }

  /**
   * Path part for operation apiShopingCardProductByNameNameGet
   */
  static readonly ApiShopingCardProductByNameNameGetPath = '/api/ShopingCard/ProductByName/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardProductByNameNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByNameNameGet$Plain$Response(params: {
    name: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ProductDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardProductByNameNameGetPath, 'get');
    if (params) {
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardProductByNameNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByNameNameGet$Plain(params: {
    name: string;
  },
  context?: HttpContext

): Observable<Array<ProductDto>> {

    return this.apiShopingCardProductByNameNameGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ProductDto>>) => r.body as Array<ProductDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardProductByNameNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByNameNameGet$Json$Response(params: {
    name: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ProductDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardProductByNameNameGetPath, 'get');
    if (params) {
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardProductByNameNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByNameNameGet$Json(params: {
    name: string;
  },
  context?: HttpContext

): Observable<Array<ProductDto>> {

    return this.apiShopingCardProductByNameNameGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ProductDto>>) => r.body as Array<ProductDto>)
    );
  }

  /**
   * Path part for operation apiShopingCardGet
   */
  static readonly ApiShopingCardGetPath = '/api/ShopingCard';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ShopingCardSummaryDto>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShopingCardSummaryDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<ShopingCardSummaryDto> {

    return this.apiShopingCardGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ShopingCardSummaryDto>) => r.body as ShopingCardSummaryDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ShopingCardSummaryDto>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShopingCardSummaryDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardGet$Json(params?: {
  },
  context?: HttpContext

): Observable<ShopingCardSummaryDto> {

    return this.apiShopingCardGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ShopingCardSummaryDto>) => r.body as ShopingCardSummaryDto)
    );
  }

  /**
   * Path part for operation apiShopingCardPost
   */
  static readonly ApiShopingCardPostPath = '/api/ShopingCard';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiShopingCardPost$Plain$Response(params?: {
    body?: ShopingCardAddViewModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ShopingCardDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardPostPath, 'post');
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
        return r as StrictHttpResponse<ShopingCardDetailDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiShopingCardPost$Plain(params?: {
    body?: ShopingCardAddViewModel
  },
  context?: HttpContext

): Observable<ShopingCardDetailDto> {

    return this.apiShopingCardPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ShopingCardDetailDto>) => r.body as ShopingCardDetailDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiShopingCardPost$Json$Response(params?: {
    body?: ShopingCardAddViewModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ShopingCardDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardPostPath, 'post');
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
        return r as StrictHttpResponse<ShopingCardDetailDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiShopingCardPost$Json(params?: {
    body?: ShopingCardAddViewModel
  },
  context?: HttpContext

): Observable<ShopingCardDetailDto> {

    return this.apiShopingCardPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ShopingCardDetailDto>) => r.body as ShopingCardDetailDto)
    );
  }

  /**
   * Path part for operation apiShopingCardProductByIdIdGet
   */
  static readonly ApiShopingCardProductByIdIdGetPath = '/api/ShopingCard/ProductById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardProductByIdIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByIdIdGet$Plain$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductDto>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardProductByIdIdGetPath, 'get');
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
        return r as StrictHttpResponse<ProductDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardProductByIdIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByIdIdGet$Plain(params: {
    id: number;
  },
  context?: HttpContext

): Observable<ProductDto> {

    return this.apiShopingCardProductByIdIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductDto>) => r.body as ProductDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardProductByIdIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByIdIdGet$Json$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductDto>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardProductByIdIdGetPath, 'get');
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
        return r as StrictHttpResponse<ProductDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiShopingCardProductByIdIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardProductByIdIdGet$Json(params: {
    id: number;
  },
  context?: HttpContext

): Observable<ProductDto> {

    return this.apiShopingCardProductByIdIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductDto>) => r.body as ProductDto)
    );
  }

  /**
   * Path part for operation apiShopingCardIdPut
   */
  static readonly ApiShopingCardIdPutPath = '/api/ShopingCard/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiShopingCardIdPut$Response(params: {
    id: number;
    body?: string
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiShopingCardIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiShopingCardIdPut(params: {
    id: number;
    body?: string
  },
  context?: HttpContext

): Observable<void> {

    return this.apiShopingCardIdPut$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiShopingCardIdDelete
   */
  static readonly ApiShopingCardIdDeletePath = '/api/ShopingCard/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiShopingCardIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardIdDelete$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ShopingCardService.ApiShopingCardIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiShopingCardIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiShopingCardIdDelete(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.apiShopingCardIdDelete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
