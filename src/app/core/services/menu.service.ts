import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable()
export class MenuService {
  inc: number = 0;

  constructor() {
  }

  generateMenu(products: any[]): Routes {
    return products.map(product => {
     return  {
        path: `/api/products/${product.id}`,
          data: {
            menu: {
              title: `${product.name}`,
              icon: 'ion-android-home',
              selected: false,
              expanded: false,
              order: this.generateOrder()
            }
          },
          children: this.generateSubMenu(product.builds)
      };
	});
  }

	generateSubMenu(builds: any): any[] {
      return builds.map(build => {
       return  {
          path: `/api/builds/${build.id}`,
          data: {
          menu: {
            title: `${build.version}`,
          }
          }
        }
	  });

	}

	generateOrder(): number {
	  this.inc += 10;
	  return this.inc;
	}

}
