import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {BaThemeConfigProvider} from '../../theme';

@Injectable()
export class ProductDummyService {
  constructor(private _baConfig: BaThemeConfigProvider) { }

  getProductSimpleLineChart(product: Product): any {
    let _data = {
      simpleLineOptions: {
        color: this._baConfig.get().colors.defaultText,
        fullWidth: true,
        height: '300px',
        chartPadding: {
          right: 40
        }
      },
      simpleLineData: {
        labels: product.builds.map(build => build.version),
        series: [
        //  product.builds.map(build => build.run_count),
          product.builds.map(build => build.pass_rate)
        ]
      }
    };
    return _data;
  }

  public getResponsive(padding, offset) {
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }]
    ];
  }

  getProductSimpleDonutChart(product: Product): any {
    let run_count: number = product.builds.filter(build => build.run_count > 0).length;
    let _data = {
      simpleDonutData: {
        labels: ['Builds with run record', 'Builds without run record'],
        series: [run_count, product.builds.length - run_count]
      },
      simpleDonutOptions: {
        fullWidth: true,
        donut: true,
        height: '300px',
        weight: '300px',
        labelDirection: 'explode',
        labelInterpolationFnc: function(value) {
          return value;
        }
      }
    };
    return _data;
  }

  getProduct(id: string): any {
    const data = {
      'product': {
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
              'version': '1.1.1.1',
              'run_count': 5,
              'pass_rate': 0.91
            },
            {
              'id': '02',
              'version': '1.1.1.2',
              'run_count': 4,
              'pass_rate': 0.91
            },
            {
              'id': '03',
              'version': '1.1.1.3',
              'run_count': 0,
              'pass_rate': 0.92
            },
            {
              'id': '04',
              'version': '1.1.1.4',
              'run_count': 0,
              'pass_rate': 0.93
            },
            {
              'id': '05',
              'version': '1.1.1.5',
              'run_count': 6,
              'pass_rate': 0.94
            },
            {
              'id': '06',
              'version': '1.1.1.6',
              'run_count': 7,
              'pass_rate': 0.95
            },
            {
              'id': '07',
              'version': '1.1.1.7',
              'run_count': 4,
              'pass_rate': 0.94
            },
            {
              'id': '08',
              'version': '1.1.1.8',
              'run_count': 8,
              'pass_rate': 0.97
            }
          ]
        },
        {
          'id': 2,
          'name': 'Welcome to the Protractor',
          'builds': [
            {
              'id': '01',
              'version': '1.1.2.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.2.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 3,
          'name': 'The menu lists',
          'builds': [
            {
              'id': '01',
              'version': '1.1.3.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.3.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 4,
          'name': 'Note that Protractor',
          'builds': [
            {
              'id': '01',
              'version': '1.1.4.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.4.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 5,
          'name': 'Webdriver bindings',
          'builds': [
            {
              'id': '01',
              'version': '1.1.5.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.5.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 6,
          'name': 'If set to false',
          'builds': [
            {
              'id': '01',
              'version': '1.1.6.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.6.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 7,
          'name': 'Protractor will not wait',
          'builds': [
            {
              'id': '01',
              'version': '1.1.7.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.7.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 8,
          'name': 'Angular $http and $timeout',
          'builds': [
            {
              'id': '01',
              'version': '1.1.8.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.8.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 9,
          'name': 'API with $timeout.',
          'builds': [
            {
              'id': '01',
              'version': '1.1.9.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.9.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 10,
          'name': 'Call waitForAngularEnabled',
          'builds': [
            {
              'id': '01',
              'version': '1.1.10.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.10.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 11,
          'name': 'Get the processed configuration object',
          'builds': [
            {
              'id': '01',
              'version': '1.1.11.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.11.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 12,
          'name': 'This will contain the specs and capabilities ',
          'builds': [
            {
              'id': '01',
              'version': '1.1.12.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.12.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 13,
          'name': 'Set by the runner.',
          'builds': [
            {
              'id': '01',
              'version': '1.1.13.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.13.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 14,
          'name': 'A promise which resolves to the capabilities object.',
          'builds': [
            {
              'id': '01',
              'version': '1.1.14.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.14.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 15,
          'name': 'Waits for Angular to finish',
          'builds': [
            {
              'id': '01',
              'version': '1.1.15.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.15.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 16,
          'name': 'Makes a full reload',
          'builds': [
            {
              'id': '01',
              'version': '1.1.16.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.16.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 17,
          'name': 'Remove a registered mock module.',
          'builds': [
            {
              'id': '01',
              'version': '1.1.17.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.17.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 18,
          'name': 'See browser.explore().',
          'builds': [
            {
              'id': '01',
              'version': '1.1.18.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.18.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 19,
          'name': 'Creates a sequence of user',
          'builds': [
            {
              'id': '01',
              'version': '1.1.19.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.19.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 20,
          'name': 'See the selenium webdriver',
          'builds': [
            {
              'id': '01',
              'version': '1.1.20.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.20.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 21,
          'name': 'Mouse actions do not work',
          'builds': [
            {
              'id': '01',
              'version': '1.1.21.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.21.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 22,
          'name': 'Chrome with the HTML5 Drag and Drop API',
          'builds': [
            {
              'id': '01',
              'version': '1.1.22.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.22.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 23,
          'name': 'Dragging one element to another.',
          'builds': [
            {
              'id': '01',
              'version': '1.1.23.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.23.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 24,
          'name': 'You can also use the `dragAndDrop` convenience action.',
          'builds': [
            {
              'id': '01',
              'version': '1.1.24.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.24.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 25,
          'name': 'Instead of specifying an element as the target',
          'builds': [
            {
              'id': '01',
              'version': '1.1.25.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.25.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 26,
          'name': 'This example double-clicks slightly to the right of an element.',
          'builds': [
            {
              'id': '01',
              'version': '1.1.26.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.26.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 27,
          'name': 'Schedules a command to execute JavaScript',
          'builds': [
            {
              'id': '01',
              'version': '1.1.27.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.27.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 28,
          'name': 'Any arguments provided in addition to the script',
          'builds': [
            {
              'id': '01',
              'version': '1.1.28.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.28.2',
              'run_count': 5,
              'pass_rate': 0.98
            }
          ]
        },
        {
          'id': 29,
          'name': 'The script may refer to any variables accessible from the current window.',
          'builds': [
            {
              'id': '01',
              'version': '1.1.29.1',
              'run_count': 5,
              'pass_rate': 0.98
            },
            {
              'id': '02',
              'version': '1.1.29.2',
              'run_count': 5,
              'pass_rate': 0.98
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
