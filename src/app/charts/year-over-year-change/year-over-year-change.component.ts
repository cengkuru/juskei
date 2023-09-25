import {Component, OnInit} from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-year-over-year-change',
  templateUrl: './year-over-year-change.component.html',
  styleUrls: ['./year-over-year-change.component.scss']
})
export class YearOverYearChangeComponent implements OnInit{
  barChartData: ChartDataset[] = [
    { data: [-5, 3, 7], label: 'Year-over-Year Change (%)' }
  ];

  barChartLabels: string[] = ['2020-2021', '2021-2022', '2022-2023'];  // Using string[] instead of Label

  ngOnInit(): void {
    this.setChartColors();
  }
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        min: -10
      }
    }
  };

  barChartColors: any[] = []; // Initialize as an empty array
  setChartColors(): void {
    this.barChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(255, 0, 0, 0.3)'
      }
    ];
  }

  barChartLegend = true;
  barChartType: 'bar' = 'bar';
  barChartPlugins = [];
}
