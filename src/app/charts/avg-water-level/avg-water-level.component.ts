import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

// Define Label and Color types
type Label = string;

interface Color {
  borderColor: string;
  backgroundColor: string;
}

@Component({
  selector: 'app-avg-water-level',
  templateUrl: './avg-water-level.component.html',
  styleUrls: ['./avg-water-level.component.scss']
})
export class AvgWaterLevelComponent {
  lineChartData: ChartDataset[] = [
    {
      data: [12.4, 11.8],
      label: 'Average Water Level (m)',
      borderColor: 'black',
      backgroundColor: 'rgba(0, 123, 255, 0.3)'
    }
  ];


  lineChartLabels: Label[] = ['2021', '2022'];

  lineChartOptions: ChartOptions = {
    responsive: true,
  };



  lineChartLegend = true;
  lineChartType: string = 'line';
  lineChartPlugins = [];
}
