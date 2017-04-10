import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductDummyService {
  constructor() { }

  getProduct(id: string): any {
     const data = {
         'product':  {
         'id': 1,
         'name': 'Ruby on Rails Tote'
       }
     };
     return Observable.of(data);
  }

  getProducts(): any {
    console.log('in dummy service.');

    const data = {
      'products': [
        {
          'id': 1,
          'name': 'Ruby on Rails Tote'
        },
        {
          'id': 2,
          'name': 'Welcome to the Protractor'
        },
        {
          'id': 3,
          'name': 'The menu lists'
        },
        {
          'id': 4,
          'name': 'Note that Protractor'
        },
        {
          'id': 5,
          'name': 'Webdriver bindings'
        },
        {
          'id': 6,
          'name': 'If set to false'
        },
        {
          'id': 7,
          'name': 'Protractor will not wait'
        },
        {
          'id': 8,
          'name': 'Angular $http and $timeout'
        },
        {
          'id': 9,
          'name': 'API with $timeout.'
        },
        {
          'id': 10,
          'name': 'Call waitForAngularEnabled'
        },
        {
          'id': 11,
          'name': 'Get the processed configuration object'
        },
        {
          'id': 12,
          'name': 'This will contain the specs and capabilities '
        },
        {
          'id': 13,
          'name': 'Set by the runner.'
        },
        {
          'id': 14,
          'name': 'A promise which resolves to the capabilities object.'
        },
        {
          'id': 15,
          'name': 'Waits for Angular to finish'
        },
        {
          'id': 16,
          'name': 'Makes a full reload'
        },
        {
          'id': 17,
          'name': 'Remove a registered mock module.'
        },
        {
          'id': 18,
          'name': 'See browser.explore().'
        },
        {
          'id': 19,
          'name': 'Creates a sequence of user'
        },
        {
          'id': 20,
          'name': 'See the selenium webdriver'
        },
        {
          'id': 21,
          'name': 'Mouse actions do not work'
        },
        {
          'id': 22,
          'name': 'Chrome with the HTML5 Drag and Drop API'
        },
        {
          'id': 23,
          'name': 'Dragging one element to another.'
        },
        {
          'id': 24,
          'name': 'You can also use the `dragAndDrop` convenience action.'
        },
        {
          'id': 25,
          'name': 'Instead of specifying an element as the target'
        },
        {
          'id': 26,
          'name': 'This example double-clicks slightly to the right of an element.'
        },
        {
          'id': 27,
          'name': 'Schedules a command to execute JavaScript'
        },
        {
          'id': 28,
          'name': 'Any arguments provided in addition to the script'
        },
        {
          'id': 29,
          'name': 'The script may refer to any variables accessible from the current window.'
        }
		],
      'count': 16,
      'current_page': 1,
      'pages': 1
    };

    return Observable.of(data);
  }
}
