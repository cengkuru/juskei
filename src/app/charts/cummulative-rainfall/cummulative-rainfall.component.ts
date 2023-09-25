import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
// Define Label and Color types
type Label = string;

@Component({
  selector: 'app-cummulative-rainfall',
  templateUrl: './cummulative-rainfall.component.html',
  styleUrls: ['./cummulative-rainfall.component.scss']
})
export class CummulativeRainfallComponent {
  public doughnutChartOptions: ChartOptions = {
    responsive: true,

  };

  public doughnutChartLabels: string[] = ['Light', 'Moderate', 'Heavy'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Light', 'Moderate', 'Heavy'],
    datasets: [ {
      data: [50, 35, 180],
      backgroundColor: [
        'rgb(54, 162, 235)',
        'rgb(255, 99, 132)',
        'rgb(255, 205, 86)'
      ]
    } ]
  };
  public doughnutChartType: ChartType = 'doughnut';
}
