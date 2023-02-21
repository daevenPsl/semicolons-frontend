import { Wallet } from "../../components/WalletComponent/wallet";
import Grid from "@mui/material/Grid";


export const IdentityViewPage=()=>{
    return(
        <>
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