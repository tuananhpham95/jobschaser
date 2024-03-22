import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  custom: {
    appBarHeight: "48px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ff5252",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#000",
        },
      },
    },
  },
  // ...other properties
});
export default theme;
