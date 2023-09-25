import {Component, ElementRef, OnInit} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-rainfall-average-by-site',
  templateUrl: './rainfall-average-by-site.component.html',
  styleUrls: ['./rainfall-average-by-site.component.scss']
})
export class RainfallAverageBySiteComponent implements OnInit {
  chartOptions: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const myChart = echarts.init(this.elementRef.nativeElement.querySelector('#avgRainBySite'));

    this.chartOptions = {
      title: {
        text: 'Rain Check: Tracking the Ups and Downs of Yearly Rainfall Across Cities',
        subtext: 'Shows an increasing trend in rainfall over years' // Narrative
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const val = params[0].data;
          let action = '';

          // Dynamic actionable insight based on data
          if (val > 900) {
            action = 'This is an exceptionally wet year; flood prevention measures are advisable.';
          } else if (val > 800) {
            action = 'Rainfall is above average; reservoirs are likely to be full.';
          } else if (val > 700) {
            action = 'This is an average year; continue normal water usage practices.';
          } else {
            action = 'This is a dry year; consider water-saving measures.';
          }

          return `In ${params[0].name}, Johannesburg received ${val}mm of rainfall. ${action}`;
        }
      },

      legend: {
        data: ['Johannesburg', 'Pretoria', 'Durban'],
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
      },
      xAxis: {
        type: 'category',
        data: ['2018', '2019', '2020', '2021']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Johannesburg',
          type: 'line',
          data: [820, 932, 901, 934],
          color: '#32bac9'
        },
        {
          name: 'Pretoria',
          type: 'line',
          data: [720, 832, 801, 834],
          color: '#00679e'
        },
        {
          name: 'Durban',
          type: 'line',
          data: [620, 732, 701, 734],
          color: '#aba89d'
        }
      ],
      responsive: true, // Ensures responsive design
      toolbox: {
        feature: {
          saveAsImage: {} // Allows user to save chart as image

        }
      }

    };

    myChart.setOption(this.chartOptions);
  }
}
