import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantInfo } from 'src/app/auth/interfaces/plantInfo.interface';
import { PlantList } from 'src/app/auth/interfaces/plantList.interface';

import { environment } from '../../../environments/environment';

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

}
