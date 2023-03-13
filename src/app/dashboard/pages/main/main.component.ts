import { Component, OnInit } from '@angular/core';
import { PlantInfo } from 'src/app/auth/interfaces/plantInfo.interface';
import { ahorroCO2, ahorroEnS } from '../../context/var';
import { PlantServiceService } from '../../services/plant-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  energiaTotalConsumida:number = 0;
  ahorroCO2: number = ahorroCO2;
  ahorroEnS: number = ahorroEnS;

  constructor(
    private plantService: PlantServiceService,
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.plantService.getPlantInfo(token!)
      .subscribe( res => this.energiaTotalConsumida = Number(res.totalEnergy));
  }

  showPlantInfo () {
    console.log(this.energiaTotalConsumida)
  }

  get ahorroMonetario() {
    return this.energiaTotalConsumida*this.ahorroEnS;
  }
  get ahorroEmisionesKG() {
    return this.energiaTotalConsumida*this.ahorroCO2*1000;
  }

}
