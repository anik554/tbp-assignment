export interface ISearchData {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passenger: {
    adult: number;
    children: number;
    infant: number;
  };
}