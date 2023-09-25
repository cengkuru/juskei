import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-rainfall-highest-lowest-by-site',
  templateUrl: './rainfall-highest-lowest-by-site.component.html',
  styleUrls: ['./rainfall-highest-lowest-by-site.component.scss']
})
export class RainfallHighestLowestBySiteComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const element = document.querySelector('.echart-container') as HTMLElement;
    const chart = echarts.init(element);

    const option = {
      title: {
        text: 'Yearly Rainfall: Highs and Lows by Site',
        subtext: 'Explore the variability of rainfall at different sites over the years'
      },
      tooltip: {
        trigger: 'axis',
        formatter(params: any) {
          let tooltip = '';
          params.forEach((param: any) => {
            const data = param.data || {};
            tooltip += `<strong>${param.seriesName}</strong><br/>`;
            tooltip += `Year: ${param.name}<br/>`;
            tooltip += `Site: ${data.site || 'N/A'}<br/>`; // Added a default value 'N/A'
            tooltip += `${data.type === 'highest' ? '🌧️' : '🌵'} ${param.seriesName}: ${param.value}<br/><br/>`;
          });
          return tooltip;
        }
      },
      legend: {
        data: ['Highest', 'Lowest'],
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
      },
      xAxis: {
        type: 'category',
        data: ['2020', '2021'] // Years (from your data)
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} mm'
        }
      },
      series: [
        {
          name: 'Highest',
          type: 'bar',
          data: [
            { value: 800, name: '2020', site: 'Johannesburg', type: 'highest' },
            { value: 900, name: '2021', site: 'Johannesburg', type: 'highest' }
          ],
          itemStyle: {
            color: '#32bac9'
          }
        },
        {
          name: 'Lowest',
          type: 'bar',
          data: [
            { value: 300, name: '2020', site: 'Johannesburg', type: 'lowest' },
            { value: 350, name: '2021', site: 'Johannesburg', type: 'lowest' }
          ],
          itemStyle: {
            color: '#eb4950'
          }
        }
      ]
    };

    chart.setOption(option);
  }
}
