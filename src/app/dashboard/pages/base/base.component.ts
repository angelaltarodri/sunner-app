import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ahorroCO2, ahorroEnS } from '../../context/var';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  energiaTotalConsumida:number = 0;
  ahorroCO2: number = ahorroCO2;
  ahorroEnS: number = ahorroEnS;
  nombrePlanta: string = ''

  constructor(
    private plantService: PlantService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.plantService.getPlantInfo(token!)
      .subscribe( res => this.energiaTotalConsumida = Number(res.totalEnergy));
    this.plantService.getPlantsBasicInfo()
      .subscribe( plantList => {
        this.nombrePlanta = plantList.data.find(plant => plant.plantId === token)?.plantName!;
      });
  }

  get ahorroMonetario() {
    return this.energiaTotalConsumida*this.ahorroEnS;
  }
  get ahorroEmisionesKG() {
    return this.energiaTotalConsumida*this.ahorroCO2*1000;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./']);
  }

}
