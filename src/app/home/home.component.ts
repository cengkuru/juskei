import {Component, OnInit} from '@angular/core';
import {DataVizService} from "../services/dataVizService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  activeTab: string = 'Bore hole patterns';  // Initialize the active tab
  tabs = [
    'Bore hole patterns',
    'Temperature',
    'Rainfall'
  ]

  stats = [
    { title: 'Number of Boreholes', comparison: '+5 from last year', value: 120 },
    { title: 'Average Borehole Level', comparison: '+0.2m from last year', value: '15.4m' },
    { title: 'Highest Borehole Level', comparison: '-0.5m from last year', value: '20.1m' },
    { title: 'Lowest Borehole Level', comparison: '+0.1m from last year', value: '10.3m' },
    { title: 'Boreholes with Decreasing Levels', comparison: '+3 from last year', value: 45 },
    { title: 'Boreholes with Increasing Levels', comparison: '-3 from last year', value: 75 },
    { title: 'Highest Single Year Average', comparison: '2019', value: '16.2m' },
    { title: 'Lowest Single Year Average', comparison: '2020', value: '14.7m' },
    // ... add more data as needed
  ];

  tempStats = [
    { title: 'Average Annual Temperature', comparison: 'Comparison Value', value: '15.4°C' },
    { title: 'Highest Annual Average', comparison: '2019', value: '16.2°C' },
    { title: 'Lowest Annual Average', comparison: '2018', value: '14.7°C' },
    { title: 'Years Above Average', comparison: 'Comparison Value', value: '2 Years' },
    { title: 'Years Below Average', comparison: 'Comparison Value', value: '1 Year' },
    { title: 'Highest Temperature', comparison: 'Station A, 2020', value: '36.4°C' },
    { title: 'Lowest Temperature', comparison: 'Station B, 2019', value: '4.2°C' },

    // ... add more data as needed
  ];

  rainStats = [
    { title: 'Total Rainfall', comparison: 'Comparison Value', value: '2546 mm' },
    { title: 'Average Annual Rainfall', comparison: 'Comparison Value', value: '637 mm' },
    { title: 'Highest Annual Rainfall', comparison: '2019', value: '742 mm' },
    { title: 'Lowest Annual Rainfall', comparison: '2018', value: '523 mm' },
    { title: 'Stations Above Average', comparison: 'Comparison Value', value: '3 Stations' },
    { title: 'Stations Below Average', comparison: 'Comparison Value', value: '2 Stations' },
    // ... add more data as needed
  ];

  // Function to set the active tab
  setActiveTab(eventOrTab: Event | string): void {
    if (eventOrTab instanceof Event) {
      const target = eventOrTab.target as HTMLSelectElement;
      if (target && target.value) {
        this.activeTab = target.value;
      }
    } else {
      this.activeTab = eventOrTab;
    }
  }

  // Function to check if a tab is active
  isTabActive(tabName: string): boolean {
    return this.activeTab === tabName;
  }

  protected readonly HTMLSelectElement = HTMLSelectElement;

  constructor( private dataVizService: DataVizService) {
  }


  ngOnInit() {
    this.initialiseData();
  }

  // intialize the
  initialiseData() {
    this.getBoreholeYearlyAverage();
    this.getWaterLevelSummary();
    this.getWaterLevelRainfallScatter();
    this.getWaterLevelTempScatter();
  }

  // get water level summary from dataVizService
  getWaterLevelSummary() {
    return this.dataVizService.getWaterLevelSummary().subscribe((data: any[])=>{
      console.log("Water Level Summary")
      console.log(data);
    });
  }

  // getBoreholeYearlyAverage from dataVizService
  getBoreholeYearlyAverage() {
    return this.dataVizService.getBoreholeYearly().subscribe((data: any[])=>{
      console.log("Borehole Yearly Average")
      console.log(data);
    });
  }

  // getWaterLevelRainfallScatter
  getWaterLevelRainfallScatter() {
    return this.dataVizService.getWaterLevelRainfallScatter().subscribe((data: any[])=>{
      console.log("Water Level Rainfall Scatter")
      console.log(data);
    });
  }

  // getWaterLevelTempScatter
  getWaterLevelTempScatter() {
    return this.dataVizService.getWaterLevelTempScatter().subscribe((data: any[])=>{
      console.log("Water Level Temp Scatter")
      console.log(data);
    });
  }


}
