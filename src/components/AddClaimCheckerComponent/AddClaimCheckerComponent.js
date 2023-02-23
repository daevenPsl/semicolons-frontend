import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from '@mui/material/MenuItem';

export function AddClaimCheckerComponent() {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const ClaimType = [
    {
      value: 'KYC',
      label: 'KYC',
    },
    {
      value: 'GoogleID',
      label: 'Google',
    },
    {
      value: 'FaceBookID',
      label: 'Facebook',
    },
      ];

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        + Add a Claim Checker
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Deploy a new Claim Checker Contract:</DialogTitle>
        <DialogContent>

          {/* <DialogContentText>

            To subscribe to this website, please enter your email address here. We

            will send updates occasionally.

          </DialogContentText> */}

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"

          />
          
          <TextField
            autoFocus
            margin="dense"
            id="name2"
            label="Trusted Issuer"
            type="text"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name3"
            label="Method Type"
            type="text"
            fullWidth
            variant="standard"
          />  
        <TextField
          id="name4"
          select
          label="ClaimType"
          type="text"
          fullWidth
            variant="standard"
                 >
          {ClaimType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        </DialogContent>

        <DialogActions>
        <Button variant="contained" >
                Deploy
              </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


