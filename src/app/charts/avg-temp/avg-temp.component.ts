import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartData, Scale } from 'chart.js';

@Component({
  selector: 'app-avg-temp',
  templateUrl: './avg-temp.component.html',
  styleUrls: ['./avg-temp.component.scss']
})
export class AvgTempComponent {

  // Sample data
  readonly months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  readonly temps = [15, 17, 20, 23, 27, 30, 33, 32, 28, 23, 18, 15];

  // Bar chart options
  public barChartOptions: ChartOptions = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Bar chart data
  public barChartData: ChartData<'bar'> = {
    labels: this.months,
    datasets: [
      {
        data: this.temps,
        label: 'Temperature (C)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };

  // Bar chart type
  public barChartType: ChartType = 'bar';

}
