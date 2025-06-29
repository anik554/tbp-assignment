export interface PaxBaggage {
  adult: string;
}

export interface FlightData {
  refsegment: string;
  holdable_status: number;
  air_logo: string;
  airline_name: string;
  currency: string;
  carrier: string;
  bookingclasscode: string;
  flight_name: string;
  airlinedesignator: string;
  flightnumber: string;
  equipmentcode: string;
  equipmenttext: string;
  departuredate: string;
  arrivaldate: string;
  origincode: string;
  destinationcode: string;
  duration: number;
  baggage_details: string;
  pax_baggage: PaxBaggage;
}

export interface ItinDetail {
  origindestinationorder: number;
  fare_rule: string;
  layover: number;
  flight_data: FlightData[];
}

export interface PriceInfo {
  base: number;
  total: number;
  currency: string;
}

export interface FlightSearchResult {
  travel_type: string;
  resultid: string;
  salecurrencycode: string;
  air_logo: string;
  itin_details: ItinDetail[];
  variants: []; 
  variant_count: number;
  price_info: PriceInfo;
}

export interface ISearchType{
    message:string;
    status_code:number;
    data:FlightSearchResult
}