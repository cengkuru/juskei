import { Component } from '@angular/core';
import { ChartOptions, ChartType, ScatterDataPoint } from 'chart.js';
import 'chartjs-adapter-date-fns';  // Add this line

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.scss']
})
export class ScatterPlotComponent {
  public scatterChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        position: 'bottom'
      }
    },

    plugins: {

    }
  };

  public scatterChartData: { data: ScatterDataPoint[], label: string, backgroundColor: string[], borderColor: string[] }[] = [
    {
      data: [
        { x: new Date('2023-01-01').getTime(), y: 10 },
        { x: new Date('2023-02-01').getTime(), y: 15 },
      ],
      label: 'Site 1',
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(255,0,0,0.5)'],
      borderColor: ['red', 'darkred']
    },
    {
      data: [
        { x: new Date('2023-01-01').getTime(), y: 8 },
        { x: new Date('2023-02-01').getTime(), y: 12 },
      ],
      label: 'Site 2',
      backgroundColor: ['rgba(0,0,255,0.3)', 'rgba(0,0,255,0.5)'],
      borderColor: ['blue', 'darkblue']
    },
  ];

  public scatterChartType: ChartType = 'scatter';
}
