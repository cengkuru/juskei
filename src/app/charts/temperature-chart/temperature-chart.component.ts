import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';

interface DataPoint {
  dam: string;
  date: string;
  maxTemp: number;
  minTemp: number;
  year: number;
}



interface CalculatedData {
  totalTemp: number;
  count: number;
}

interface GroupedData {
  [key: string]: { [year: number]: CalculatedData | number };
}


@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.scss']
})
export class TemperatureChartComponent implements OnInit {

  ngOnInit() {
    const chart = echarts.init(document.getElementById('chart') as HTMLDivElement);
    // Assuming this data comes from a validated source
    const data: DataPoint[] = [
      { dam: 'Dam1', date: '2021-01-01', maxTemp: 30, minTemp: 20, year: 2021 },
      { dam: 'Dam1', date: '2021-02-15', maxTemp: 28, minTemp: 22, year: 2021 },
      { dam: 'Dam1', date: '2021-07-01', maxTemp: 32, minTemp: 25, year: 2021 },
      { dam: 'Dam1', date: '2022-01-01', maxTemp: 29, minTemp: 19, year: 2022 },
      { dam: 'Dam2', date: '2021-01-01', maxTemp: 33, minTemp: 24, year: 2021 },
      { dam: 'Dam2', date: '2022-01-01', maxTemp: 34, minTemp: 25, year: 2022 },
      { dam: 'Dam2', date: '2022-03-15', maxTemp: 35, minTemp: 28, year: 2022 },
      { dam: 'Dam3', date: '2021-01-01', maxTemp: 27, minTemp: 18, year: 2021 },
      { dam: 'Dam3', date: '2021-06-20', maxTemp: 26, minTemp: 19, year: 2021 },
      { dam: 'Dam3', date: '2022-01-01', maxTemp: 28, minTemp: 20, year: 2022 },
    ];

    const groupedData = this.groupByDamAndYear(data);
    // Customize colors for mood
    const colors = ['#eb4950', '#00679e', '#32bac9'];

    const option = {
      title: {
        text: 'Thermal Footprints Across South African Dams',
        subtext: 'Yearly Fluctuations',
      },
      tooltip: {
        trigger: 'axis',
        formatter(params:any) {
          const value = params[0].value;
          let tooltip = `Year: ${params[0].name}<br>`;
          tooltip += `Average Temp: ${value}°C<br>`;
          return tooltip;
        }
      },
      legend: {
        data: Object.keys(groupedData),
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
      },
      xAxis: {
        type: 'category',
        data: Object.keys(groupedData['Dam1'] || {}).sort(),
        axisLabel: {
          rotate: 30
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      },
      series: this.buildSeries(groupedData,colors)
    };

    // Responsive Design
    window.addEventListener('resize', () => {
      chart.resize();
    });

    chart.setOption(option, true);
  }

  groupByDamAndYear(data: DataPoint[]): GroupedData {
    const grouped: GroupedData = {};
    data.forEach(d => {
      if (!grouped[d.dam]) {
        grouped[d.dam] = {};
      }
      if (!grouped[d.dam][d.year]) {
        grouped[d.dam][d.year] = { totalTemp: 0, count: 0 } as CalculatedData;
      }
      const avgTemp = (d.maxTemp + d.minTemp) / 2;
      (grouped[d.dam][d.year] as CalculatedData).totalTemp += avgTemp;
      (grouped[d.dam][d.year] as CalculatedData).count++;
    });

    // Calculate averages
    for (const dam in grouped) {
      for (const year in grouped[dam]) {
        const info = grouped[dam][year] as CalculatedData;
        grouped[dam][year] = info.totalTemp / info.count;
      }
    }
    return grouped;
  }




  buildSeries(groupedData: GroupedData, colors: string[]) {
    const series = [];
    let colorIndex = 0;
    for (const dam in groupedData) {
      series.push({
        name: dam,
        type: 'line',
        data: Object.values(groupedData[dam]),
        itemStyle: {
          color: colors[colorIndex % colors.length]
        }
      });
      colorIndex++;
    }
    return series;
  }

}
