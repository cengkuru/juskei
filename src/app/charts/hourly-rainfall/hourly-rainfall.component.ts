import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-hourly-rainfall',
  templateUrl: './hourly-rainfall.component.html',
  styleUrls: ['./hourly-rainfall.component.scss']
})
export class HourlyRainfallComponent {

  public heatmapOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00']
      },
      y: {
        type: 'category',
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    }
  };

  getGradientColor(value: number): string {
    // Define minimum and maximum values for your data
    const minValue = 0;
    const maxValue = 100;

    // Validate the input value
    if (value < minValue || value > maxValue) {
      console.error("Value out of range");
      return "#000000"; // return black for out-of-range values
    }

    // Normalize the value to a range between 0 and 1
    const normalizedValue = (value - minValue) / (maxValue - minValue);

    // Calculate red and green based on normalized value
    // Linear interpolation between red (255,0,0) and green (0,255,0)
    const red = Math.floor((1 - normalizedValue) * 255);
    const green = Math.floor(normalizedValue * 255);

    // Convert RGB to hex string
    const hexString = "#" + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + '00';

    return hexString;
  }


  public heatmapData: any = {
    datasets: [{
      data: [
        5, 10, 15, 20, 15, 22, 18,
        12, 31, 22, 39, 29, 40, 28,
        7, 15, 21, 32, 22, 38, 23,
        3, 14, 11, 27, 20, 36, 21,
        0, 6, 12, 22, 14, 30, 17,
        5, 12, 19, 24, 15, 32, 20,
        3, 7, 11, 15, 9, 26, 13
      ] as number[], // Explicitly specifying as numbers
      backgroundColor: (context: any) => {
        const value = context.dataset.data[context.dataIndex] as number;
        return this.getGradientColor(value); // Scoped to this
      }
    }]
  };

  public heatmapType: ChartType = 'line';

}
