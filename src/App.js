import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProviderComponent } from './theme';
import routes from './routes'
import StyledApp from './StyledApp';

function App() {
  const theme = ThemeProviderComponent();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledApp>
          <div className="App">
            <RouterProvider router={routes} />
            {/* <SignInLayout /> */}
          </div>
        </StyledApp>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
