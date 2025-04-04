import getDailyStock from "@/lib/getDailyStock";
import StockDisplay from "@/components/Stock-Display";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
export default async function Home() {
  const data = await getDailyStock("IBM"); 
  if (data === "error"){
    return(
        <h4> Failed to load Stock Data. Please try again at a later time</h4>
    );
  }
  return (
    <>
        <HeaderComponent/>
        <main style={{ padding: "1rem" }}>
        <StockDisplay inputData={data} />
        </main>
        <FooterComponent/>
    </>
    
  );
}