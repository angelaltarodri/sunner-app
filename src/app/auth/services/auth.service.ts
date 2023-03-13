import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of, map} from 'rxjs';
import { environment } from '../../../environments/environment';

import { Auth } from '../interfaces/auth.interface';
import { PlantList } from '../interfaces/plantList.interface';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return {...this._auth!}
  }

  constructor(
    private http: HttpClient,
  ){}

  verificaAutentificacion (): Observable<boolean>  {
    if ( !localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<PlantList>(`${this.baseUrl}`)
      .pipe(
        map( plantList => plantList.data.map(plant => plant.plantId)),
        map( plantList => {
          const token = localStorage.getItem('token');
          if ( plantList.find(plant => plant === token)) {
            return true;
          } else {
            return false;
          }
        })
      )
    // return of(true);
    // return true;
  }

  login(userData: Auth){
    return this.http.get<PlantList>(`${this.baseUrl}`)
      .pipe(
        map( plantList => plantList.data.map(plant => plant.plantId)),
        switchMap( plantList => {
          const plant = plantList.find(plant => plant === userData.username)
          if ( plant ) {
            localStorage.setItem('token', userData.id)
            this._auth = userData;
            return of(plant)
          }
          return of([])
        }),
      )
  }

  logout() {
    this._auth = undefined;
    localStorage.setItem('token', '')
  }

}
