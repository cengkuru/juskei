import { Component, OnInit, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-borehole-vs-rainfall',
  templateUrl: './borehole-vs-rainfall.component.html',
  styleUrls: ['./borehole-vs-rainfall.component.scss']
})
export class BoreholeVsRainfallComponent  implements OnInit {
  chartOptions: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const scatterPlot = echarts.init(this.elementRef.nativeElement.querySelector('#boreholeVsRain'));

    this.chartOptions = {
      color: ['#00679e'],
      tooltip: {
        trigger: 'item',
        formatter: 'Rainfall: {b0}<br/>Borehole Level: {c0}'
      },
      xAxis: {
        name: 'Rainfall',
        type: 'value'
      },
      yAxis: {
        name: 'Borehole Level',
        type: 'value'
      },
      series: [{
        symbolSize: 10,
        data: [[82, 34], [30, 90], [50, 50]],  // replace with your data
        type: 'scatter'
      }],
      responsive: true,
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      }
    };

    scatterPlot.setOption(this.chartOptions);
  }
}
