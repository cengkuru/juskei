import { Component, OnInit, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-borehole-levels-by-year-component',
  templateUrl: './borehole-levels-by-year-component.component.html',
  styleUrls: ['./borehole-levels-by-year-component.component.scss']
})
export class BoreholeLevelsByYearComponentComponent implements OnInit {
  chartOptions: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const barChart = echarts.init(this.elementRef.nativeElement.querySelector('#boreholeLevelsByYear'));

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
      xAxis: {
        name: 'Year',
        type: 'category',
        data: ['2018', '2019', '2020', '2021']  // replace with your data
      },
      yAxis: {
        name: 'Borehole Level (m)',
        type: 'value'
      },
      series: [{
        name: 'Borehole Level',
        data: [34, 90, 50, 80],  // replace with your data
        type: 'bar',
        color: '#00679e'
      }],
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
