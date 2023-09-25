import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';



@Component({
  selector: 'app-rainfall-by-site-chart',
  templateUrl: './rainfall-by-site-chart.component.html',
  styleUrls: ['./rainfall-by-site-chart.component.scss']
})
export class RainfallBySiteChartComponent implements OnInit, AfterViewInit {

  options: any;
  constructor() { }

  ngOnInit() {
    // Initialize the ECharts instance
    const myChart = echarts.init(document.getElementById('rainfallChart') as HTMLElement);

    // Sample data for demonstration
    const data = [
      { date: '2022-01-01', latitude: 1.0, longitude: 1.0, rain: 10, location: 'Johannesburg' },
      { date: '2022-01-02', latitude: 1.0, longitude: 1.0, rain: 20, location: 'Johannesburg' },
      { date: '2022-01-03', latitude: 1.1, longitude: 1.1, rain: 15, location: 'Pretoria' },
      { date: '2022-01-04', latitude: 1.1, longitude: 1.1, rain: 25, location: 'Pretoria' },
      { date: '2022-01-05', latitude: 1.2, longitude: 1.2, rain: 30, location: 'Durban' },
      { date: '2022-01-06', latitude: 1.2, longitude: 1.2, rain: 40, location: 'Durban' },
      { date: '2022-01-07', latitude: 1.3, longitude: 1.3, rain: 35, location: 'Cape Town' },
      { date: '2022-01-08', latitude: 1.3, longitude: 1.3, rain: 45, location: 'Cape Town' },
      // ... add more data
    ];

    const aggregatedData: { [key: string]: number[] } = {};
    data.forEach(item => {
      if (!aggregatedData[item.location]) {
        aggregatedData[item.location] = [];
      }
      aggregatedData[item.location].push(item.rain);
    });

    const averageRainfallByLocation = Object.keys(aggregatedData).map(location => ({
      name: location,
      value: aggregatedData[location].reduce((acc, cur) => acc + cur, 0) / aggregatedData[location].length,
    }));

    this.options = {
      title: {
        text: 'Average Rainfall by Location',
        subtext: 'A year-by-year comparison',
      },
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          let narrative: string;
          let icon: string;
          let action: string;

          if (params.data.value < 20) {
            narrative = "A dry year";
            icon = "🌵";
            action = "Consider water-saving measures.";
          } else if (params.data.value >= 20 && params.data.value < 50) {
            narrative = "A moderate year";
            icon = "🌦️";
            action = "Normal water usage is fine.";
          } else {
            narrative = "A year of bounty";
            icon = "🌧️";
            action = "Ideal for agriculture.";
          }

          return [
            `<div>${icon} ${narrative}</div>`,
            `<div>${params.data.value} mm of rainfall</div>`,
            `<div>${action}</div>`
          ].join('');
        },
        rich: {
          // Styles can be added here for tooltip text elements if needed.
        }
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,

      },

      xAxis: {
        type: 'category',
        data: averageRainfallByLocation.map(item => item.name),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: averageRainfallByLocation,
          type: 'bar',
        },
      ],
      responsive: true,
      color: ['#00679e'],
      // Interactivity
      toolbox: {
        feature: {
          dataZoom: {},
          saveAsImage: {
            pixelRatio: 2,
          },
        },
      },
      graphic: [
        // For example, text annotations
        {
          type: 'text',
          position: ['10%', '10%'],
          style: {
            text: 'High Rainfall',
            fontSize: 12,
          },
        },
      ],

    };
  }


  ngAfterViewInit() {
    const myChart = echarts.init(document.getElementById('rainfallChart') as HTMLElement);
    myChart.setOption(this.options);
  }





}
