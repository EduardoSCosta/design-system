import DesignSystem from './view/components/DesingSystem';
import ButtonsPage from './view/pages/ButtonsPage';
import CheckboxPage from './view/pages/CheckboxPage';
import IconsPage from './view/pages/IconsPage';

function App() {
  return (
    <DesignSystem>
      <IconsPage />
      <ButtonsPage />
      <CheckboxPage />
    </DesignSystem>
  );
}

export default App;
