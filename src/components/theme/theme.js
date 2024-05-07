import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: 'rgba(227,117,45,255)', 
            },
          },
        },
      },
      MuiToolbar: {
        root: {
          display: 'flex', 
          flexDirection: 'row', 
        }
      }
    },
    palette: {
      primary: {
        main: 'rgba(144,179,25,255)',
      },
      secondary: {
        main: 'rgba(255,255,255,255)',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 640, 
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });