import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  images: string[] = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4.jpg'
  ];



}
