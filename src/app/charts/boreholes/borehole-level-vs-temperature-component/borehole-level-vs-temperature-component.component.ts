import { Component, OnInit, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-borehole-level-vs-temperature-component',
  templateUrl: './borehole-level-vs-temperature-component.component.html',
  styleUrls: ['./borehole-level-vs-temperature-component.component.scss']
})
export class BoreholeLevelVsTemperatureComponentComponent implements OnInit {
  chartOptions: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const myChart = echarts.init(this.elementRef.nativeElement.querySelector('#boreholeVsTemperature'));

    this.chartOptions = {
      title: {
        text: 'Borehole Levels vs Temperature',
        subtext: 'Scatter plot illustrating the relationship between temperature and borehole levels'
      },
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          const val = params.data;
          return `Temperature: ${val[0]}°C<br/>Borehole Level: ${val[1]}m`;
        }
      },
      xAxis: {
        name: 'Temperature (°C)',
        type: 'value'
      },
      yAxis: {
        name: 'Borehole Level (m)',
        type: 'value'
      },
      series: [{
        symbolSize: 10,
        data: [[15, 34], [20, 90], [25, 50], /* ...your data */],
        type: 'scatter',
        color: '#f68512'  // vivid-orange
      }],
      responsive: true,
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      }
    };

    myChart.setOption(this.chartOptions);
  }
}
