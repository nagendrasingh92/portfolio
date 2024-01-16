import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#283955',
    },
    secondary: {
      main: '#CDA14B',
    },
    customColor: {
      primarySecond: '#F0EFE9',
      secondarySecond: '#FCF6EA',
      main: '#2B2724',
      greyFirst: '#999999',
      greySecond: '#E2E2E2',
      greyThird: '#FDFDFD',
      otherFirst: '#DE350B',
      otherSecond: '#F4F6FA'
    },
    boxShadow: {
      main: '0px 7px 10px rgba(40, 41, 61, 0.08)',
    },
  },
});