import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-borehole-table',
  templateUrl: './borehole-table.component.html',
  styleUrls: ['./borehole-table.component.scss']
})
export class BoreholeTableComponent implements OnInit, AfterViewInit {
  @Input() boreholes: { year: string, count: number }[] = [];
  options: any;

  constructor() { }

  ngOnInit() {
    const years = this.boreholes.map(b => b.year);
    const counts = this.boreholes.map(b => b.count);

    this.options = {
      title: {
        text: 'Boreholes Count Over Years',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: years
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: counts,
        type: 'line',
        areaStyle: {}
      }],
      color: ['#3f51b5'],
      toolbox: {
        feature: {
          saveAsImage: {
            pixelRatio: 2,
          },
        },
      },
    };
  }

  ngAfterViewInit() {
    const myChart = echarts.init(document.getElementById('boreholeChart') as HTMLElement);
    myChart.setOption(this.options);
  }
}
