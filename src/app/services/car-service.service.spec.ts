import { 
  TestBed, 
  inject,
  fakeAsync,
  tick } from '@angular/core/testing';

import { MockBackend } from '@angular/http/testing';

import { 
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions } from '@angular/http';

  import { CarService } from './car-service.service';

describe('CarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: 
      [ 
        BaseRequestOptions, 
        MockBackend, 
        CarService,
        { provide: Http,
          useFactory: (
            backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions ) => {
              return new Http(backend , defaultOptions);
            }, deps : [ MockBackend, BaseRequestOptions ] 
        }
      ]
    });
  });

  it('should be created', inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));
});
