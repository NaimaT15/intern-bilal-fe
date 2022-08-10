import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss'],
})
export class VisitComponent implements OnInit {
  title = 'Out Location';
  center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

  constructor() {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCCseUfKPCqLWApllfFAP1XUdOvv3VcG7M',
    });
    loader.load().then(() => {
      new google.maps.Map(document.getElementById('map')!, {
        center: { lat: 51.233334, lng: 6.783333 },
        zoom: 6,
      });
    });
  }
}
