import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import AppBarItem from "./AppBarItem";
import { useNavigate } from "react-router-dom";
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
            {/* Icon name */}
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

            {/* Login Button */}

            <LoginButton />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
