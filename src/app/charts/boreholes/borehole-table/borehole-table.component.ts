import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borehole-table',
  templateUrl: './borehole-table.component.html',
  styleUrls: ['./borehole-table.component.scss']
})
export class BoreholeTableComponent implements OnInit {
  boreholes = [
    { year: '2018', count: 34 },
    { year: '2019', count: 90 },
    { year: '2020', count: 50 },
    { year: '2021', count: 80 },
    // ... add more data as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
