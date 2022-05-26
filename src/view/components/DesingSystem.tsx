import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../GlobalStyles";
import theme from "../../theme";

interface DesignSystemProps {
  children: React.ReactNode;
}

const DesignSystem = ({ children }: DesignSystemProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ ThemeProvider>
  );
}

export default DesignSystem;
