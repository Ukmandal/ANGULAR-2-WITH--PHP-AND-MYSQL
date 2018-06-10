import { Component, QueryList, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  templateUrl: 'welcome.component.html',
  styles: [`
  .div {
      text-align: left;
  }
  .a {
    cursor:pointer;
  }
  `],
})
export class WelcomeComponent {

  fullImagePath1: string;
  fullImagePath2: string;
  fullImagePath3: string;
  fullImagePath4: string;

  constructor(
    private resolver: ComponentFactoryResolver,
  ) {
    this.fullImagePath1 = './assets/images/avatar-1.jpg';
    this.fullImagePath2 = './assets/images/avatar-8.jpg';
    this.fullImagePath3 = './assets/images/avatar-3.jpg';
    this.fullImagePath4 = './assets/images/avatar-2.jpg';
  }
}
