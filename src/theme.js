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
    lightTheme: {
      bdBody: 'rgb(227, 244, 244)',
      bdSideBarPrimary: 'rgb(32 32 34)',
      bdSideBarSecondary: 'rgb(30 30 31)',
      colorTextPrimary: 'rgb(255 255 255)',
      colorTextSecondary: 'reb(250 250 250)',
      colorTextTertiary: 'rgb(214 214 214 / 70%)',
      highLightTextPrimary: 'rgb(255 219 112)',
      highLightTextSecondary: 'rgb(206 177 90)',
    },
    DarkTheme:{
      bdBody: 'rgb(18 18 18)',
      bdSideBarPrimary: 'rgb(32 32 34)',
      bdSideBarSecondary: 'rgb(30 30 31)',
      colorTextPrimary: 'rgb(255 255 255)',
      colorTextSecondary: 'reb(250 250 250)',
      colorTextTertiary: 'rgb(214 214 214 / 70%)',
      highLightTextPrimary: 'rgb(255 219 112)',
      highLightTextSecondary: 'rgb(206 177 90)',
    },
    boxShadow: {
      main: '0px 7px 10px rgba(40, 41, 61, 0.08)',
    },
  },
});