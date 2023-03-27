import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { PlantInfo } from '../interfaces/plantInfo.interface';
import { PlantList } from '../interfaces/plantList.interface';
import { PlantDetailsHour } from '../interfaces/plantDetailsHour.interface';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ){}

  getPlantsBasicInfo(): Observable<PlantList>{
    return this.http.get<PlantList>(`${this.baseUrl}`)
  }

  getPlantInfo(plantId: string): Observable<PlantInfo>{
    return this.http.get<PlantInfo>(`${this.baseUrl}/${plantId}`)
  }

  getPlantDetailHours(plantId: string): Observable<
    {
      horas: string[],
      solar : number[]
      loadConsumption : number[]
    }
  > {
    return this.http.get<PlantDetailsHour>(`${this.baseUrl}/details/${plantId}`)
      .pipe(
        map(data => {
          const horas = Object.keys(data.chartData);
          const solar = horas.map(hora => Number(data.chartData[hora].ppv));
          const loadConsumption = horas.map(hora => Number(data.chartData[hora].sysOut));

          let start = 0;
          let end = loadConsumption.length - 1;

          for (let i = 0; i < loadConsumption.length; i++) {
            if (loadConsumption[i] !== 0 || solar[i] !== 0 || loadConsumption[i] !== 0 ) {
              start = i;
              break;
            }
          }

          for (let i = loadConsumption.length - 1; i >= 0; i--) {
            if (loadConsumption[i] !== 0 || solar[i] !== 0 || loadConsumption[i] !== 0 ) {
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
      )
  }

}
