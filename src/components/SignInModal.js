import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AppContext } from '../AppContext';

export default function SignInModal() {
    const {isModalOpen, handleSignInBtn, handleCloseLogIn}=useContext(AppContext);

  return (
    <React.Fragment>
      <Dialog
        // {(state.is)}
        open={isModalOpen}
        className='app-modal'
        onClose={(_, reason) => {
          // console.log('reason:', reason);
          handleCloseLogIn()
        }}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseLogIn();
          },
        }}
      >
        <DialogTitle className='app-modal-title' >LOG IN</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="username"
            name="username"
            label="Username"
            type="text"
            value= "abc"
            fullWidth
            variant="standard"
          />
          <TextField
            
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            value= "123"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignInBtn}>SIGN IN</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
