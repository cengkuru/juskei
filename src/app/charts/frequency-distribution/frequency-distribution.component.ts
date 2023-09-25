import { Component } from '@angular/core';
import {ChartOptions, ChartType, ChartDataset, ChartData} from 'chart.js';

@Component({
  selector: 'app-frequency-distribution',
  templateUrl: './frequency-distribution.component.html',
  styleUrls: ['./frequency-distribution.component.scss']
})
export class FrequencyDistributionComponent {
  public polarAreaChartOptions: ChartOptions = {
    responsive: true,

  };


  public polarAreaChartLabels: string[] = ['0-10°C', '11-20°C', '21-30°C', '31-40°C', 'Above 40°C'];
  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: ['0-10°C', '11-20°C', '21-30°C', '31-40°C', 'Above 40°C'],
    datasets: [{
      data: [120, 150, 180, 90, 60],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)'
      ]
    }]
  };
  public polarAreaLegend = true;
  public polarAreaChartType: ChartType = 'polarArea';
}
