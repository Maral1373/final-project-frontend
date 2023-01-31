import * as React from "react";
import AppBar from "../../components/AppBar/AppBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../components/CopyRight/CopyRight";
import Avatar from "@mui/material/Avatar";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
export default function Products() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper", //white
            pb: 6,
            pt: 4,
          }}
        >
          <Container maxWidth="100vw">
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              <CardMedia
                component="img"
                sx={{ pt: 4, maxWidth: "100vw" }}
                image="https://source.unsplash.com/random"
                alt="random"
              />
            </Typography>
            <Grid
              item
              xs={12}
              sm={10}
              md={4}
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Avatar
                sx={{
                  bgcolor: "#EAC7C7",
                  marginBottom: "5",
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                }}
                item
                xs={4}
              >
                <LocalShippingOutlinedIcon fontSize="large" />
              </Avatar>
              <Box
                color={"orange"}
                item
                xs={4}
                marginBottom={5}
                textAlign={"center"}
              >
                Free shipping up to $50
              </Box>
              <Avatar
                sx={{
                  bgcolor: "#A0C3D2",
                  marginBottom: "5",
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                }}
                item
                xs={4}
              >
                <CategoryIcon fontSize="large" />
              </Avatar>

              <Box
                color={"red"}
                item
                xs={4}
                marginBottom={5}
                textAlign={"center"}
              >
                Product well package
              </Box>
              <Avatar
                sx={{
                  bgcolor: "#EAC7C7",
                  marginBottom: "5",
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                }}
                item
                xs={4}
              >
                <SupportAgentIcon fontSize="large" />
              </Avatar>
              <Box item xs={12} textAlign={"center"}>
                Support
              </Box>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ my: 0 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    breakpoints: {
                      values: {
                        xs: 0,
                        sm: 600,
                        lg: 1200,
                        xl: 1536,
                      },
                    },
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: " #F7F5EB",
                    },
                  }}
                >
                  <CardMedia
                    maxWidth="sm"
                    component="img"
                    sx={{
                      px: 3,
                      py: 3,
                      "&:hover": {
                        width: "105%",
                        height: "102%",
                        transformOrigin: { horizontal: "center" },
                      },
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      Product name
                    </Typography>
                    <Typography>about product</Typography>
                    <Typography>$price</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton size="large" aria-label="add to shopping cart">
                      <AddShoppingCartIcon />
                    </IconButton>
                    <IconButton variant="plain" color="danger">
                      <FavoriteBorder />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
