import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchBar from "./SearchBar";
import AppBarItem from "./AppBarItem";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
// Dark mode theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* Name */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => navigate("/")}
            >
              ShopNow
            </Typography>

            {/* AppBarItem  */}
            <AppBarItem />

            {/* Search Bar */}
            <SearchBar />

            {/* Cart , Wishlist , User  */}
            <Icon />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
