import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import * as echarts from 'echarts';

interface TooltipParams {
  data: any;
  name: string;
  [key: string]: any;
}
@Component({
  selector: 'app-borehole-by-year-chart',
  templateUrl: './borehole-by-year-chart.component.html',
  styleUrls: ['./borehole-by-year-chart.component.scss']
})
export class BoreholeByYearChartComponent implements OnInit, OnDestroy {
  private boreholeByYearChart: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.initializeBoreholeByYearChart();
    });

    window.addEventListener('resize', () => {
      this.boreholeByYearChart.resize();
    });
  }

  initializeBoreholeByYearChart() {
    const boreholeElement = document.getElementById('boreholeByYearChart');
    this.boreholeByYearChart = echarts.init(boreholeElement);
    this.boreholeByYearChart.setOption({
      title: {
        text: 'The Borehole Boom: A 10-Year Journey',
        subtext: 'Number of Boreholes Over the Last 10 Years'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function(params: TooltipParams | TooltipParams[]) {
          const param: TooltipParams = Array.isArray(params) ? params[0] : params;
          return `Year: ${param.name}<br>Boreholes: ${param.data} 🕳️<br>${param.data >= 100 ? 'Resource-rich year!' : 'Scarcity Alert!'}`;
        }
      },
      xAxis: {
        type: 'category',
        data: Array.from({length: 10}, (_, i) => 2014 + i),  // Adjusted to last 10 years
        axisLabel: {
          rotate: 45
        }
      },
      yAxis: {
        type: 'value',
        name: 'Number of Boreholes',
        nameLocation: 'middle',
        nameGap: 50,
        show: false
      },
      series: [{
        data: [95, 110, 80, 130, 105, 90, 100, 85, 95, 88, 105, 110, 90, 120, 95, 100, 110, 105, 90, 115],
        type: 'bar',
        smooth: true,
        markLine: {
          silent: true,
          data: [
            {yAxis: 100, name: 'Resource Threshold'},
          ]
        },

        label: {
          show: true,
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          formatter: (params: TooltipParams) => params.data.toString()
        }
      }],
      responsive: true,
      color: ['#00679e']
    });
  }


  ngOnDestroy() {
    if (this.boreholeByYearChart) {
      this.boreholeByYearChart.dispose();
    }
  }
}
