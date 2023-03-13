export interface PlantInfo {
  Co2Reduction:    string;
  ammeterType:     string;
  deviceList:      DeviceList[];
  invTodayPpv:     string;
  isHaveOptimizer: number;
  isHavePumper:    string;
  nominalPower:    number;
  nominal_Power:   number;
  optimizerType:   number;
  plantMoneyText:  string;
  storagePgrid:    string;
  storagePuser:    string;
  storageTodayPpv: string;
  todayDischarge:  string;
  todayEnergy:     string;
  totalEnergy:     string;
  totalMoneyText:  string;
  useEnergy:       string;
}

export interface DeviceList {
  address?:          number;
  datalogSn:         string;
  deviceAilas:       string;
  deviceSn:          string;
  deviceStatusText?: string;
  deviceType:        string;
  iconimg?:          string;
  invType?:          string;
  param1?:           string;
  param2?:           string;
  type:              number | string;
  value1?:           string;
  value2?:           string;
  bdc1Soc?:          number;
  bdc2Soc?:          number;
  deviceStatus?:     string;
  eToday?:           string;
  eTodayStr?:        string;
  energy?:           string;
  location?:         string;
  lost?:             boolean;
  power?:            string;
  powerStr?:         string;
  prePto?:           string;
  type2?:            string;
}
