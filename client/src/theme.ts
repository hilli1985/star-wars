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
    MuiCard :{
      styleOverrides: {
              root: {
                fontSize: '1rem',
                backgroundColor: '#393E43',
              },
            }
    }
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         fontSize: '1rem',
  //         backgroundColor: '#202020',
  //       },
  //       containedSecondary: {
  //         backgroundColor: '#272B30',
  //         color: '#FFE300',
  //         '&:hover': {
  //           backgroundColor: '#3D4247',
  //         },
  //       },
  //     }
  //   },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#808080",
      contrastText: "#303030",
    },
    secondary: {
      main: "#FFE300",
      contrastText: "#C8C8C8"
    },
    background: {
      paper: "#454A4E",
      default: "#272B30",
    },
    text: {
      secondary:"#C8C8C8"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",    
  },
});

export { themeDark, themeLight };
