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
          'name': 'Ruby on Rails Tote',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.1.1'
			},
		    {
			  'id': '02',
              'version': '1.1.1.2'
			}
		  ]
        },
        {
          'id': 2,
          'name': 'Welcome to the Protractor',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.2.1'
			},
		    {
			  'id': '02',
              'version': '1.1.2.2'
			}
		  ]
        },
        {
          'id': 3,
          'name': 'The menu lists',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.3.1'
			},
		    {
			  'id': '02',
              'version': '1.1.3.2'
			}
		  ]
        },
        {
          'id': 4,
          'name': 'Note that Protractor',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.4.1'
			},
		    {
			  'id': '02',
              'version': '1.1.4.2'
			}
		  ]
        },
        {
          'id': 5,
          'name': 'Webdriver bindings',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.5.1'
			},
		    {
			  'id': '02',
              'version': '1.1.5.2'
			}
		  ]
        },
        {
          'id': 6,
          'name': 'If set to false',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.6.1'
			},
		    {
			  'id': '02',
              'version': '1.1.6.2'
			}
		  ]
        },
        {
          'id': 7,
          'name': 'Protractor will not wait',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.7.1'
			},
		    {
			  'id': '02',
              'version': '1.1.7.2'
			}
		  ]
        },
        {
          'id': 8,
          'name': 'Angular $http and $timeout',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.8.1'
			},
		    {
			  'id': '02',
              'version': '1.1.8.2'
			}
		  ]
        },
        {
          'id': 9,
          'name': 'API with $timeout.',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.9.1'
			},
		    {
			  'id': '02',
              'version': '1.1.9.2'
			}
		  ]
        },
        {
          'id': 10,
          'name': 'Call waitForAngularEnabled',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.10.1'
			},
		    {
			  'id': '02',
              'version': '1.1.10.2'
			}
		  ]
        },
        {
          'id': 11,
          'name': 'Get the processed configuration object',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.11.1'
			},
		    {
			  'id': '02',
              'version': '1.1.11.2'
			}
		  ]
        },
        {
          'id': 12,
          'name': 'This will contain the specs and capabilities ',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.12.1'
			},
		    {
			  'id': '02',
              'version': '1.1.12.2'
			}
		  ]
        },
        {
          'id': 13,
          'name': 'Set by the runner.',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.13.1'
			},
		    {
			  'id': '02',
              'version': '1.1.13.2'
			}
		  ]
        },
        {
          'id': 14,
          'name': 'A promise which resolves to the capabilities object.',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.14.1'
			},
		    {
			  'id': '02',
              'version': '1.1.14.2'
			}
		  ]
        },
        {
          'id': 15,
          'name': 'Waits for Angular to finish',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.15.1'
			},
		    {
			  'id': '02',
              'version': '1.1.15.2'
			}
		  ]
        },
        {
          'id': 16,
          'name': 'Makes a full reload',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.16.1'
			},
		    {
			  'id': '02',
              'version': '1.1.16.2'
			}
		  ]
        },
        {
          'id': 17,
          'name': 'Remove a registered mock module.',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.17.1'
			},
		    {
			  'id': '02',
              'version': '1.1.17.2'
			}
		  ]
        },
        {
          'id': 18,
          'name': 'See browser.explore().',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.18.1'
			},
		    {
			  'id': '02',
              'version': '1.1.18.2'
			}
		  ]
        },
        {
          'id': 19,
          'name': 'Creates a sequence of user',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.19.1'
			},
		    {
			  'id': '02',
              'version': '1.1.19.2'
			}
		  ]
        },
        {
          'id': 20,
          'name': 'See the selenium webdriver',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.20.1'
			},
		    {
			  'id': '02',
              'version': '1.1.20.2'
			}
		  ]
        },
        {
          'id': 21,
          'name': 'Mouse actions do not work',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.21.1'
			},
		    {
			  'id': '02',
              'version': '1.1.21.2'
			}
		  ]
        },
        {
          'id': 22,
          'name': 'Chrome with the HTML5 Drag and Drop API',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.22.1'
			},
		    {
			  'id': '02',
              'version': '1.1.22.2'
			}
		  ]
        },
        {
          'id': 23,
          'name': 'Dragging one element to another.',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.23.1'
			},
		    {
			  'id': '02',
              'version': '1.1.23.2'
			}
		  ]
        },
        {
          'id': 24,
          'name': 'You can also use the `dragAndDrop` convenience action.',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.24.1'
			},
		    {
			  'id': '02',
              'version': '1.1.24.2'
			}
		  ]
        },
        {
          'id': 25,
          'name': 'Instead of specifying an element as the target',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.25.1'
			},
		    {
			  'id': '02',
              'version': '1.1.25.2'
			}
		  ]
        },
        {
          'id': 26,
          'name': 'This example double-clicks slightly to the right of an element.',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.26.1'
			},
		    {
			  'id': '02',
              'version': '1.1.26.2'
			}
		  ]
        },
        {
          'id': 27,
          'name': 'Schedules a command to execute JavaScript',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.27.1'
			},
		    {
			  'id': '02',
              'version': '1.1.27.2'
			}
		  ]
        },
        {
          'id': 28,
          'name': 'Any arguments provided in addition to the script',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.28.1'
			},
		    {
			  'id': '02',
              'version': '1.1.28.2'
			}
		  ]
        },
        {
          'id': 29,
          'name': 'The script may refer to any variables accessible from the current window.',
		  'builds': [
		    {
			  'id': '01',
              'version': '1.1.29.1'
			},
		    {
			  'id': '02',
              'version': '1.1.29.2'
			}
		  ]
        }
		],
      'count': 16,
      'current_page': 1,
      'pages': 1
    };

    return Observable.of(data);
  }
}
