import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-water-levels-by-month-and-year',
  templateUrl: './water-levels-by-month-and-year.component.html',
  styleUrls: ['./water-levels-by-month-and-year.component.scss']
})
export class WaterLevelsByMonthAndYearComponent implements OnInit {
  @Input() waterLevelData: any = {};
  chartOptions: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const lineChart = echarts.init(this.elementRef.nativeElement.querySelector('#waterLevelsByMonthAndYear'));

    const years = Object.keys(this.waterLevelData);
    const wettestMonths = years.map(year => this.waterLevelData[year]?.wettestMonth?.avgWaterLevel || null);
    const driestMonths = years.map(year => this.waterLevelData[year]?.driestMonth?.avgWaterLevel || null);

    this.chartOptions = {
      title: {
        text: 'Water Levels by Month and Year',
        subtext: 'Line chart illustrating the average water levels for the wettest and driest months per year'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        formatter: (params: any) => {
          const year = params[0].axisValue;
          const wetMonth = this.waterLevelData[year]?.wettestMonth?.month || 'N/A';
          const wetLevel = this.waterLevelData[year]?.wettestMonth?.avgWaterLevel || 'N/A';
          const dryMonth = this.waterLevelData[year]?.driestMonth?.month || 'N/A';
          const dryLevel = this.waterLevelData[year]?.driestMonth?.avgWaterLevel || 'N/A';
          const boreholes = this.waterLevelData[year]?.uniqueBoreholes || 'N/A';
          const avgRain = this.waterLevelData[year]?.avgRain || 'N/A';
          return `Year: ${year}<br>Wettest Month: ${wetMonth} (Level: ${wetLevel})<br>Driest Month: ${dryMonth} (Level: ${dryLevel})<br>Total Boreholes since 1987: ${boreholes}<br>Avg Rain: ${avgRain}`;
        }
      },
      legend: {
        data: ['Wettest Month', 'Driest Month']
      },
      xAxis: {
        name: 'Year',
        type: 'category',
        data: years
      },
      yAxis: {
        name: 'Water Level (m)',
        type: 'value'
      },
      series: [
        {
          name: 'Wettest Month',
          data: wettestMonths,
          type: 'line',
          smooth: true,
          color: '#00679e'
        },
        {
          name: 'Driest Month',
          data: driestMonths,
          type: 'line',
          smooth: true,
          color: '#d32f2f'
        }
      ],
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      }
    };

    lineChart.setOption(this.chartOptions);
  }
}
