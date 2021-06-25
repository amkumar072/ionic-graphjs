import { Component } from '@angular/core';
import * as grapesjs from 'grapesjs';
import 'grapesjs-preset-newsletter';
import 'grapesjs-preset-webpage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    const editor = grapesjs.init({
      container: '#gjs',
      plugins: ['gjs-preset-newsletter', 'grapesjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-newsletter': {
          modalTitleImport: 'Import template',
          // ... other options
        },
        'grapesjs-preset-webpage': {

        }
      }
    });
  }
}
