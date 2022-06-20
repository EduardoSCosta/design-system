import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../GlobalStyles';
import theme from '../../theme';

interface DesignSystemProps {
  children: React.ReactNode;
}

const DesignSystemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DesignSystem = ({ children }: DesignSystemProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DesignSystemContainer>
        {children}
      </DesignSystemContainer>
    </ ThemeProvider>
  );
}

export default DesignSystem;
