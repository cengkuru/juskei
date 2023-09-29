import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-temperature-table',
  templateUrl: './temperature-table.component.html',
  styleUrls: ['./temperature-table.component.scss']
})
export class TemperatureTableComponent implements OnInit {
  temperatureRecords = [
    { station: 'Station A', year: '2018', highestTemp: '35.4', lowestTemp: '5.2' },
    { station: 'Station A', year: '2019', highestTemp: '34.2', lowestTemp: '6.3' },
    { station: 'Station A', year: '2020', highestTemp: '33.8', lowestTemp: '5.8' },
    { station: 'Station B', year: '2018', highestTemp: '36.4', lowestTemp: '4.2' },
    { station: 'Station B', year: '2019', highestTemp: '35.2', lowestTemp: '5.3' },
    { station: 'Station B', year: '2020', highestTemp: '34.8', lowestTemp: '4.8' },
    // ... add more data as needed
  ];

  constructor() { }

  ngOnInit(): void {
    // Add any initialization logic or data fetching here
  }
}
