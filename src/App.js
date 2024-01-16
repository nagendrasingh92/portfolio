import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material';
import { theme } from './theme';
import routes from './routes'


import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <RouterProvider router={routes} />
          {/* <SignInLayout /> */}
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
