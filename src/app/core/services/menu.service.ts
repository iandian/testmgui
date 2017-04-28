import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';

@Injectable()
export class MenuService {
  inc: number = 0;

  constructor() {
  }

  generateMenu(products: any[]): Routes {
     return  [
       {
         path: 'pages',
         children: this.generateSubMenu(products)
       }
    ]
  }

  generateSubMenu(products: any): any[] {
    return products.map(product => {
     return  {
        path: `products/${product.id}`,
          data: {
            menu: {
              title: `${product.name}`,
              icon: 'ion-android-home',
              selected: false,
              expanded: false,
              order: this.generateOrder()
            }
          },
          children: this.generateSub2Menu(product.builds)
      };
	});
	}

	generateSub2Menu(builds: any): any[] {
      return builds.map(build => {
       return  {
          path: `builds/${build.id}`,
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
