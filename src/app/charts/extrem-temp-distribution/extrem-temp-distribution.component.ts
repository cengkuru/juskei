import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-extrem-temp-distribution',
  templateUrl: './extrem-temp-distribution.component.html',
  styleUrls: ['./extrem-temp-distribution.component.scss']
})
export class ExtremTempDistributionComponent {
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Below 10°C', 'Above 30°C', '10°C - 30°C'],
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

  constructor() { }

}
