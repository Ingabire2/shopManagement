import React from "react";
import { Container, Grid, Card, TextField, Stack, Button } from "@mui/material";
import "./index.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
const styles = { width: "100%", height: "100vh" };
const ViewComponent = (props) => {
  const navigate = useNavigate();
  return (
    <Container sx={styles}>
      <Grid
        sx={styles}
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={3} xs={0}></Grid>
        <Grid item sm={6} xs={12}>
          <Card className="signin_container">
            <Stack spacing={2} alignItems="center" justifyContent="center">
              <img src={logo} alt="logo" />
              <label>Signin Shop Managment</label>

              <TextField
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
              />
              <TextField
                fullWidth
                id="filled-basic"
                label="Password"
                variant="filled"
              />
              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Signin
              </Button>
            </Stack>
          </Card>
        </Grid>
        <Grid item sm={3} xs={0}></Grid>
      </Grid>
    </Container>
  );
};

export default ViewComponent;
