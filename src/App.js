import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "./ProTip";
import SignIn from "./screens/sign-in/SignIn";
import Products from "./screens/products/Products";
import Copyright from "./components/CopyRight/CopyRight";
import AppBar from "./components/AppBar/AppBar";

export default function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Box sx={{ my: 4 }}>
          <SignIn />
        </Box>
        <Products />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
