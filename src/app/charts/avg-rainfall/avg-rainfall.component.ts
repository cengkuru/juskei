import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// Define Label and Color types
type Label = string;

@Component({
  selector: 'app-avg-rainfall',
  templateUrl: './avg-rainfall.component.html',
  styleUrls: ['./avg-rainfall.component.scss']
})
export class AvgRainfallComponent {
  public radarChartOptions: ChartOptions = {
    responsive: true,

  };
  public radarChartLabels: Label[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public radarChartData: ChartDataset[] = [
    { data: [20, 25, 22, 30, 26, 15, 18], label: 'Average Rainfall (mm)' }
  ];
  public radarChartType: ChartType = 'radar';
}
