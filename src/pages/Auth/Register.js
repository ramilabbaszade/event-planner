import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { DialogContext } from "../../shared/context/DialogContext";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../shared/context/AuthContext";


const Register = () => {
  const { loginHandler } = useContext(AuthContext);
  const { handleClickOpen } = useContext(DialogContext);
  const submitHandler = ()=>{
    loginHandler
    (<Redirect to="/"/>)
  }  
  const styles = {
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "70vh",
  };
  return (
    <div style={styles}>
      <Container maxWidth="sm">
        <h1>Register Page</h1>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="User Name"
          type="email"
          fullWidth
        />
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
          id="name"
          label="Password"
          type="password"
          fullWidth
        />
        <Button
          style={{ marginTop: "1rem", marginRight:'1rem' }}
          variant="contained"
          color="primary"
          onClick={submitHandler}
        >
          Register
        </Button>
        <Button
          onClick={handleClickOpen}
          style={{ marginTop: "1rem" }}
          color="default"
        >
          Or Login
        </Button>
      </Container>
    </div>
  );
};

export default Register;
