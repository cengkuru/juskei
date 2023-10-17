import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-borehole-vs-rainfall',
  templateUrl: './borehole-vs-rainfall.component.html',
  styleUrls: ['./borehole-vs-rainfall.component.scss']
})
export class BoreholeVsRainfallComponent implements OnInit {
  @Input() inputData!: any[];  // Declare inputData property with @Input decorator
  chartOptions: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const scatterPlot = echarts.init(this.elementRef.nativeElement.querySelector('#boreholeVsRain'));

    const years = this.inputData.map(item => item.year);
    const avgWaterLevel = this.inputData.map(item => item.avgWaterLevel);
    const avgRain = this.inputData.map(item => item.avgRain);

    this.chartOptions = {
      color: ['#00679e', '#f68512'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['Average Water Level', 'Average Rainfall'],
        top: '10%'
      },
      xAxis: {
        name: 'Year',
        type: 'category',
        data: years
      },
      yAxis: [{
        name: 'Average Water Level',
        type: 'value'
      }, {
        name: 'Average Rainfall',
        type: 'value',
        axisLabel: {
          formatter: '{value} mm'
        }
      }],
      series: [{
        name: 'Average Water Level',
        data: avgWaterLevel,
        type: 'bar'
      }, {
        name: 'Average Rainfall',
        data: avgRain,
        type: 'line',
        yAxisIndex: 1
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
