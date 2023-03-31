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
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';

  constructor() {
    try {
      this.patch();
    } catch (err) {
      console.log('\n Angular patch XML exception.');
      // console.log(e.message);
        // Works! We can narrow 'err' from 'unknown' to 'Error'.
  if (err instanceof Error) {
    console.error(err.message);
  }
    } finally {
      console.log('\n Angular TypeScript patch XML constructor finally');
    }
  } // end constructor

  patch(): void {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Handle successful response
          console.log(xhr.responseText);
        } else {
          // Handle error response
          console.error('Error:', xhr.status);
        }
      }
    };

    const url = 'https://angular-d6n5ba.stackblitz.io/api/resource';
    const data:any = { foo: 'bar' };

    xhr.open('PATCH', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    const express = require('express');
    const app = express();

    app.patch('/data.xml', function (req:any, res:any) {
      // Set the Content-Type header to application/xml
      res.set('Content-Type', 'application/xml');

      // Create the XML data as a string
      const xmlData = `
    <?xml version="1.0" encoding="UTF-8"?>
    <data>
      <item>
        <name>Item 1</name>
        <price>10.00</price>
      </item>
      <item>
        <name>Item 2</name>
        <price>20.00</price>
      </item>
    </data>
  `;

      // Send the XML data as the response body
      res.send(xmlData);
    });

    app.listen(3000, function () {
      console.log('Server listening on port 3000');
    });
  } // end function patch
} // end class App

bootstrapApplication(App);
