import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContext } from "../../shared/context/DialogContext";
import { AuthContext } from "../../shared/context/AuthContext";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const Login = () => {
  const { open, handleClose } = useContext(DialogContext);
  const { loginHandler } = useContext(AuthContext);
  const submitHandler = ()=>{
    loginHandler
    (<Redirect to="/"/>)
  }  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Login site please fill the fields inputs
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        <Button
          href="/register"
          style={{ marginTop: "1rem" }}
          variant="outlined"
          color="default"
        >
          or register here
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button onClick={submitHandler} variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
