import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
const generatePalette = (themeMode) => {
  switch (themeMode) {
    case 'dark':
      return {
        palette: {
          customColor: {
            primary: {
              main: '#3f51b5',
              light: '#6573C3',
              dark: '#2C387E',
              contrastText: '#fff',
            },
            secondary: {
              main: '#f50057',
              light: '#f73378',
              dark: '#AB003C',
            },
            background: {
              default: '#303030',
              paper: '#090808',
            },
            Error: {
              main: '#f44336',
              light: '#e57373',
              dark: '#d32f2f',
            },
            text: {
              main: '#FFFFFF',
              light: '#d3c8c8',
              dark: '#000000',
            }
          },
        },
      };
    case 'default':
      return {
        palette: {
          customColor: {
            primary: {
              main: '#FFFFFF',
              light: '#CCCCCC',
              dark: '#FFFFFF',
            },
            secondary: {
              main: '#DDDDDD',
              light: '#AAAAAA',
              dark: 'DDDDDD',
            },
            background: {
              default: '#f2f4f7',
              paper: '#FFFFFF',
            },
            text: {
              main: '#000000',
              light: '#d3c8c8'
            }
          },
        },
      };
  }
};

export const ThemeProviderComponent = () => {
  const themeMode = useSelector((state) => state.themeMode.mode);
  console.log('themeMode', themeMode)
  const palette = generatePalette(themeMode);
  console.log('palette', palette)
  return createTheme({ ...palette });
}