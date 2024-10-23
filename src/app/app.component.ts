import { Component } from '@angular/core';

//this is the metadata, @component() decorator is a function that adds
//the metadata to a class.
@Component({
  selector: 'pm-root', //selector used to reference this component in any html
                       //the selector directive name is called "pm-root"
  templateUrl: './app.component.html', //view template
  styleUrls: ['./app.component.css']
})

//creating a class
export class AppComponent {

  //properties: property name, data type, default value
  pageTitle: string  = 'Angular: Getting Started from Scratch';
}
