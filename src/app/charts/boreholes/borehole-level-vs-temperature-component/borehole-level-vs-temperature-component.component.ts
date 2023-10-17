import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-borehole-level-vs-temperature-component',
  templateUrl: './borehole-level-vs-temperature-component.component.html',
  styleUrls: ['./borehole-level-vs-temperature-component.component.scss']
})
export class BoreholeLevelVsTemperatureComponentComponent implements OnInit {
  @Input() data: { year: number, avgWaterLevel: number, avgTemp: number }[] = [];
  chartOptions: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const myChart = echarts.init(this.elementRef.nativeElement.querySelector('#boreholeVsTemperature'));

    const years = this.data.map(item => item.year.toString());
    const avgWaterLevels = this.data.map(item => item.avgWaterLevel);
    const avgTemps = this.data.map(item => item.avgTemp);

    this.chartOptions = {
      title: {
        text: 'Relationship between temperature and borehole levels',

      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        },
        formatter: (params: any) => {
          const val = params[0];
          return `Year: ${val.name}<br/>Avg Water Level: ${val.data}m<br/>Avg Temp: ${params[1].data}°C`;
        }
      },
      xAxis: {
        name: 'Year',
        type: 'category',
        data: years
      },
      yAxis: [
        {
          name: 'Average Water Level (m)',
          type: 'value'
        },
        {
          name: 'Average Temperature (°C)',
          type: 'value',
          position: 'right'
        }
      ],
      series: [
        {
          name: 'Avg Water Level',
          data: avgWaterLevels,
          type: 'bar',
          color: '#f68512'  // vivid-orange
        },
        {
          name: 'Avg Temp',
          data: avgTemps,
          type: 'line',
          yAxisIndex: 1,
          color: '#3f51b5',  // vivid-blue


        }
      ],
      legend: {
        data: ['Avg Water Level', 'Avg Temp',],
        textStyle: {
          color: '#000',
          bottom: '0'

        },
        top: '10%',
      },
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
