import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-grafico-linear',
  templateUrl: './grafico-linear.component.html',
  styleUrls: ['./grafico-linear.component.scss']
})
export class GraficoLinearComponent implements OnInit {

  constructor(
    private plantService: PlantService,
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.plantService.getPlantDetailHours(token!)
      .subscribe( res => {
        console.log(res)
        this.barChartLabels = res.horas;
        this.barChartData[0].data = res.loadConsumption;
        this.barChartData[1].data = res.solar;
      });
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;

  public BorderWidth: number = 0

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'loadConsumption', borderColor: '#00F7AD', backgroundColor: '#00f7ad36', hoverBackgroundColor: 'white' , pointRadius: 0, borderWidth: this.BorderWidth },
    { data: [], label: 'solar', borderColor: '#00E0DB', backgroundColor: '#00e0dc34', hoverBackgroundColor: 'white' , pointRadius: 0, borderWidth: this.BorderWidth },
    // { data: [  ], label: 'General', backgroundColor: 'orange', type: 'bar'},
  ];
}
