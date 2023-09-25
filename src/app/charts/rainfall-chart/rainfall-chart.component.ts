// Existing imports
import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import * as echarts from 'echarts';
interface TooltipParams {
  data: any;
  name: string;
  [key: string]: any;
}
@Component({
  selector: 'app-rainfall-chart',
  templateUrl: './rainfall-chart.component.html',
  styleUrls: ['./rainfall-chart.component.scss']
})


export class RainfallChartComponent implements OnInit, OnDestroy {
  private rainfallChart: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.initializeRainfallChart();
    });

    window.addEventListener('resize', () => {
      this.rainfallChart.resize();
    });
  }

  initializeRainfallChart() {
    const rainfallElement = document.getElementById('rainfallChart');
    this.rainfallChart = echarts.init(rainfallElement);
    this.rainfallChart.setOption({
      title: {
        text: 'Is it a Wet or Dry Year?',
        subtext: 'Average Rainfall Over 20 Years',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const data = params[0].data;
          return `Year: ${params[0].name}<br>Rainfall: ${data} mm<br>${
            data >= 450 ? '🌧️ Wet Year: Expect lush landscapes!' : '🌵 Dry Year: Water was scarce!'
          }`;
        }
      },

      xAxis: {
        type: 'category',
        data: Array.from({length: 20}, (_, i) => 2004 + i),
        axisLabel: {
          rotate: 45
        }
      },
      yAxis: {
        type: 'value',
        name: 'Rainfall (mm)',
        nameLocation: 'middle',
        nameGap: 50
      },
      series: [{
        data: [400, 430, 350, 420, 480, 450, 420, 470, 440, 430, 400, 460, 420, 440, 430, 405, 430, 455, 460, 470],
        type: 'line',
        smooth: true,
        markLine: {
          silent: true,
          data: [
            {yAxis: 450, name: 'High Rainfall Threshold'},
            {yAxis: 350, name: 'Low Rainfall Threshold'}
          ]
        },
        label: {
          show: true,
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          formatter: (params: any) => params.data >= 450 ? '🌧️ Wet Year' : params.data <= 350 ? '🌵 Dry Year' : ''
        }

      }],
      color: ['#32bac9']
    });
  }

  ngOnDestroy() {
    if (this.rainfallChart) {
      this.rainfallChart.dispose();
    }
  }
}
