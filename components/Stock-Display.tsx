"use client";
import { StockData } from "@/types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
export default function StockDisplay({
    inputData
}: {inputData:StockData[]}){
    return(
    <Grid container spacing={3}>
      {inputData.map((oneEntry) => ( 
        <Grid key={oneEntry.date}>
        {/* // You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array */}
          <Card elevation={10}>
            <CardContent>
              <Typography color= "tertiary" variant="h5">{oneEntry.date.slice(0,10)}</Typography>
              <Typography color="textSecondary" variant="h6">{oneEntry.date.slice(10,16)} EST</Typography>
              <Typography color="primary">Open: {oneEntry.open}</Typography>
              <Typography color="primary">High: {oneEntry.high}</Typography>
              <Typography color="primary">Low: {oneEntry.low}</Typography>
              <Typography color="primary">Close: {oneEntry.close}</Typography>
              <Typography color="primary">Volume: {oneEntry.volume}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
        //     
        //     {inputData.map((oneData)=>( //for each "oneData", or section inside StockData[] 
        //         <div>
        //             <h2>{oneData.symbol}</h2>{/* symbol/ company */}
        //             <h3>Date = {oneData.date}</h3>
        //             <p>Open = {oneData.open}</p>
        //             <p>Close = {oneData.close}</p>
        //             <p>High = {oneData.high}</p>
        //             <p>Low = {oneData.low}</p>
        //             <p>Volume = {oneData.volume}</p>
        //         </div>
        //     ))}
        // </>
    )
}