import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Admin from "./screens/admin-dashboard/Dashboard";
import Products from "./screens/products/Products";
import Checkout from "./screens/checkout/Checkout";
import Signin from "./screens/sign-in/SignIn";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  </ThemeProvider>
);
