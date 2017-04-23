import { TestBed, inject } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { MenuService } from './menu.service';
import {} from 'jasmine';

describe('Service: Generate Menu', () => {
  let service: MenuService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MenuService
      ]
    });
  });

  beforeEach(inject([MenuService], (menuService: MenuService) => {
    service = menuService;
  }));

  const products = {
    products: [
      {id: '12345', name: 'Title', builds: [ {id: '3333', version: '1.1.1.1', run_count: 5, pass_rate: 0.98},{id: '4444', version: '1.1.1.2', run_count: 4, pass_rate: 0.97},{id: '5555', version: '1.1.1.3', run_count: 10, pass_rate: 0.99}]},
      {id: '67890', name: 'Another Title', builds: [ {id: '6666', version: '2.1.1.1', run_count: 11, pass_rate: 0.92},{id: '7777', version: '2.1.1.2', run_count: 15, pass_rate: 0.90},{id: '8888', version: '2.1.1.3', run_count: 5, pass_rate: 0.98}]},
    ]
  };


  it('should return menus', (done) => {
    let menus: Routes = service.generateMenu(products.products);
	  expect(menus.length).toEqual(2);
  });

});
