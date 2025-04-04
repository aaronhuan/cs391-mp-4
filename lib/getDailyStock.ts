
import { StockData, entryVal } from "@/types";

// required function, symbol, interval, apikey
// function=TIME_SERIES_INTRADAY, symbol =user choice, interval = user choice, apikey= from me
export default async function getDailyStock(
    symbol: string, //get which company
 ): Promise<StockData[] | "error">{
    const stockFunction="TIME_SERIES_INTRADAY";
    const ALPHAVANTAGE_API_KEY= process.env.ALPHAVANTAGE_KEY;
    const interval= "60min"; //default interval, other options: 1min, 5min, 15min, 30min, 60min
    try{
        const data = await fetch(`https://www.alphavantage.co/query?function=${stockFunction}&symbol=${symbol}&interval=${interval}&outputsize=compact&apikey=${ALPHAVANTAGE_API_KEY}`);
        if (!data.ok) {
            throw new Error("Could not fetch stock data");
        }
        const jsondata = await data.json();
        const TimeSeries = jsondata[`Time Series (${interval})`]; // https://stackoverflow.com/questions/4968406/javascript-property-access-dot-notation-vs-brackets?
        // I want the first 8 
        //https://stackoverflow.com/questions/69504084/slicing-json-data Slice if array
        // https://stackoverflow.com/questions/14528385/how-to-convert-json-object-to-javascript-array turn Json object into array
        const topFive = Object.entries(TimeSeries).slice(0, 14); 
        return topFive.map(([timestamp, values]) => ({ //values is type unknown
            symbol,
            date: timestamp,
            open: (values as entryVal)["1. open"], //https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
            high: (values as entryVal)["2. high"], // values is type entryVal which is the values as a whole, then it breaks it down into specific components
            low: (values as entryVal)["3. low"],
            close: (values as entryVal)["4. close"],
            volume: (values as entryVal)["5. volume"],
        }));
    } catch (er){
        return "error";
    }
 };
    
  

 /* 
  "Time Series (5min)": {
        "2025-04-01 19:55:00": {
            "1. open": "250.9450",
            "2. high": "251.5200",
            "3. low": "250.4000",
            "4. close": "250.4000",
            "5. volume": "72"
        },
        "2025-04-01 19:50:00": {
 */

  /*
  fetch API example:
  export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
  */