export type ChartSeries = {
  name: string
  type?: "candlestick" | "bar" | "line" | "area"
  data: any
}[]
