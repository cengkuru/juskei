import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import * as echarts from 'echarts';
interface TooltipParams {
  data: any;
  name: string;
  [key: string]: any;
}
@Component({
  selector: 'app-borehole-chart',
  templateUrl: './borehole-chart.component.html',
  styleUrls: ['./borehole-chart.component.scss']
})
export class BoreholeChartComponent implements OnInit, OnDestroy {
  private chart: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      const element = document.getElementById('boreholeChart');
      this.chart = echarts.init(element);
      this.chart.setOption({
        title: {
          text: 'Water Levels by Year',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params: TooltipParams[]) => {
            const year = params[0].name;
            const highest = params[0].data;
            const lowest = params[1].data;
            let tooltip = `Year: ${year}<br>`;
            tooltip += `Water Level: `;
            tooltip += highest >= 900 ? 'High this year 🟢<br>' : 'Normal 🟡<br>';
            tooltip += lowest <= 110 ? 'Caution: Level is low 🔴' : 'Level is acceptable 🟡';
            return tooltip;
          }
        },
        xAxis: {
          type: 'category',
          data: ['2018', '2019', '2020', '2021']
        },
        yAxis: {
          type: 'value',
          name: 'Water Level (m)'
        },
        series: [
          {
            name: 'Highest',
            data: [820, 932, 901, 934],
            type: 'line',
            color: '#02819e'
          },
          {
            name: 'Lowest',
            data: [120, 132, 101, 134],
            type: 'line',
            color: '#eb4950'
          }
        ],
        responsive: true
      });

      window.addEventListener('resize', () => {
        this.chart.resize();
      });
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
