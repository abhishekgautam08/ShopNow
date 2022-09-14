import React from "react";
import {
  FormControl,
  Stack,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Box } from "@mui/material";
const SideBar = () => {
  return (
    <>
      <Box
        bgcolor="#272727"
        color="white"
        padding={3}
        // sx={{ display: { xs: "none", sm: "block" } }}
        sx={{
          width: 250,

          // display: { xs: "none", sm: "block" },
        }}
      >
        <Stack direction="column">
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ color: "white" }}
            >
              Filter
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Price -- Low to High"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Price -- Low to High"
                control={<Radio />}
                label="Price -- Low to High"
              />
              <FormControlLabel
                value="Price -- High to Low"
                control={<Radio />}
                label="Price -- High to Low"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Box>
    </>
  );
};

export default SideBar;
