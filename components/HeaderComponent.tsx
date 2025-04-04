import Link from "next/link"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


//The sx prop is a shortcut for defining custom styles that have access to the theme.
export default function HeaderComponent(){
    return(
        <header>
            <Box sx={{
                display: "flex",
                justifyContent:"space-between",
                alignItems: "center",
                margin:"0.5vw ",
                backgroundColor: "lightblue",
            }}>
                <Typography variant = "h4" component ="div"> Stock Monitoring</Typography>
                <nav>
                    <Box component= "ul" sx = {{
                        display: "flex",
                        gap: "2rem",
                        listStyle: "none",
                    }}>
                            <li><Link href="/" style={{textDecoration:"none", fontSize: "1.4vw",}}>Home</Link></li>
                            <li><Link href="/stocks" style={{textDecoration:"none", fontSize: "1.4vw", padding: "0 1vw 0 0",}}>Monitor</Link></li>
                    </Box>
                    
                </nav>
            </Box>
            
        </header>
    )
}