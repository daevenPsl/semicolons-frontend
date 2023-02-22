import { Wallet } from "../../components/WalletComponent/wallet";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/NavBarComponent/Navbar";

export const IdentityViewPage=()=>{
    return(
        <>
        <Navbar/>
        <Grid container>
            <Grid item xs={6}>
                <Wallet/>
            </Grid>
            <Grid item xs={6}>
                <Wallet/>
            </Grid>
        </Grid>
        
        </>
    )
}