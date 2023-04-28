<!-- standalone app -->
<!-- ng generate component component-name --standalone -->

<!-- <html>
  <head>
    <title>My app</title>
  </head>
  <body>
    <my-app>Loading...</my-app>
  </body>
</html>

import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
  `,
  styles: [`h1 {color:red}`],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App); -->
