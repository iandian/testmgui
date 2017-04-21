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
      {id: '12345', name: 'Title', builds: [ {id: '3333', version: '1.1.1.1'},{id: '4444', version: '1.1.1.2'},{id: '5555', version: '1.1.1.3'}]},
      {id: '67890', name: 'Another Title', builds: [ {id: '6666', version: '2.1.1.1'},{id: '7777', version: '2.1.1.2'},{id: '8888', version: '2.1.1.3'}]},
    ]
  };


  it('should return menus', (done) => {
    let menus: Routes = service.generateMenu(products.products);
	  expect(menus.length).toEqual(2);
  });

});
