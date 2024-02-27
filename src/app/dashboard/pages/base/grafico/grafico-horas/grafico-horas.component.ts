import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { PlantTimespan } from 'src/app/dashboard/enum/plantTimespan.enum';
import { PlantService } from 'src/services/plant.service';

@Component({
  selector: 'app-grafico-horas',
  templateUrl: './grafico-horas.component.html',
  styleUrls: ['./grafico-horas.component.scss'],
})
export class GraficoHorasComponent implements OnInit {
  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token')!;
    this.plantService
      .getPlantDetailHours(token!, PlantTimespan.hour)
      .subscribe((res) => {
        this.barChartLabels = res.horas;
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
      hoverBackgroundColor: 'white',
      pointRadius: 0,
      borderWidth: 1,
      fill: 'origin',
    },
    {
      data: [],
      label: 'loadConsumption (kWh)',
      borderColor: '#00346d',
      backgroundColor: '#00356d1f',
      hoverBackgroundColor: 'white',
      pointRadius: 0,
      borderWidth: 1,
      fill: 'origin',
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
    elements: {
      line: {
        tension: 0.5,
      },
    },
    plugins: {
      legend: { display: true },
    },
  };

  barChartLegend = true;
  barChartType: ChartType = 'line';

  public BorderWidth: number = 1;
}
