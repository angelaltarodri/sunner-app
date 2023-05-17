import { PlantDashboardDay } from './plantDashboardDay.interface';

export interface PlantDashboardYear {
  detailsDataCurrentYear: DetailsDataYear;
  detailsDataYearAgo: DetailsDataYear;
}

export interface DetailsDataYear {
  data: PlantDashboardDay;
  year: number;
}
