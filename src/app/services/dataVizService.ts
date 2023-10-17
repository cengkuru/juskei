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

  private setParams(params: HttpParams, val: { year?: number; location?: string }): HttpParams {
    Object.keys(val).forEach(key => {
      const value = val[key as keyof typeof val];
      if (value !== undefined && value !== null) {
        params = params.set(key, value.toString());
      }
    });
    return params;
  }


  // 'waterlevel/water-level-summary'
  getWaterLevelSummary(val?: { year?: number; location?: string }): Observable<any> {
    let params = new HttpParams();

    if (val) {
      params = this.setParams(params, val);
    }

    return this.http.post(`${this.baseUrl}/waterlevel/water-level-summary`, {}, { params });
  }

  // 'waterlevel/borehole-count allows for optional parameters'
  getBoreholeCount(val?: { year?: number; location?: string }): Observable<any> {
    let params = new HttpParams();

    if (val) {
      params = this.setParams(params, val);
    }

    return this.http.post(`${this.baseUrl}/waterlevel/borehole-count`, {}, { params });
  }




  // 'waterlevel/borehole-yearly' allows for optional parameters
  getBoreholeYearly(val?: { year?: number; location?: string }): Observable<any> {
    let params = new HttpParams();

    if (val) {
      params = this.setParams(params, val);
    }

    return this.http.post(`${this.baseUrl}/waterlevel/borehole-yearly`, {}, { params });
  }


  // 'waterlevel/water-level-rainfall-scatter' allows for optional parameters
  getWaterLevelRainfallScatter(val?: { year?: number; location?: string }): Observable<any> {
    let params = new HttpParams();

    if (val) {
      params = this.setParams(params, val);
    }

    return this.http.post(`${this.baseUrl}/waterlevel/water-level-rainfall-scatter`, {}, { params });
  }


  // 'waterlevel/water-level-temp-scatter' allows for optional parameters
  getWaterLevelTempScatter(val?: { year?: number; location?: string }): Observable<any> {
    let params = new HttpParams();

    if (val) {
      params = this.setParams(params, val);
    }

    return this.http.post(`${this.baseUrl}/waterlevel/water-level-temp-scatter`, {}, { params });
  }


  // 'water-level-stats-by-year-with-unique-boreholes' allows for optional parameters
  getWaterLevelStatsByYearWithUniqueBoreholes(val?: { year?: number; location?: string }): Observable<any> {
    let params = new HttpParams();
    if (val) {
      params = this.setParams(params, val);
    }
    return this.http.post(`${this.baseUrl}/waterlevel/water-level-stats-by-year-with-unique-boreholes`, {}, { params });
  }
  // 'get-years'
  getYears(): Observable<any> {
    return this.http.get(`${this.baseUrl}/waterlevel/get-years`, {});
  }

  // 'get-locations'
  getLocations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/waterlevel/get-locations`, {});
  }



}
