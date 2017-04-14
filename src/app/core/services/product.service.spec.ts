import { TestBed, inject } from '@angular/core/testing';
import { 
  Http, 
  BaseRequestOptions, 
  Response, 
  ResponseOptions, 
  RequestMethod, 
  RequestOptions,
  RequestOptionsArgs,
  Headers,
  Request,
  ConnectionBackend 
  } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpService } from './http';
import { ProductService } from './product.service';

describe('Service: Product', () => {
  let service: ProductService = null;
  let backend: MockBackend = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: HttpService,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new HttpService(backendInstance, defaultOptions);
          },
          deps: [ MockBackend, BaseRequestOptions ]
        },
        ProductService
      ]
    });
  });

  beforeEach(inject([ProductService, MockBackend], (productService: ProductService, mockBackend: MockBackend) => {
    service = productService;
    backend = mockBackend;
  }));

  const data = {
    'id': '9584',
    'name': 'John Smith'
  };

  const products = {
    products: [
      {id: '12345', name: 'Title'},
      {id: '67890', name: 'Another Title'}
    ]
  };

  const queryID = '9584';

  it('should call the products api and return all products', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({
        body: JSON.stringify(products)
      });
      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.url).toEqual(`http://10.98.26.172:3000/api/products`);
    });

    service
      .getProducts()
      .subscribe((res) => {
        expect(res).toEqual(products);
        done();
      });
  });

  it('should retrieve the product from the product Id', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({
        body: JSON.stringify(data)
      });
      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.url).toEqual(`http://10.98.26.172:3000/api/dashboard/products/${queryID}`);
    });
    service
      .getProduct(queryID)
      .subscribe((response) => {
        expect(response).toEqual(data);
        done();
      });
  });

});
