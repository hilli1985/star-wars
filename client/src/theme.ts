import { createTheme } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#FF4081",
    },
    background: {
      default: "#f0f0f0",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const themeDark = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          backgroundColor: '#202020',
        },
        containedSecondary: {
          backgroundColor: '#272B30',
          color: '#FFE300',
          '&:hover': {
            backgroundColor: '#3D4247',
          },
        },
      }
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#2196F3",
    },
    secondary: {
      main: "#808080",
    },
    background: {
      default: "#303030",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export { themeDark, themeLight };
