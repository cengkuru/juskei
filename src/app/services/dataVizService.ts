import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataVizService {
  private baseUrl = `${environment.apiUrl}/analytics`;

  constructor(private http: HttpClient) { }

  // 'waterlevel/water-level-summary'
  getWaterLevelSummary(): Observable<any> {
    return this.http.post(`${this.baseUrl}/waterlevel/water-level-summary`, {});
  }

  // 'waterlevel/borehole-yearly'
  getBoreholeYearly(): Observable<any> {
    return this.http.post(`${this.baseUrl}/waterlevel/borehole-yearly`, {});
  }

  // 'waterlevel/water-level-rainfall-scatter'
  getWaterLevelRainfallScatter(): Observable<any> {
    return this.http.post(`${this.baseUrl}/waterlevel/water-level-rainfall-scatter`, {});
  }

  // 'waterlevel/water-level-temp-scatter'
  getWaterLevelTempScatter(): Observable<any> {
    return this.http.post(`${this.baseUrl}/waterlevel/water-level-temp-scatter`, {});
  }



}
