import { Component, OnInit } from '@angular/core';
import {icon, latLng, Layer, marker, tileLayer} from 'leaflet';

@Component({
  selector: 'app-geo-chart',
  templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.scss']
})
export class GeoChartComponent implements OnInit {
  // Define layers for the map
  layers: Layer[] = [];

  // Basic map options
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  // Sample high-risk geosites
  highRiskGeosites = [
    { lat: -33.918861, lon: 18.423300, riskLevel: 'high' },   // Coordinate for Cape Town City Center
    { lat: -33.925839, lon: 18.423218, riskLevel: 'medium' }, // Coordinate for Green Point
    { lat: -33.934570, lon: 18.417650, riskLevel: 'low' }     // Coordinate for Tamboerskloof
  ];


  ngOnInit() {
    // Populate the layers array with markers for each high-risk geosite
    this.highRiskGeosites.forEach(site => {
      const newMarker = marker([ site.lat, site.lon ], {
        icon: this.getIconByRiskLevel(site.riskLevel)
      });

      this.layers.push(newMarker);
    });
  }

  getIconByRiskLevel(riskLevel: string) {
    const iconUrl = riskLevel === 'high' ? 'red-icon.png' :
      riskLevel === 'medium' ? 'orange-icon.png' :
        'green-icon.png';

    return icon({ // Replace 'L.icon' with 'icon'
      iconUrl: iconUrl,
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      popupAnchor: [0, -41]
    });
  }
}
