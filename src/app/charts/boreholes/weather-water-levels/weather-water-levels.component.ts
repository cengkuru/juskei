import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-weather-water-levels',
  templateUrl: './weather-water-levels.component.html',
  styleUrls: ['./weather-water-levels.component.scss']
})
export class WeatherWaterLevelsComponent implements OnInit {
  @Input() weatherData: any[] = [];
  chartOptions: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const lineChart = echarts.init(this.elementRef.nativeElement.querySelector('#weatherWaterLevels'));

    const years = this.weatherData.map(data => data.year);
    const avgWaterLevels = this.weatherData.map(data => data.avgWaterLevel);
    const avgTemps = this.weatherData.map(data => data.avgTemp);

    this.chartOptions = {
      title: {
        text: 'Weather and Water Levels by Year',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        formatter: (params: any) => {
          const dataPoint = this.weatherData.find(d => d.year === +params[0].axisValue);
          if (!dataPoint) return '';
          return `<b>Year:</b> ${dataPoint.year}<br>
                  <b>Average Water Level:</b> ${dataPoint.avgWaterLevel}m<br>
                  <b>Average Temperature:</b> ${dataPoint.avgTemp}°C<br>
                  <b>Hottest Month:</b> ${dataPoint.hottestMonthName} (${dataPoint.hottestMonth}°C)<br>
                  <b>Coldest Month:</b> ${dataPoint.coldestMonthName} (${dataPoint.coldestMonth}°C)`;
        }
      },
      xAxis: {
        type: 'category',
        data: years
      },
      yAxis: [
        {
          name: 'Avg Water Level (m)',
          type: 'value',
        },
        {
          name: 'Avg Temp (°C)',
          type: 'value',
        }
      ],
      series: [
        {
          name: 'Average Water Level',
          data: avgWaterLevels,
          type: 'line',
          yAxisIndex: 0
        },
        {
          name: 'Average Temperature',
          data: avgTemps,
          type: 'line',
          yAxisIndex: 1
        }
      ],
      legend: {
        data: ['Average Water Level', 'Average Temperature'],
        orient: 'horizontal',
        top: 'bottom',
        left: 'center',
        show: true,
        selectedMode: 'multiple',
        textStyle: {
          color: '#333',
          fontSize: 12,
          fontWeight: 'bold',
          fontFamily: 'Arial',

        }
      }
    };

    lineChart.setOption(this.chartOptions);
  }
}
