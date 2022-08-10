import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss'],
})
export class VisitComponent implements OnInit {
  title = 'Our Location';
  center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

  constructor() {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCCseUfKPCqLWApllfFAP1XUdOvv3VcG7M',
    });
    console.log('Hello');
    new google.maps.Map(document.getElementById('map')! as HTMLElement, {
      center: this.center,
      zoom: 6,
    });
  }
}
