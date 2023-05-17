export interface PlantDashboardDay {
  chartData: ChartData;
  chartDataUnit: string;
  eAcCharge: string;
  eCharge: string;
  eChargeToday1: string;
  eChargeToday2: string;
  eChargeToday2Echarge1: string;
  echarge1: string;
  echargeToat: string;
  elocalLoad: string;
  etouser: string;
  keyNames: string[];
  photovoltaic: string;
  ratio1: string;
  ratio2: string;
  ratio3: string;
  ratio4: string;
  ratio5: string;
  ratio6: string;
}

export interface ChartData {
  pacToUser: string[];
  ppv: string[];
  sysOut: string[];
  userLoad: any[];
}
