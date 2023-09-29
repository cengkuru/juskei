import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { AvgWaterLevelComponent } from './charts/avg-water-level/avg-water-level.component';
import { YearOverYearChangeComponent } from './charts/year-over-year-change/year-over-year-change.component';
import { GeoChartComponent } from './charts/geo-chart/geo-chart.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ScatterPlotComponent } from './charts/scatter-plot/scatter-plot.component';
import { FrequencyDistributionComponent } from './charts/frequency-distribution/frequency-distribution.component';
import { ExtremTempDistributionComponent } from './charts/extrem-temp-distribution/extrem-temp-distribution.component';
import { AvgTempComponent } from './charts/avg-temp/avg-temp.component';
import { AvgRainfallComponent } from './charts/avg-rainfall/avg-rainfall.component';
import { CummulativeRainfallComponent } from './charts/cummulative-rainfall/cummulative-rainfall.component';
import { HourlyRainfallComponent } from './charts/hourly-rainfall/hourly-rainfall.component';
import { BoreholeChartComponent } from './charts/borehole-chart/borehole-chart.component';
import { RainfallChartComponent } from './charts/rainfall-chart/rainfall-chart.component';
import { BoreholeByYearChartComponent } from './charts/borehole-by-year-chart/borehole-by-year-chart.component';
import { RainfallBySiteChartComponent } from './charts/rainfall-by-site-chart/rainfall-by-site-chart.component';
import { RainfallHighestLowestBySiteComponent } from './charts/rainfall-highest-lowest-by-site/rainfall-highest-lowest-by-site.component';
import { RainfallAverageBySiteComponent } from './charts/rainfall-average-by-site/rainfall-average-by-site.component';
import { TemperatureChartComponent } from './charts/temperature-chart/temperature-chart.component';
import { TemperatureHighLowChartComponent } from './charts/temperature-high-low-chart/temperature-high-low-chart.component';
import { AverageTemperatureBySiteComponent } from './charts/average-temperature-by-site/average-temperature-by-site.component';
import { BoreholeVsRainfallComponent } from './charts/boreholes/borehole-vs-rainfall/borehole-vs-rainfall.component';
import { BoreholeLevelVsTemperatureComponentComponent } from './charts/boreholes/borehole-level-vs-temperature-component/borehole-level-vs-temperature-component.component';
import { BoreholeLevelsByYearComponentComponent } from './charts/boreholes/borehole-levels-by-year-component/borehole-levels-by-year-component.component';
import { BoreholeTableComponent } from './charts/boreholes/borehole-table/borehole-table.component';
import { AverageTemperatureComponent } from './charts/temperature/average-temperature/average-temperature.component';
import { TemperatureTableComponent } from './charts/temperature/temperature-table/temperature-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartsComponent,
    AvgWaterLevelComponent,
    YearOverYearChangeComponent,
    GeoChartComponent,
    ScatterPlotComponent,
    FrequencyDistributionComponent,
    ExtremTempDistributionComponent,
    AvgTempComponent,
    AvgRainfallComponent,
    CummulativeRainfallComponent,
    HourlyRainfallComponent,
    BoreholeChartComponent,
    RainfallChartComponent,
    BoreholeByYearChartComponent,
    RainfallBySiteChartComponent,
    RainfallHighestLowestBySiteComponent,
    RainfallAverageBySiteComponent,
    TemperatureChartComponent,
    TemperatureHighLowChartComponent,
    AverageTemperatureBySiteComponent,
    BoreholeVsRainfallComponent,
    BoreholeLevelVsTemperatureComponentComponent,
    BoreholeLevelsByYearComponentComponent,
    BoreholeTableComponent,
    AverageTemperatureComponent,
    TemperatureTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
