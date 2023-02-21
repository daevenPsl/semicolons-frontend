import { Wallet } from "../../components/WalletComponent/wallet";
import Grid from "@mui/material/Grid";
import {ClaimCheckerComponent} from "../../components/ClaimCheckerComponent/ClaimCheckerComponent";

export const ClaimCheckerPage=()=>{
    return(
        <>
        <Grid container>
            <Grid item xs={6}>
                <Wallet/>
            </Grid>
            <Grid item xs={6}>
                <ClaimCheckerComponent/>
            </Grid>
        </Grid>
        
        </>
    )
}