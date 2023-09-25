import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';

interface TooltipParams {
  data: any;
  name: string;
  [key: string]: any;
}

@Component({
  selector: 'app-temperature-high-low-chart',
  templateUrl: './temperature-high-low-chart.component.html',
  styleUrls: ['./temperature-high-low-chart.component.scss']
})
export class TemperatureHighLowChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const generateFlair = (highestTemp: any, lowestTemp: any) => {
      if (highestTemp > 38) return 'A scorching year 🌵';
      if (lowestTemp < 10) return 'A chilly year ❄️';
      return 'A temperate year 🌦️';
    };

    const actionableInsights = (highestTemp: any) => {
      return highestTemp > 38 ? 'Consider heatwave measures.' : 'Normal year in terms of temperature.';
    };

    const years = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
    const highestTemps = [35, 36, 37, 38, 37, 39, 40, 38, 37, 39];
    const lowestTemps = [10, 12, 11, 9, 8, 7, 9, 10, 11, 12];

    const colors = ['#eb4950', '#32bac9'];

    const chart = echarts.init(document.getElementById('temperature-chart-high-low') as HTMLDivElement);
    const option = {
      title: {
        text: 'Highest and Lowest Temperatures Over the Last 10 Years',
        subtext: 'A Story of Climate Changes',
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const highestTemp = (params as TooltipParams[]).find(param => param['seriesName'] === 'Highest Temperature')?.data;
          const lowestTemp = (params as TooltipParams[]).find(param => param['seriesName'] === 'Lowest Temperature')?.data;

          let tooltipContent = `<strong>Year: ${params[0]['axisValue']}</strong><br>`;
          tooltipContent += `<div class="tooltip-layer">${generateFlair(highestTemp, lowestTemp)}</div>`;

          for (const param of params as TooltipParams[]) {
            tooltipContent += `<div>${param['seriesName']}: ${param.data}°C</div>`;
          }

          tooltipContent += `<div class="tooltip-layer">${actionableInsights(highestTemp)}</div>`;
          tooltipContent += `<a href="#">Click for more details</a>`;
          return tooltipContent;
        },
        textStyle: { fontSize: 12 },
        rich: {}
      },
      legend: {
        data: ['Highest Temperature', 'Lowest Temperature'],
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
      },
      xAxis: {
        type: 'category',
        data: years,
      },
      yAxis: {
        type: 'value',
        name: 'Temperature (°C)',
      },
      series: [
        {
          name: 'Highest Temperature',
          type: 'bar',
          data: highestTemps,
          itemStyle: { color: colors[0] },
        },
        {
          name: 'Lowest Temperature',
          type: 'bar',
          data: lowestTemps,
          itemStyle: { color: colors[1] },
        }
      ],
      responsive: true,
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      }
    };

    window.addEventListener('resize', () => {
      chart.resize();
    });
    chart.setOption(option);
  }
}
