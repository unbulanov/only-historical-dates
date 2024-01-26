export interface Theme {
  id: number;
  title: string;
  dates: Array<{
    date: number;
    text: string;
  }>
}