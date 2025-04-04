//import components and stuff

import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import { Typography } from "@mui/material";
export default function Home(){
  return(
    <>
      <HeaderComponent/>
      <main>
        <Typography variant="h3" align="center" >Hello! Welcome to Stock Monitoring. </Typography>
      </main>
      <FooterComponent/>
    </>
  );
}
