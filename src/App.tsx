import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import theme from './theme';
import IconsPage from './view/pages/IconsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <IconsPage />
    </ ThemeProvider>
  );
}

export default App;
