import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss'],
})
export class VisitComponent implements OnInit {
  title = 'google-maps';
  location = { lat: 8.986035203226894, lng: 38.73784226126028 };
  constructor() {}

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCCseUfKPCqLWApllfFAP1XUdOvv3VcG7M',
    });

    loader.load().then(() => {
      new google.maps.Map(document.getElementById('map')!, {
        center: this.location,
        zoom: 6,
      });

      const marker = new google.maps.Marker({
        position: this.location,
        map: new google.maps.Map(document.getElementById('map')!, {
          center: this.location,
          zoom: 6,
        }),
      });
    });
  }
}
