import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlantInfo } from 'src/app/auth/interfaces/plantInfo.interface';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantServiceService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ){}

  getPlantInfo(plantId: string){
    return this.http.get<PlantInfo>(`${this.baseUrl}/${plantId}`)
  }

}
