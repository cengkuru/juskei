import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-borehole-levels-by-year-component',
  templateUrl: './borehole-levels-by-year-component.component.html',
  styleUrls: ['./borehole-levels-by-year-component.component.scss']
})
export class BoreholeLevelsByYearComponentComponent implements OnInit {
  @Input() boreholeData: { year: number, avgWaterLevel: number, maxWaterLevel: number, minWaterLevel: number }[] = [];
  chartOptions: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const barChart = echarts.init(this.elementRef.nativeElement.querySelector('#boreholeLevelsByYear'));

    const years = this.boreholeData.map(data => data.year.toString());
    const avgWaterLevels = this.boreholeData.map(data => data.avgWaterLevel);
    const maxWaterLevels = this.boreholeData.map(data => data.maxWaterLevel);
    const minWaterLevels = this.boreholeData.map(data => data.minWaterLevel);

    this.chartOptions = {
      title: {
        text: 'Borehole Levels by Year',
        subtext: 'Bar chart illustrating the borehole levels per year'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Average Water Level', 'Maximum Water Level', 'Minimum Water Level']
      },
      xAxis: {
        name: 'Year',
        type: 'category',
        data: years
      },
      yAxis: {
        name: 'Borehole Level (m)',
        type: 'value'
      },
      series: [
        {
          name: 'Average Water Level',
          data: avgWaterLevels,
          type: 'bar',
          color: '#00679e'
        },
        {
          name: 'Maximum Water Level',
          data: maxWaterLevels,
          type: 'bar',
          color: '#d32f2f'
        },
        {
          name: 'Minimum Water Level',
          data: minWaterLevels,
          type: 'bar',
          color: '#388e3c'
        }
      ],
      responsive: true,
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      }
    };

    barChart.setOption(this.chartOptions);
  }
}
