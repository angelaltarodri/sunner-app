import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { PlantInfo } from '../interfaces/plantInfo.interface';
import { PlantList } from '../interfaces/plantList.interface';
import { PlantDashboardHour } from '../interfaces/plantDashboardHour.interface';
import { PlantTimespan } from '../enum/plantTimespan.enum';
import { PlantDashboardDay } from '../interfaces/plantDashboardDay.interface';
import { PlantDashboardYear } from '../interfaces/plantDashboardYear.interface';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlantsBasicInfo(): Observable<PlantList> {
    return this.http.get<PlantList>(`${this.baseUrl}`);
  }

  getPlantInfo(plantId: string): Observable<PlantInfo> {
    return this.http.get<PlantInfo>(`${this.baseUrl}/${plantId}`);
  }

  getPlantDetailHours(
    plantId: string,
    metric: PlantTimespan.hour
  ): Observable<{
    horas: string[];
    solar: number[];
    loadConsumption: number[];
  }> {
    return this.http
      .get<PlantDashboardHour>(`${this.baseUrl}/dashboard/${plantId}/${metric}`)
      .pipe(
        map((data) => {
          const horas = Object.keys(data.chartData);
          const solar = horas.map((hora) => Number(data.chartData[hora].ppv));
          const loadConsumption = horas.map((hora) =>
            Number(data.chartData[hora].sysOut)
          );

          let start = 0;
          let end = loadConsumption.length - 1;

          for (let i = 0; i < loadConsumption.length; i++) {
            if (
              loadConsumption[i] !== 0 ||
              solar[i] !== 0 ||
              loadConsumption[i] !== 0
            ) {
              start = i;
              break;
            }
          }

          for (let i = loadConsumption.length - 1; i >= 0; i--) {
            if (
              loadConsumption[i] !== 0 ||
              solar[i] !== 0 ||
              loadConsumption[i] !== 0
            ) {
              end = i;
              break;
            }
          }

          return {
            horas: horas.slice(start, end),
            solar: solar.slice(start, end),
            loadConsumption: loadConsumption.slice(start, end),
          };
        })
      );
  }

  getPlantDetailDays(
    plantId: string,
    metric: PlantTimespan.day
  ): Observable<{
    dias: string[];
    solar: number[];
    loadConsumption: number[];
  }> {
    return this.http
      .get<PlantDashboardDay>(`${this.baseUrl}/dashboard/${plantId}/${metric}`)
      .pipe(
        map((data) => {
          const solar: number[] = [];
          const loadConsumption: number[] = [];
          const dias: string[] = [];

          for (let i = 0; i < data.chartData.ppv.length; i++) {
            dias.push((i + 1).toString());
            solar.push(Number(data.chartData.ppv[i]));
            loadConsumption.push(Number(data.chartData.sysOut[i]));
          }

          return {
            dias: dias,
            solar: solar,
            loadConsumption: loadConsumption,
          };
        })
      );
  }

  getPlantDetailMonths(
    plantId: string,
    metric: PlantTimespan.month
  ): Observable<{
    meses: string[];
    solar: number[];
    loadConsumption: number[];
  }> {
    return this.http
      .get<PlantDashboardDay>(`${this.baseUrl}/dashboard/${plantId}/${metric}`)
      .pipe(
        map((data) => {
          const solar: number[] = [];
          const loadConsumption: number[] = [];
          const meses: string[] = [];

          for (let i = 0; i < data.chartData.ppv.length; i++) {
            meses.push((i + 1).toString());
            solar.push(Number(data.chartData.ppv[i]));
            loadConsumption.push(Number(data.chartData.sysOut[i]));
          }

          return {
            meses: meses,
            solar: solar,
            loadConsumption: loadConsumption,
          };
        })
      );
  }

  getPlantDetailYears(
    plantId: string,
    metric: PlantTimespan.year
  ): Observable<{
    anios: string[];
    solar: number[];
    loadConsumption: number[];
  }> {
    return this.http
      .get<PlantDashboardYear>(`${this.baseUrl}/dashboard/${plantId}/${metric}`)
      .pipe(
        map((data) => {
          const dataCurrentYear = data.detailsDataCurrentYear.data.chartData;
          let solarSumCurrentYear = 0;
          let localConsumptionCurrentYear = 0;
          for (let i = 0; i < dataCurrentYear.ppv.length; i++) {
            solarSumCurrentYear += Number(dataCurrentYear.ppv[i]);
          }
          for (let i = 0; i < dataCurrentYear.sysOut.length; i++) {
            localConsumptionCurrentYear += Number(dataCurrentYear.sysOut[i]);
          }

          const dataYearAgo = data.detailsDataYearAgo.data.chartData;
          let solarSumYearAgo = 0;
          let localConsumptionYearAgo = 0;
          for (let i = 0; i < dataYearAgo.ppv.length; i++) {
            solarSumYearAgo += Number(dataYearAgo.ppv[i]);
          }
          for (let i = 0; i < dataYearAgo.sysOut.length; i++) {
            localConsumptionYearAgo += Number(dataYearAgo.sysOut[i]);
          }

          const solar: number[] = [solarSumYearAgo, solarSumCurrentYear];
          const loadConsumption: number[] = [
            localConsumptionYearAgo,
            localConsumptionCurrentYear,
          ];
          const anios: string[] = [
            data.detailsDataYearAgo.year.toString(),
            data.detailsDataCurrentYear.year.toString(),
          ];

          return {
            anios: anios,
            solar: solar,
            loadConsumption: loadConsumption,
          };
        })
      );
  }
}
