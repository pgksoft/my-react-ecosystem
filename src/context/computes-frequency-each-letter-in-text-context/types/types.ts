export type TDataChart = {
  name: string;
  percent: number;
  count: number;
};

export type TKeyDataCharts = keyof TDataChart;

export type TDataCharts = TDataChart[] | null;
