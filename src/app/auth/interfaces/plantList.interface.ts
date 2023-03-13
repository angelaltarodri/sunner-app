export interface PlantList {
  data:      Datum[];
  success:   boolean;
  totalData: TotalData;
}

export interface Datum {
  currentPower:   string;
  isHaveStorage:  string;
  plantId:        string;
  plantMoneyText: string;
  plantName:      string;
  todayEnergy:    string;
  totalEnergy:    string;
}

export interface TotalData {
  CO2Sum:          string;
  currentPowerSum: string;
  eTotalMoneyText: string;
  isHaveStorage:   string;
  todayEnergySum:  string;
  totalEnergySum:  string;
}
