import { Component, OnInit, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-average-temperature',
  templateUrl: './average-temperature.component.html',
  styleUrls: ['./average-temperature.component.scss']
})
export class AverageTemperatureComponent implements OnInit {
  chartOptions: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const lineChart = echarts.init(this.elementRef.nativeElement.querySelector('#avgTemp'));

    this.chartOptions = {
      title: {
        text: 'Average Annual Temperature Over Time',
        subtext: 'Line chart illustrating the average temperature per year'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        name: 'Year',
        type: 'category',
        data: ['2018', '2019', '2020', '2021']  // replace with your data
      },
      yAxis: {
        name: 'Average Temperature (°C)',
        type: 'value'
      },
      series: [{
        name: 'Average Temperature',
        data: [15.3, 16.1, 15.8, 16.5],  // replace with your data
        type: 'line',
        color: '#00679e'
      }],
      responsive: true,
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      }
    };

    lineChart.setOption(this.chartOptions);
  }
}
