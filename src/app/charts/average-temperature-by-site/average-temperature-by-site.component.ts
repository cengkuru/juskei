import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-average-temperature-by-site',
  templateUrl: './average-temperature-by-site.component.html',
  styleUrls: ['./average-temperature-by-site.component.scss']
})
export class AverageTemperatureBySiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const selectedSite = 'Johannesburg';  // replace with dynamic selection
    const years = Array.from({ length: 10 }, (_, i) => 2014 + i);
    const averageTemps = [24, 26, 25, 27, 24, 28, 23, 22, 27, 26];

    const chart = echarts.init(document.getElementById('average-temperature-by-site-chart') as HTMLDivElement);
    const option = {
      title: {
        text: `Decade of Degrees: ${selectedSite}'s Average Temperatures`,
        subtext: 'A look into the fluctuations of average temperatures over a decade',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          let temperature = params[0].data;
          let tooltipContent = `<strong>Year: ${params[0].axisValue}</strong><br>`;

          // Dynamic Tooltip Message based on temperature
          if (temperature <= 15) {
            tooltipContent += `<div>A Chill ${temperature}°C ❄️</div>`;
          } else if (temperature > 15 && temperature <= 25) {
            tooltipContent += `<div>A Comfortable ${temperature}°C 🌤️</div>`;
          } else if (temperature > 25) {
            tooltipContent += `<div>A Sizzling ${temperature}°C 🔥</div>`;
          }

          return tooltipContent;
        }
      }
      ,
      xAxis: {
        type: 'category',
        data: years,
        axisLabel: {
          rotate: 45
        }
      },
      yAxis: {
        type: 'value',
        name: 'Temperature (°C)',
        axisLabel: {
          color: '#3498db'
        }
      },
      series: [
        {
          name: 'Average Temperature',
          type: 'line',
          data: averageTemps,
          itemStyle: { color: '#e74c3c' },
          markPoint: {
            data: [
              { type: 'max', name: 'Warmest Year' },
              { type: 'min', name: 'Coolest Year' }
            ]
          },
        }
      ],
      responsive: true,
    };

    window.addEventListener('resize', () => {
      chart.resize();
    });
    chart.setOption(option);
  }
}
