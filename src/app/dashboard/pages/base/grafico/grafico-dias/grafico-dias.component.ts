import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { PlantTimespan } from 'src/app/dashboard/enum/plantTimespan.enum';
import { PlantService } from 'src/services/plant.service';

@Component({
  selector: 'app-grafico-dias',
  templateUrl: './grafico-dias.component.html',
  styleUrls: ['./grafico-dias.component.scss'],
})
export class GraficoDiasComponent implements OnInit {
  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token')!;
    this.plantService
      .getPlantDetailDays(token, PlantTimespan.day)
      .subscribe((res) => {
        this.barChartLabels = res.dias;
        this.barChartData[1].data = res.loadConsumption;
        this.barChartData[0].data = res.solar;
      });
  }

  barChartData: ChartDataSets[] = [
    {
      data: [],
      label: 'solar (kWh)',
      borderColor: '#fda500',
      backgroundColor: '#fda40043',
      hoverBorderColor: 'black',
      hoverBackgroundColor: 'black',
      pointRadius: 0,
      borderWidth: 1,
    },
    {
      data: [],
      label: 'loadConsumption (kWh)',
      borderColor: '#00346d',
      backgroundColor: '#00356d1f',
      hoverBorderColor: 'black',
      hoverBackgroundColor: 'black',
      pointRadius: 0,
      borderWidth: 1,
    },
  ];

  barChartLabels: Label[] = [];
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  barChartLegend = true;
  barChartType: ChartType = 'bar';

  public BorderWidth: number = 1;
}
