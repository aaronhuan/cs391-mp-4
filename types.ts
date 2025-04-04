export type StockData = {
    symbol: string; // to show the company name
    date: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
  };
  
export type entryVal = {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
}

// from demo example 
//   "2009-01-30 17:05:00": {
//     "1. open": "50.1318",
//     "2. high": "50.1373",
//     "3. low": "50.1318",
//     "4. close": "50.1373",
//     "5. volume": "334"
// },
// all strings