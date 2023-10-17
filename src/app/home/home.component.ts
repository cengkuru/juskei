import {Component, OnInit} from '@angular/core';
import {DataVizService} from "../services/dataVizService";
import {FormBuilder, FormGroup} from "@angular/forms";
// Strong typing for summary statistics
interface Stat {
  title: string;
  comparison?: string;
  value: number | string;
}
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
  isLoadedBoreholeStats: boolean = false;
  isLoadingWaterLevelStats: boolean = false;



  boreholeStats:any[] = [];
  boreholeCount: any[] = [];
  yearlyBoreholeLevel: any[] = [];
  isLoadedBoreholeLevel: boolean = false;
  isLoadedBoreholeCount: boolean = false;
  boreholeLevelVsTemperature: any[] = [];
  isLoadedBoreholeLevelVsTemperature: boolean = false;
  boreholeLevelVsRainfall: any[] = [];
  isLoadedBoreholeLevelVsRainfall: boolean = false;
  isLoadedBoreholeLevelByYear: boolean = false;
  boreholeLevelByYear: any[] = [];

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

  defaultYear: string | number = '2021';
  defaultLocation: string | null = null;
  // Declare the 'years' variable like this at the class level
  years: string[] | null | undefined;

  locations: string[] = [];
  form!: FormGroup;

  constructor(
    private dataVizService: DataVizService,
    private fb: FormBuilder
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loadInitialData();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      year: [],
      location: []
    });
    this.form.valueChanges.subscribe(val => {
      this.initialiseData(val);
    });
  }

  private loadInitialData(): void {
    this.dataVizService.getYears().subscribe((yearData: Array<{ year: number }>) => {
      // Convert array of dictionaries to array of strings
      this.years = yearData.map(y => y.year.toString());
    });

    this.dataVizService.getLocations().subscribe((locationData: Array<{ location: string }>) => {
      // Convert array of dictionaries to array of strings
      this.locations = locationData.map(l => l.location);

      this.initialiseData(this.form.value);
    });
  }






  // intialize the
  // Initialize the component data
  initialiseData(val: { year: string; location: string }) {
    this.getBoreholeYearlyAverage(val);
    this.getWaterLevelSummary(val);
    this.getWaterLevelRainfallScatter(val);
    this.getWaterLevelTempScatter(val);
    this.getBoreholeCount(val);
    this.getWaterLevelStatsByYearWithUniqueBoreholes(val);
  }

  // get years from dataVizService
  // Update your getYears and getLocations to return Promises
  getYears() {
    return new Promise((resolve, reject) => {
      this.dataVizService.getYears().subscribe((data) => {
        this.years = data;
        resolve(true);
      }, error => reject(error));
    });
  }

  getLocations() {
    return new Promise((resolve, reject) => {
      this.dataVizService.getLocations().subscribe((data) => {
        this.locations = data;
        resolve(true);
      }, error => reject(error));
    });
  }

  // get water level summary from dataVizService
  getWaterLevelSummary(val: any) {
    this.isLoadingWaterLevelStats = true;
    return this.dataVizService.getWaterLevelSummary(val).subscribe((data)=>{
      console.log("Water Level Summary")
      this.isLoadingWaterLevelStats = false;
      this.boreholeStats = [
        { title: 'Number of Boreholes',  value: data.summaryStats[val.year].numberOfBoreholes },
        { title: 'Average Borehole Level',  value: data.summaryStats[val.year].avgWaterLevel },
        { title: 'Highest Borehole Level', value: data.highestYearAverage.avgWaterLevel },
        { title: 'Lowest Borehole Level',  value: data.lowestYearAverage.avgWaterLevel },
        { title: 'Boreholes with Decreasing Levels',  value: data.decreasedLevels[0] },
        { title: 'Boreholes with Increasing Levels',  value: data.increasedLevels[0] },
        { title: 'Highest Single Year Average',  value: data.summaryStats[val.year].maxWaterLevel },
        { title: 'Lowest Single Year Average',  value: data.summaryStats[val.year].minWaterLevel },
      ]
      console.log(this.boreholeStats);
    });
  }

  // getBoreholeYearlyAverage from dataVizService
  getBoreholeYearlyAverage(val: any) {
    this.isLoadedBoreholeLevel = false;
    return this.dataVizService.getBoreholeYearly(val).subscribe((data: any[])=>{
      console.log("Borehole Yearly Average")
      this.isLoadedBoreholeLevel = true;
      this.yearlyBoreholeLevel = data;
      console.log(data);
    });
  }

  // getBoreholeCount() from dataVizService
  getBoreholeCount(val: any) {
    this.isLoadedBoreholeCount = false;
    return this.dataVizService.getBoreholeCount(val).subscribe((data: any[])=>{
      console.log("Borehole Count")
      this.isLoadedBoreholeCount = true;
      this.boreholeCount = data;
      console.log(data);
    });
  }

  // getWaterLevelRainfallScatter
  getWaterLevelRainfallScatter(val: any) {
    this.isLoadedBoreholeLevelVsRainfall = false;
    return this.dataVizService.getWaterLevelRainfallScatter(val).subscribe((data: any[])=>{
      console.log("Water Level Rainfall Scatter")
      this.isLoadedBoreholeLevelVsRainfall = true;
      this.boreholeLevelVsRainfall = data;
      console.log(data);
    });
  }

  // getWaterLevelTempScatter
  getWaterLevelTempScatter(val: any) {
    this.isLoadedBoreholeLevelVsTemperature = false;
    return this.dataVizService.getWaterLevelTempScatter(val).subscribe((data: any[])=>{
      console.log("Water Level Temp Scatter")
      this.isLoadedBoreholeLevelVsTemperature = true;
      this.boreholeLevelVsTemperature = data;
      console.log(data);
    });
  }

  // getWaterLevelStatsByYearWithUniqueBoreholes() from dataVizService
  getWaterLevelStatsByYearWithUniqueBoreholes(val: any) {
    this.isLoadedBoreholeLevelByYear = false;
    return this.dataVizService.getWaterLevelStatsByYearWithUniqueBoreholes(val).subscribe((data: any[])=>{
      console.log("Water Level Stats By Year")
      this.isLoadedBoreholeLevelByYear = true;
      this.boreholeLevelByYear = data;
      console.log(data);
    });
  }

  resetForm(): void {
    this.form.reset({
      year: '',
      location: ''
    });
    this.initialiseData(this.form.value);
  }



}
